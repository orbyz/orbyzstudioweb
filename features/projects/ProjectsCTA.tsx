"use client";

import Link from "next/link";

export function ProjectsCTA() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* CONTAINER */}
        <div className="relative overflow-hidden rounded-2xl border border-default p-10 md:p-14">
          {/* GLOW SUTIL */}
          <div className="absolute inset-0 opacity-10 blur-2xl bg-primary/20 pointer-events-none" />

          {/* CONTENT */}
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold text-text mb-6">
              Tu negocio también puede tener esto
            </h2>

            <p className="text-muted max-w-2xl mx-auto mb-8">
              Diseñamos webs y sistemas digitales que generan clientes reales.
              Sin humo, sin plantillas, sin perder tiempo.
            </p>

            <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">
              Solicitar propuesta
            </Link>

            <p className="mt-4 text-sm text-muted">
              Respuesta en menos de 24h · Sin compromiso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
