import Link from "next/link";

export function BlogCTA() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="relative overflow-hidden rounded-2xl border border-default p-10 md:p-14">
          <div className="absolute inset-0 opacity-10 blur-2xl bg-primary/20 pointer-events-none" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold text-text mb-6">
              ¿Quieres algo así para tu negocio?
            </h2>

            <p className="text-muted max-w-2xl mx-auto mb-8">
              Aplicamos estas mismas estrategias de desarrollo y marketing
              digital a los proyectos de nuestros clientes.
            </p>

            <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">
              Solicitar propuesta
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
