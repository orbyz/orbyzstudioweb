"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BRIEF_FIELDS } from "./briefQuestions";

const STORAGE_KEY = "orbyz_brief_session";

type Answers = Record<string, string>;
type BriefStatus = "in_progress" | "completed";

type CachedSession = {
  id: string;
  answers: Answers;
  stepIndex: number;
};

function readCachedSession(): CachedSession | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored) as Partial<CachedSession>;
    if (!parsed.id) return null;

    return {
      id: parsed.id,
      answers: parsed.answers ?? {},
      stepIndex: typeof parsed.stepIndex === "number" ? parsed.stepIndex : 0,
    };
  } catch {
    return null;
  }
}

function createSession(): CachedSession {
  return {
    id: crypto.randomUUID(),
    answers: {},
    stepIndex: 0,
  };
}

function getOrCreateSession(): CachedSession {
  const cached = readCachedSession();
  if (cached) return cached;

  const session = createSession();
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  }
  return session;
}

function persistLocal(session: CachedSession) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

async function saveBrief(payload: {
  id: string;
  answers: Answers;
  currentStep: number;
  status: BriefStatus;
}) {
  const response = await fetch("/api/brief", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (response.ok) return;

  const message = await response.text();
  throw new Error(message || "No se pudo guardar el brief.");
}

export function BriefWizard() {
  const [answers, setAnswers] = useState<Answers>({});
  const [stepIndex, setStepIndex] = useState(0);
  const [draftValue, setDraftValue] = useState("");
  const [direction, setDirection] = useState<1 | -1>(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const sessionIdRef = useRef("");

  const totalSteps = BRIEF_FIELDS.length;
  const field = BRIEF_FIELDS[stepIndex];
  const isLastStep = stepIndex === totalSteps - 1;

  useEffect(() => {
    const session = getOrCreateSession();
    const safeStepIndex = Math.min(
      Math.max(session.stepIndex, 0),
      Math.max(BRIEF_FIELDS.length - 1, 0),
    );
    const initialField = BRIEF_FIELDS[safeStepIndex];

    sessionIdRef.current = session.id;
    setAnswers(session.answers);
    setStepIndex(safeStepIndex);
    setDraftValue(initialField ? session.answers[initialField.id] ?? "" : "");
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, [stepIndex]);

  const progress = useMemo(
    () => Math.round(((stepIndex + 1) / totalSteps) * 100),
    [stepIndex, totalSteps],
  );

  function persistSession(nextAnswers: Answers, nextStepIndex: number) {
    const activeSessionId = sessionIdRef.current;
    if (!activeSessionId) return;

    persistLocal({
      id: activeSessionId,
      answers: nextAnswers,
      stepIndex: nextStepIndex,
    });
  }

  function buildAnswersSnapshot() {
    if (!field) return answers;
    return { ...answers, [field.id]: draftValue };
  }

  function handleChange(value: string) {
    if (!field) return;

    setDraftValue(value);

    const nextAnswers = { ...answers, [field.id]: value };
    setAnswers(nextAnswers);
    persistSession(nextAnswers, stepIndex);
  }

  async function handleNext() {
    if (!field || submitting) return;

    if (field.required && !draftValue.trim()) {
      setError("Esta pregunta es necesaria para continuar.");
      return;
    }

    if (field.type === "email" && draftValue.trim() && !isValidEmail(draftValue)) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }

    const activeSessionId = sessionIdRef.current;
    if (!activeSessionId) {
      setError("No se pudo iniciar la sesión del brief. Recarga la página.");
      return;
    }

    setError("");
    setSubmitting(true);

    const nextAnswers = buildAnswersSnapshot();

    try {
      if (isLastStep) {
        await saveBrief({
          id: activeSessionId,
          answers: nextAnswers,
          currentStep: totalSteps,
          status: "completed",
        });

        const notifyResponse = await fetch("/api/brief/notify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: activeSessionId }),
        });

        if (!notifyResponse.ok) {
          const message = await notifyResponse.text();
          throw new Error(message || "No se pudo notificar el brief.");
        }

        window.localStorage.removeItem(STORAGE_KEY);
        setAnswers(nextAnswers);
        setSubmitted(true);
        return;
      }

      const nextStepIndex = stepIndex + 1;
      const nextField = BRIEF_FIELDS[nextStepIndex];

      await saveBrief({
        id: activeSessionId,
        answers: nextAnswers,
        currentStep: nextStepIndex,
        status: "in_progress",
      });

      persistSession(nextAnswers, nextStepIndex);
      setAnswers(nextAnswers);
      setDirection(1);
      setStepIndex(nextStepIndex);
      setDraftValue(nextField ? nextAnswers[nextField.id] ?? "" : "");
    } catch (saveError) {
      console.error("Error en brief:", saveError);
      persistSession(nextAnswers, stepIndex);
      setError(
        "No pudimos guardar tu respuesta en este momento. Intenta nuevamente.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  function handleBack() {
    if (!field || stepIndex === 0 || submitting) return;

    const nextAnswers = buildAnswersSnapshot();
    const previousStepIndex = stepIndex - 1;
    const previousField = BRIEF_FIELDS[previousStepIndex];

    setError("");
    persistSession(nextAnswers, previousStepIndex);
    setAnswers(nextAnswers);
    setDirection(-1);
    setStepIndex(previousStepIndex);
    setDraftValue(previousField ? nextAnswers[previousField.id] ?? "" : "");
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && e.metaKey) {
      e.preventDefault();
      void handleNext();
      return;
    }

    if (e.key === "Enter" && !e.shiftKey && field?.type !== "long") {
      e.preventDefault();
      void handleNext();
    }
  }

  if (submitted) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-6 animate-fade-in">
        <p className="text-primary text-sm font-medium mb-3">✔ Enviado</p>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          ¡Gracias! Recibimos tu información.
        </h1>
        <p className="text-muted max-w-md">
          Con esto prepararemos una propuesta clara y a la medida de tu
          proyecto. Te escribiremos pronto a tu correo.
        </p>
      </div>
    );
  }

  if (!field) return null;

  const variants = {
    enter: (dir: 1 | -1) => ({ opacity: 0, x: dir === 1 ? 24 : -24 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: 1 | -1) => ({ opacity: 0, x: dir === 1 ? -24 : 24 }),
  };

  return (
    <div className="flex min-h-[70vh] flex-col justify-center px-6 max-w-2xl mx-auto w-full">
      <div className="w-full h-1 rounded-full bg-surface border border-default overflow-hidden mb-10">
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={field.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <p className="text-primary text-sm font-medium mb-2">
            {field.section} · {stepIndex + 1} / {totalSteps}
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 leading-snug">
            {field.label}
          </h2>
          {field.hint && (
            <p className="text-muted text-sm mb-6">{field.hint}</p>
          )}

          {field.type === "long" ? (
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              value={draftValue}
              onChange={(e) => handleChange(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={4}
              className="w-full p-4 border border-default rounded-lg bg-transparent text-text focus:outline-none focus:border-primary transition"
              placeholder="Escribe tu respuesta..."
            />
          ) : (
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type={field.type === "email" ? "email" : "text"}
              value={draftValue}
              onChange={(e) => handleChange(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full p-4 border border-default rounded-lg bg-transparent text-text focus:outline-none focus:border-primary transition"
              placeholder="Escribe tu respuesta..."
            />
          )}

          {!field.required && (
            <p className="text-muted text-xs mt-2">Opcional</p>
          )}

          {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

          <div className="flex items-center gap-3 mt-8">
            {stepIndex > 0 && (
              <button
                type="button"
                onClick={handleBack}
                className="btn btn-ghost"
                disabled={submitting}
              >
                Atrás
              </button>
            )}
            <button
              type="button"
              onClick={handleNext}
              disabled={submitting}
              className="btn btn-primary"
            >
              {submitting
                ? isLastStep
                  ? "Enviando..."
                  : "Guardando..."
                : isLastStep
                  ? "Enviar"
                  : "Siguiente"}
            </button>
            <span className="text-muted text-xs ml-2 hidden md:inline">
              Enter ↵
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
