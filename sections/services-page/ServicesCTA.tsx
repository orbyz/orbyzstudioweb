export function ServicesCTA() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="
          rounded-2xl
          border border-default
          p-10 md:p-14
          bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]
        "
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-text mb-4">
              Cuéntanos tu proyecto
            </h2>

            <p className="text-muted mb-8">
              Analizaremos tu caso y te diremos exactamente cómo ayudarte.
            </p>

            <a href="/contact" className="btn btn-primary">
              Solicitar propuesta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
