"use client";

import Link from "next/link";

export function ProjectsHero() {
  return (
    <section className="relative py-24 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* HEADLINE */}
        <h1 className="text-4xl md:text-5xl font-semibold text-text mb-6 leading-tight">
          Proyectos que{" "}
          <span className="text-primary">generan resultados reales</span>
        </h1>

        {/* SUBTEXT */}
        <p className="text-lg text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
          No diseñamos webs por estética. Construimos sistemas digitales que
          ayudan a negocios a crecer, posicionarse y captar clientes de forma
          constante.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <Link href="/contact" className="btn btn-primary">
            Solicitar propuesta
          </Link>
        </div>
      </div>
    </section>
  );
}
