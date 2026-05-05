import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Página no encontrada | OrByZ Studio",
  description: "La página que buscas no existe o ha sido movida.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="mx-auto max-w-4xl text-center">
        {/* 404 */}
        <h1 className="relative text-6xl md:text-8xl font-semibold text-text mb-6">
          404
          <span
            className="
            absolute inset-0
            flex items-center justify-center
            blur-3xl opacity-40
            text-primary
            pointer-events-none
          "
          >
            404
          </span>
        </h1>

        {/* Mensaje */}
        <p className="text-lg md:text-xl text-muted mb-4">
          Esta página no existe o ha sido movida.
        </p>

        <p className="text-sm text-muted mb-8">
          Si crees que es un error, puedes volver al inicio o explorar nuestros
          servicios.
        </p>

        {/* CTA */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn btn-primary">
            Volver al inicio
          </Link>

          <Link href="/services" className="btn btn-secondary">
            Ver servicios
          </Link>
        </div>
      </div>
    </main>
  );
}
