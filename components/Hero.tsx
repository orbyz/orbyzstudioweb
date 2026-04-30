"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0D1117] text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(206,240,9,0.15),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Construimos experiencias digitales{" "}
            <span className="text-[#CEF009]">que generan resultados</span>
          </h1>

          <p className="mt-6 text-lg text-zinc-400 max-w-xl">
            Diseño, desarrollo y marketing enfocados en crear productos
            digitales que escalan y convierten.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <Link
              href="/contact"
              className="bg-[#CEF009] text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
            >
              Empecemos
            </Link>

            <Link
              href="/projects"
              className="border border-zinc-700 px-6 py-3 rounded-xl hover:border-[#CEF009] transition"
            >
              Ver proyectos
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center items-center">
          {/* Glow */}
          <div className="absolute w-[300px] h-[300px] bg-[#CEF009] opacity-20 blur-3xl rounded-full" />

          {/* LOGO CZ */}
          <div className="text-[120px] md:text-[160px] font-bold text-[#CEF009] tracking-tight">
            CZ
          </div>

          {/* DECOR ELEMENT */}
          <div className="absolute top-10 right-10 w-4 h-4 bg-[#CEF009]" />
        </div>
      </div>
    </section>
  );
}
