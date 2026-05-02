export const COOKIE_KEY = "orbyz_cookie_consent";

export function getCookieConsent(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(COOKIE_KEY);
}

export function setCookieConsent(value: "accepted" | "rejected") {
  localStorage.setItem(COOKIE_KEY, value);
}
