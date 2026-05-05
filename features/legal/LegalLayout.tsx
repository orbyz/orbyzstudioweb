export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold text-text mb-6">
            {title}
          </h1>

          <div className="text-sm text-muted mb-10">
            Última actualización: {new Date().toLocaleDateString()}
          </div>

          <div className="space-y-10 text-sm leading-relaxed text-muted">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
