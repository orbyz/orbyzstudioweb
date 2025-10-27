import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Check } from "@components/Icons";

export const metadata: Metadata = {
  title: "Servicios – Orbyz Studio",
  description:
    "Desarrollo web a medida, diseño UI/UX y aplicaciones escalables.",
};

export default function ServicesPage() {
  return (
    <main className="bg-custom-black text-custom-white my-20">
      {/* 1. Hero */}
      <section className="px-6 py-20 sm:py-32">
        <nav className="text-sm text-custom-white">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/services" className="hover:underline">
            Servicios
          </Link>{" "}
          / Desarrollo Web
        </nav>
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Impulsamos tu idea con&nbsp;
            <span className="text-custom-green">tecnología de vanguardia</span>
          </h1>
          <p className="mt-6 text-lg text-custom-white">
            Desde MVP hasta productos enterprise: desarrollo web, diseño UI/UX y
            consultoría técnica que escala contigo.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded bg-[#cef009] px-5 py-3 font-semibold text-black hover:bg-[#e3ff4f]"
            >
              Empezar proyecto <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded border border-custom-green px-5 py-3 font-medium hover:bg-custom-greenhover hover:text-custom-black"
            >
              Ver portfolios
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Servicios */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Lo que hacemos</h2>
          <p className="mt-2 text-custom-white">
            Especialistas en Next.js, TypeScript, React y diseño centrado en el
            usuario.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Desarrollo Web Full-Stack",
                desc: "Aplicaciones escalables con Next.js, Node, DB y despliegue CI/CD.",
              },
              {
                title: "Diseño UI / UX",
                desc: "Interfaces modernas, accesibles y que convierten.",
              },
              {
                title: "MVP & Productos",
                desc: "Lanza en semanas, no en meses. Validación rápida y código limpio.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-custom-green bg-custom-black p-6 shadow-sm hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-custom-green">
                  {s.title}
                </h3>
                <p className="mt-2 text-custom-white">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Proceso */}
      <section className="px-6 py-20 bg-custom-black">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold">Proceso ágil en 3 pasos</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                step: 1,
                title: "Descubrimiento",
                desc: "Entendemos tu problema y usuarios.",
              },
              {
                step: 2,
                title: "Diseño & Desarrollo",
                desc: "Iteramos con feedback real.",
              },
              {
                step: 3,
                title: "Entrega & Escalado",
                desc: "Deploy, monitorización y soporte.",
              },
            ].map((p) => (
              <div key={p.step} className="relative">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#cef009] font-bold text-black">
                  {p.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-custom-white">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Precios */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-custom-green">
            Planes flexibles
          </h2>
          <p className="mt-2 text-custom-white">
            Escalamos contigo. Precios en EUR.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl border ${
                  p.featured
                    ? "border-[#cef009] bg-neutral-900 text-white"
                    : "border-neutral-200 bg-white text-custom-black"
                } p-6 shadow-sm`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#cef009] px-3 py-1 text-xs font-semibold text-black">
                    Más popular
                  </span>
                )}
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-3xl font-extrabold">
                  {p.price}
                  <span className="text-base font-normal text-neutral-500">
                    /proyecto
                  </span>
                </p>
                <ul className="mt-6 space-y-2 text-left">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#cef009]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded px-4 py-2 font-semibold ${
                    p.featured
                      ? "bg-[#cef009] text-black hover:bg-[#e3ff4f]"
                      : "bg-neutral-900 text-white hover:bg-neutral-800"
                  }`}
                >
                  Contratar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="px-6 py-20 bg-custom-black">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center">
            Preguntas frecuentes
          </h2>
          <dl className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-lg border border-custom-green bg-custom-black px-4 py-3 open:bg-custom-black open:text-custom-green transition"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  {faq.q}
                  <ChevronRight className="h-5 w-5 shrink-0 transition group-open:rotate-90" />
                </summary>
                <p className="mt-2 text-custom-white">{faq.a}</p>
              </details>
            ))}
          </dl>
        </div>
      </section>

      {/* 6. CTA final */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold">¿Listos para construir?</h2>
          <p className="mt-2 text-custom-white">
            Cuéntanos tu idea y te devolvemos un plan sin compromiso.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded bg-[#cef009] px-5 py-3 font-semibold text-black hover:bg-[#e3ff4f]"
          >
            Solicitar consulta gratuita
          </Link>
        </div>
      </section>
    </main>
  );
}

/* Datos */
const plans = [
  {
    name: "Starter",
    price: "€2 500",
    featured: false,
    features: [
      "Landing o MVP básico",
      "Diseño UI/UX",
      "Next.js + TS",
      "Deploy Vercel",
      "1 mes de soporte",
    ],
  },
  {
    name: "Pro",
    price: "€5 000",
    featured: true,
    features: [
      "Producto completo",
      "Panel de admin",
      "Base de datos",
      "Pasarela de pago",
      "3 meses de soporte",
    ],
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    featured: false,
    features: [
      "Arquitectura a medida",
      "Microservicios",
      "CI/CD avanzado",
      "SLA 24/7",
      "Consultoría continua",
    ],
  },
];

const faqs = [
  {
    q: "¿Cuánto tarda un proyecto promedio?",
    a: "Entre 3 y 6 semanas dependiendo del alcance. Te entregamos un cronograma fijo antes de empezar.",
  },
  {
    q: "¿Puedo pagar a plazos?",
    a: "Sí, dividimos el pago en 3 hitos: 30 % al iniciar, 40 % en entrega intermedia y 30 % al finalizar.",
  },
  {
    q: "¿Y después del lanzamiento?",
    a: "Incluimos un periodo de soporte post-lanzamiento. Luego puedes contratar mantenimiento mensual o por horas.",
  },
];
