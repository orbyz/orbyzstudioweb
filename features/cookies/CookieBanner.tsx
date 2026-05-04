"use client";

import { useEffect, useState } from "react";
import { getCookieConsent, setCookieConsent } from "@/lib/cookies";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookieConsent("accepted");
    setVisible(false);
  };

  const handleReject = () => {
    setCookieConsent("rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 px-6">
      <div className="mx-auto max-w-6xl">
        <div
          className="rounded-xl
          border border-default
          bg-bg
          backdrop-blur-md
          p-5
          shadow-lg shadow-[var(--cookie-glow)]"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* TEXT */}
            <p className="text-sm text-muted max-w-xl">
              Utilizamos cookies para mejorar tu experiencia y analizar el uso
              del sitio. Puedes aceptar, rechazar o configurar tus preferencias.
            </p>

            {/* ACTIONS */}
            <div className="flex gap-3">
              <button onClick={handleReject} className="btn btn-secondary">
                Rechazar
              </button>

              <button onClick={handleAccept} className="btn btn-primary">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
