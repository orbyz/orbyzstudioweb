"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BRIEF_FIELDS } from "./briefQuestions";
import { supabaseBrowser } from "@/lib/supabase/client";

const STORAGE_KEY = "orbyz_brief_session";

type Answers = Record<string, string>;

function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (stored) {
    try {
      const parsed = JSON.parse(stored) as { id: string };
      if (parsed.id) return parsed.id;
    } catch {
      // ignorar y regenerar abajo
    }
  }

  const id = crypto.randomUUID();
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ id, answers: {} }));
  return id;
}

function loadCachedAnswers(): Answers {
  if (typeof window === "undefined") return {};
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return {};
    const parsed = JSON.parse(stored) as { answers?: Answers };
    return parsed.answers ?? {};
  } catch {
    return {};
  }
}

function persistLocal(id: string, answers: Answers) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ id, answers }));
}

export function BriefWizard() {
  const [sessionId, setSessionId] = useState<string>("");
  const [answers, setAnswers] = useState<Answers>({});
  const [stepIndex, setStepIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const totalSteps = BRIEF_FIELDS.length;
  const field = BRIEF_FIELDS[stepIndex];
  const isLastStep = stepIndex === totalSteps - 1;

  useEffect(() => {
    const id = getOrCreateSessionId();
    setSessionId(id);
    setAnswers(loadCachedAnswers());
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, [stepIndex]);

  const progress = useMemo(
    () => Math.round(((stepIndex + 1) / totalSteps) * 100),
    [stepIndex, totalSteps],
  );

  const currentValue = answers[field?.id] ?? "";

  async function saveStep(nextAnswers: Answers, nextStep: number) {
    if (!sessionId) return;

    persistLocal(sessionId, nextAnswers);

    // OJO: se usa insert() + fallback a update() en vez de upsert().
    // Postgres exige permiso de SELECT sobre la columna del conflicto para
    // resolver un "ON CONFLICT DO UPDATE" (lo que hace upsert() por dentro),
    // y a propósito no hay policy de SELECT para anon (ver migración SQL).
    // insert()/update() por separado no tienen ese requisito.
    const { error: insertError } = await supabaseBrowser
      .from("client_briefs")
      .insert({
        id: sessionId,
        current_step: nextStep,
        answers: nextAnswers,
        status: "in_progress",
      });

    if (insertError) {
      // 23505 = unique_violation → la fila ya existe (no es el primer paso)
      if (insertError.code === "23505") {
        const { error: updateError } = await supabaseBrowser
          .from("client_briefs")
          .update({ current_step: nextStep, answers: nextAnswers })
          .eq("id", sessionId);

        if (updateError) {
          console.error("Error actualizando brief:", updateError);
        }
      } else {
        console.error("Error guardando brief:", insertError);
      }
      // No bloqueamos el avance del usuario por un error de red;
      // sus respuestas ya quedaron en localStorage.
    }
  }

  function handleChange(value: string) {
    setAnswers((prev) => ({ ...prev, [field.id]: value }));
  }

  async function handleNext() {
    if (field.required && !currentValue.trim()) {
      setError("Esta pregunta es necesaria para continuar.");
      return;
    }
    setError("");

    const nextAnswers = { ...answers };

    if (isLastStep) {
      setSubmitting(true);
      await saveStep(nextAnswers, stepIndex);

      const { error: dbError } = await supabaseBrowser
        .from("client_briefs")
        .update({ status: "completed", current_step: totalSteps })
        .eq("id", sessionId);

      if (dbError) console.error("Error marcando brief completado:", dbError);

      try {
        await fetch("/api/brief/notify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: sessionId }),
        });
      } catch (err) {
        console.error("Error notificando brief:", err);
      }

      window.localStorage.removeItem(STORAGE_KEY);
      setSubmitting(false);
      setSubmitted(true);
      return;
    }

    setDirection(1);
    const next = stepIndex + 1;
    setStepIndex(next);
    void saveStep(nextAnswers, next);
  }

  function handleBack() {
    if (stepIndex === 0) return;
    setError("");
    setDirection(-1);
    setStepIndex((s) => s - 1);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey && field?.type !== "long") {
      e.preventDefault();
      void handleNext();
    }
    if (e.key === "Enter" && e.metaKey) {
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
      {/* Barra de progreso */}
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
              value={currentValue}
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
              value={currentValue}
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
                ? "Enviando..."
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
