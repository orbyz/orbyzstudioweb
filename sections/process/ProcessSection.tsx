import { ProcessGrid } from "@/components/process/ProcessGrid";

export function ProcessSection() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* INTRO */}
        <div className="max-w-2xl mb-16">
          <p className="text-lg text-primary mb-3">Proceso</p>

          <h2 className="text-3xl md:text-4xl font-semibold text-text mb-4">
            Un proceso claro, pensado para obtener resultados
          </h2>

          <p className="text-muted leading-relaxed">
            Trabajamos de forma estructurada para asegurar que cada proyecto
            tenga impacto real desde el primer momento.
          </p>
        </div>

        {/* GRID */}
        <ProcessGrid />

        {/* CTA */}
        <div className="mt-16">
          <a href="/contact" className="btn btn-primary">
            Iniciar mi proyecto
          </a>
        </div>
      </div>
    </section>
  );
}
