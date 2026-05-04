export function FooterBottom() {
  return (
    <div className="mt-12 pt-6 border-t border-default flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
      <p>© {new Date().getFullYear()} OrByZ Studio</p>

      <div className="flex gap-4">
        <a href="/legal">Aviso legal</a>
        <a href="/privacy">Privacidad</a>
        <a href="/cookies">Cookies</a>
      </div>
    </div>
  );
}
