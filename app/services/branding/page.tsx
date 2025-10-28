import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "@components/Icons";

export const metadata: Metadata = {
  title: "Identidad de Marca – ORBYZ Studio",
  description:
    "Creamos tu marca desde cero: naming, logo, paleta, tipografía y manual de marca.",
};

export default function BrandingPage() {
  return (
    <main className="bg-custom-black text-custom-white my-20">
      {/* Hero */}
      <section className="px-6 py-20 sm:py-32">
        <nav className="text-sm text-custom-white">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/services" className="hover:underline">
            Servicios
          </Link>{" "}
          / Identidad de Marca
        </nav>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Tu marca, <span className="text-custom-green">inolvidable</span>
          </h1>
          <p className="mt-6 text-lg text-custom-white">
            Naming, logo, paleta cromática, tipografía y manual de marca. Todo
            alineado con tu audiencia.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded bg-custom-green px-5 py-3 font-semibold text-black hover:bg-custom-greenhover"
          >
            Empezar mi branding
          </Link>
        </div>
      </section>

      {/* Beneficios */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">¿Qué incluye?</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Investigación de mercado y competencia",
                "Naming y eslogan",
                "Diseño de logo en versiones horizontal, ícono y favicon",
                "Paleta de colores + tipografía",
                "Manual de marca básico (PDF)",
                "Archivos fuente SVG / PNG / PDF",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-custom-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-custom-green bg-custom-black p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Entrega en 3 semanas</h3>
            <ol className="mt-4 list-decimal space-y-2 pl-5 custom-white">
              <li> Brief y workshop inicial </li>
              <li> Propuestas de naming y bocetos </li>
              <li> Refinación y entrega final </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-neutral-50">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-custom-black">
            Lista para brillar
          </h2>
          <p className="mt-2 text-custom-black">
            Construyamos una marca que conecte y perdure.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded bg-custom-green px-5 py-3 font-semibold text-black hover:bg-custom-greenhover"
          >
            Solicitar consulta
          </Link>
        </div>
      </section>
    </main>
  );
}
