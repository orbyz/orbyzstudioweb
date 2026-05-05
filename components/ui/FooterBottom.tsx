import Link from "next/link";

export function FooterBottom() {
  return (
    <div className="mt-12 pt-6 border-t border-default flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
      <p>© {new Date().getFullYear()} OrByZ Studio</p>

      <div className="flex gap-4">
        <Link href="/legal/terms-conditions">Terminos</Link>
        <Link href="/legal/privacy-policy">Privacidad</Link>
        <Link href="/legal/cookies-policy">Cookies</Link>
      </div>
    </div>
  );
}
