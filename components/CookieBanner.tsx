// components/CookieBanner.tsx
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const COOKIE_KEY = "orbyz_cookie_consent";

const IconX = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const IconSettings = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState(false);
  const [consent, setConsent] = useState<Consent>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // SSR-safe
    const saved = localStorage.getItem(COOKIE_KEY);
    if (!saved) setShow(true);
    else setConsent(JSON.parse(saved));
  }, []);

  const acceptAll = () => {
    const all: Consent = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem(COOKIE_KEY, JSON.stringify(all));
    setShow(false);
    // TODO: lanzar gtag / gtm cuando integres analytics
  };

  const acceptSelection = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(consent));
    setShow(false);
    // TODO: lanzar solo las etiquetas que correspondan
  };

  const rejectAll = () => {
    const minimal: Consent = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem(COOKIE_KEY, JSON.stringify(minimal));
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside className="fixed inset-x-0 bottom-0 z-50 bg-white dark:bg-custom-black shadow-2xl ring-1 ring-custom-green">
      <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
        <div className="flex items-start justify-between">
          <div className="text-sm text-custom-white">
            <p className="font-semibold text-custom-black dark:text-custom-green">
              Este sitio usa cookies
            </p>
            <p className="mt-1 text-custom-black dark:text-custom-white">
              Utilizamos cookies técnicas, analíticas y de marketing. Puedes
              gestionar tus preferencias en cualquier momento.
            </p>
          </div>
          <button onClick={() => setShow(false)} aria-label="Cerrar">
            <IconX />
          </button>
        </div>

        {details && (
          <div className="mt-4 space-y-2 rounded border border-custom-green bg-custom-white  dark:bg-custom-black  p-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                disabled
                checked
                className="h-4 w-4 rounded text-violet-600"
              />
              <span className="text-sm text-custom-black dark:text-custom-white">
                Técnicas (necesarias)
              </span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded text-violet-600 focus:ring-violet-500"
                checked={consent.analytics}
                onChange={(e) =>
                  setConsent({ ...consent, analytics: e.target.checked })
                }
              />
              <span className="text-sm text-custom-black dark:text-custom-white">
                Análisis (Google Analytics, etc.)
              </span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded text-violet-600 focus:ring-violet-500"
                checked={consent.marketing}
                onChange={(e) =>
                  setConsent({ ...consent, marketing: e.target.checked })
                }
              />
              <span className="text-sm text-custom-black dark:text-custom-white">
                Publicidad comportamental
              </span>
            </label>
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            onClick={acceptAll}
            className="rounded bg-custom-green px-4 py-2 text-sm font-medium text-custom-black hover:bg-custom-greenhover"
          >
            Aceptar todas
          </button>
          <button
            onClick={rejectAll}
            className="rounded border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-red-200"
          >
            Rechazar todo
          </button>
          <button
            onClick={() => setDetails((d) => !d)}
            className="inline-flex items-center gap-2 text-sm font-medium dark:text-custom-green hover:border-custom-greenhover"
          >
            <IconSettings />
            Configurar cookies
          </button>
          {details && (
            <button
              onClick={acceptSelection}
              className="rounded border border-custom-green dark:bg-custom-black px-4 py-2 text-sm font-medium dark:text-custom-green hover:bg-custom-greenhover hover:text-custom-black"
            >
              Guardar selección
            </button>
          )}
        </div>

        <p className="mt-3 text-xs text-slate-200">
          Puedes leer nuestra{" "}
          <Link
            href="legal/cookies-policy"
            className="underline text-custom-green hover:text-custom-greenhover"
          >
            Política de Cookies
          </Link>{" "}
          y nuestra{" "}
          <Link
            href="legal/privacy-policy"
            className="underline text-custom-green hover:text-custom-greenhover"
          >
            Política de Privacidad
          </Link>
          .
        </p>
      </div>
    </aside>
  );
}
