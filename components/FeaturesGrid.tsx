"use client";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import imgBrand from "../assets/branding.png";
import imgMarketing from "../assets/marketing.png";
import imgDevelopment from "../assets/development.png";
import imgSecurity from "../assets/security.png";

const features = [
  {
    title: "Identidad de marca",
    desc: "Creamos una presencia distintiva que resuena con tu audiencia.",
    href: "/services/branding",
    icon: imgBrand,
  },
  {
    title: "Soluciones de marketing",
    desc: "Involucre a su audiencia con campañas precisas y mensurables.",
    href: "/services/digital-marketing",
    icon: imgMarketing,
  },
  {
    title: "Desarrollo web",
    desc: "Sitios web rápidos, atractivos y optimizados en todos los dispositivos.",
    href: "/services/web-development",
    icon: imgDevelopment,
  },
  {
    title: "Seguridad web",
    desc: "Protegemos tus activos digitales con conocimientos prácticos.",
    href: "/contact",
    icon: imgSecurity,
  },
];

export default function FeatureGrid() {
  return (
    <section className="mx-auto bg-custom-black text-custom-white min-w-auto max-w-7xl px-6 pb-20">
      {/* HEADER */}
      <div className="text-center md:text-start">
        <h2 className="text-4xl md:text-5xl font-extrabold text-custom-white">
          Eleva tu marca. Asegura su futuro
        </h2>
        <p className="mt-4 text-lg text-custom-white">
          Potenciamos cada área de tu negocio digital para que crezcas sin
          fricciones.
        </p>
      </div>

      {/* GRID */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <Link
            key={f.title}
            href={f.href}
            className={clsx(
              "group relative overflow-hidden rounded-2xl border border-custom-green",
              "bg-custom-black p-6  text-custom-white",
              "hover:border-custom-green dark:hover:border-custom-green",
              "transform transition hover:-translate-y-1",
            )}
          >
            <Image
              src={f.icon}
              alt={f.title}
              width={350}
              height={48}
              className="mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold text-custom-white">
              {f.title}
            </h3>
            <p className="mt-2 text-sm text-custom-white">{f.desc}</p>
            <span
              className={clsx(
                "mt-4 inline-flex items-center gap-1 text-sm font-medium",
                "text-custom-green group-hover:underline",
              )}
            >
              Ver más →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
