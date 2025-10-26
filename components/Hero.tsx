"use client";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";

export default function Hero() {
  const [hover, setHover] = useState(false);
  return (
    <section className="relative isolate flex min-h-[70vh] items-center justify-center bg-white dark:bg-gray-950">
      {/* Fondo animado (solo si el usuario NO prefiere reducir movimiento) */}
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 -z-10",
          "bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(206,240,9,0.2),rgba(255,255,255,0))]",
          "motion-safe:animate-pulse",
        )}
      />

      <div className="mx-auto max-w-[1280px] px-7 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-7xl">
          Impulsamos tu marca{" "}
          <span
            className={clsx(
              "relative after:absolute after:left-0 after:-bottom-2.5 after:h-2 after:w-full",
              "after:origin-left after:scale-x-0 after:bg-custom-green",
              "after:transition-transform after:duration-500",
              hover && "after:scale-x-100",
            )}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            hacia el futuro digital
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          Conecta, protege y escala tu presencia online.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-custom-green px-6 py-3 font-semibold text-black shadow-md hover:bg-custom-white hover:shadow-lg transition"
          >
            Empezar ahora
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          <Link
            href="/projects"
            className="rounded-lg border border-gray-300 dark:border-gray-700 px-6 py-3 font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Ver proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}
