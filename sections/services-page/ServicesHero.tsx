export function ServicesHero() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          {/* EYEBROW */}
          <p className="text-sm text-primary mb-3">Servicios</p>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-semibold text-text mb-6">
            Servicios diseñados para generar resultados reales
          </h1>

          {/* DESCRIPTION */}
          <p className="text-muted leading-relaxed mb-8">
            Creamos sistemas digitales que convierten visitas en clientes,
            combinando estrategia, diseño y tecnología.
          </p>

          {/* CTA */}
          <a href="/contact" className="btn btn-primary">
            Solicitar propuesta
          </a>
        </div>
      </div>
    </section>
  );
}
