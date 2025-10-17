"use client";
import clsx from "clsx";
import Link from "next/link";

const features = [
  {
    title: "Identidad de marca",
    desc: "Creamos una presencia distintiva que resuena con tu audiencia.",
    href: "/identidad",
    icon: "🎨",
  },
  {
    title: "Soluciones de marketing",
    desc: "Involucre a su audiencia con campañas precisas y mensurables.",
    href: "/marketing",
    icon: "📈",
  },
  {
    title: "Desarrollo web",
    desc: "Sitios web rápidos, atractivos y optimizados en todos los dispositivos.",
    href: "/desarrollo",
    icon: "💻",
  },
  {
    title: "Seguridad web",
    desc: "Protegemos tus activos digitales con conocimientos prácticos.",
    href: "/seguridad",
    icon: "🔒",
  },
];

export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* HEADER */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Eleva tu marca. Asegura su futuro
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
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
              "group relative overflow-hidden rounded-2xl border border-gray-200",
              "bg-white p-6 dark:border-gray-800 dark:bg-gray-900",
              "hover:border-custom-green dark:hover:border-custom-green",
              "transform transition hover:-translate-y-1",
            )}
          >
            <div className="text-3xl">{f.icon}</div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              {f.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {f.desc}
            </p>
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
