import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "@components/Icons";

export const metadata: Metadata = {
  title: "Marketing Digital – ORBYZ Studio",
  description:
    "SEO técnico, campañas SEM, redes sociales y funnels que convierten.",
};

export default function MarketingPage() {
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
          / Marketing Digital
        </nav>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Atrae, convierte y&nbsp;
            <span className="text-custom-green">fideliza</span>
          </h1>
          <p className="mt-6 text-lg text-custom-white">
            SEO técnico, campañas de pago, redes sociales y automatizaciones.
            Todo medible.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded bg-custom-green px-5 py-3 font-semibold text-black hover:bg-custom-greenhover"
          >
            Solicitar auditoría gratis
          </Link>
        </div>
      </section>

      {/* Servicios incluidos */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-custom-green">
            Estrategia 360º
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "SEO Técnico",
                d: "Velocidad, Core Web Vitals, arquitectura y contenidos.",
              },
              {
                t: "Campañas SEM",
                d: "Google Ads & Social Ads con ROCI positivo desde mes 1.",
              },
              {
                t: "Redes Sociales",
                d: "Calendario editorial, diseño y community management.",
              },
              {
                t: "Funnels & CRO",
                d: "Optimización de conversiones y email marketing.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-2xl border border-custom-green bg-custom-black p-5 shadow-sm"
              >
                <h3 className="font-semibold text-custom-green">{c.t}</h3>
                <p className="mt-1 text-sm text-custom-white">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="px-6 py-20 bg-custom-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-custom-black">
            Resultados recientes
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-custom-black p-6 shadow-sm">
              <p className="text-4xl font-extrabold text-custom-green">+250%</p>
              <p className="mt-1 text-custom-white">
                tráfico orgánico (6 meses)
              </p>
            </div>
            <div className="rounded-2xl bg-custom-black p-6 shadow-sm">
              <p className="text-4xl font-extrabold text-custom-green">-45%</p>
              <p className="mt-1 text-custom-white">costo por lead (SEM)</p>
            </div>
            <div className="rounded-2xl bg-custom-black p-6 shadow-sm">
              <p className="text-4xl font-extrabold text-custom-green">8.3</p>
              <p className="mt-1 text-custom-white">ROCI medio en campañas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-custom-green">
            Aumenta tus ventas desde este mes
          </h2>
          <p className="mt-2 text-custom-white">
            Reserva tu auditoría gratuita y te enviamos un plan de acción en 48
            h.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded bg-custom-green px-5 py-3 font-semibold text-black hover:bg-custom-greenhover"
          >
            Reservar auditoría
          </Link>
        </div>
      </section>
    </main>
  );
}
