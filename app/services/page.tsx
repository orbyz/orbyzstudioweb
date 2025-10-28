import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "@components/Icons";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Desarrollo web, identidad de marca y marketing digital bajo el mismo techo.",
};

const services = [
  {
    slug: "web-development",
    title: "Desarrollo Web Full-Stack",
    short: "Next.js, TypeScript, diseño UI/UX y despliegue continuo.",
    img: "/img/services-web.svg", // opcional
  },
  {
    slug: "branding",
    title: "Identidad de Marca",
    short: "Naming, logo, paleta, tipografía y manual de marca.",
    img: "/img/services-branding.svg",
  },
  {
    slug: "digital-marketing",
    title: "Marketing Digital",
    short: "SEO, campañas SEM, redes y funnels de conversión.",
    img: "/img/services-marketing.svg",
  },
];

export default function ServicesIndex() {
  return (
    <main className="bg-custom-black text-custom-white mt-20">
      <section className="px-6 py-20 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Servicios que impulsan tu&nbsp;
            <span className="text-custom-green">negocio digital</span>
          </h1>
          <p className="mt-6 text-lg text-custom-white">
            Desde código hasta campañas: te acompañamos en cada etapa.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-2xl border border-custom-green bg-custom-black p-6 shadow-sm hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-custom-green">
                {s.title}
              </h2>
              <p className="mt-2 text-custom-white">{s.short}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#cef009] group-hover:text-[#e3ff4f]">
                Saber más <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
