"use client";

import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white isolate">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute top-0 right-0
            w-[260px] h-[260px]
            md:w-[500px] md:h-[500px]
            blur-lg md:blur-3xl
            opacity-20
          "
          style={{
            background:
              "radial-gradient(circle, var(--color-primary), transparent 60%)",
            willChange: "transform",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Construimos experiencias digitales{" "}
            <span className="text-primary">que generan resultados</span>
          </h1>

          <p className="mt-6 text-lg text-muted max-w-xl">
            Diseño, desarrollo y marketing enfocados en crear productos
            digitales que escalan, convierten y generan impacto real.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-primary">
              Empecemos
            </Link>

            <Link href="/projects" className="btn btn-secondary">
              Ver proyectos
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center">
          {/* GLOW BASE */}
          <div
            className="
              absolute
              w-[180px] h-[180px]
              md:w-[320px] md:h-[320px]
              blur-lg md:blur-3xl
              rounded-full
              opacity-20
            "
            style={{
              backgroundColor: "var(--color-primary)",
              willChange: "transform",
            }}
          />

          {/* LOGO */}
          <div className="relative transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo.png"
              alt="OrByZ Studio"
              width={320}
              height={320}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
