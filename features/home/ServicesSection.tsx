import { services } from "@/data/services";
import { ServicesGrid } from "@/components/ui/ServicesGrid";

export function ServicesSection() {
  return (
    <section className="relative py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* INTRO */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-text mb-4">
            Soluciones diseñadas para hacer crecer tu negocio
          </h2>
          <p className="text-muted leading-relaxed">
            No creamos webs por crear. Construimos sistemas digitales orientados
            a generar clientes y resultados reales.
          </p>
        </div>

        {/* GRID */}
        <ServicesGrid services={services} />

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center md:items-start gap-4">
          <p className="text-muted">¿No sabes por dónde empezar?</p>
          <a href="/contact" className="btn btn-primary">
            Analizar mi proyecto
          </a>
        </div>
      </div>
    </section>
  );
}
