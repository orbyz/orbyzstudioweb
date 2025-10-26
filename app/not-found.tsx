"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Star {
  top: string;
  left: string;
  delay: string;
  duration: string;
}

export default function NotFound(): JSX.Element {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Solo en cliente: generamos las estrellas
    const generated: Star[] = [...Array(60)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${2 + Math.random() * 3}s`,
    }));
    setStars(generated);

    // Efecto glitch
    const h = document.getElementById("glitch") as HTMLElement;
    if (!h) return;
    const txt: string = h.innerText;
    let counter = 0;
    const id = setInterval(() => {
      counter++;
      if (counter > 12) {
        h.innerText = txt;
        clearInterval(id);
        return;
      }
      h.innerText = txt
        .split("")
        .map((c) =>
          Math.random() > 0.85
            ? String.fromCharCode(65 + Math.floor(Math.random() * 26))
            : c,
        )
        .join("");
    }, 80);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="min-h-screen bg-custom-black text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1
          id="glitch"
          className="text-7xl md:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-custom-green to-pink-700"
        >
          404
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          Parece que este asteroide se salió del mapa.
        </p>
        <p className="mt-2 text-gray-500">
          La galaxia de OrbyZ Studio no encontró la página que buscas.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-custom-green to-[#96b004] hover:from-[#96b004] hover:to-custom-green transition-all duration-300 shadow-[0_0_20px_#96b004]"
        >
          Volver al puerto espacial
        </Link>

        {/* Estrellas renderizadas solo en cliente */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {stars.map((s, i) => (
            <span
              key={i}
              className="absolute block w-px h-px bg-white rounded-full animate-pulse"
              style={{
                top: s.top,
                left: s.left,
                animationDelay: s.delay,
                animationDuration: s.duration,
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
