import { useEffect, useState } from "react";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export function useCookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem("orbyz_cookie_consent");
    setConsent(raw ? JSON.parse(raw) : null);
  }, []);

  return consent;
}
