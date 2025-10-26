// pages/terms-conditions.tsx
import type { NextPage } from "next";
import Link from "next/link";

const TermsConditions: NextPage = () => {
  return (
    <main className="min-h-screen bg-custom-white dark:bg-custom-black text-custom-black">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-8 text-3xl font-bold text-custom-black dark:text-custom-green">
          Términos y Condiciones
        </h1>
        <p className="mb-4 text-sm text-custom-black dark:text-custom-white">
          Última actualización: 26 de octubre de 2025
        </p>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            1. Objeto y aceptación
          </h2>
          <p className="text-custom-black dark:text-custom-white">
            El presente documento regula el acceso y uso del sitio web
            https://www.orbyzstudio.dev (en adelante, “el sitio”) que Jonathan
            Olbes (Orbyz Studio) pone a disposición de los usuarios. La
            navegación implica la aceptación sin reservas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            2. Propiedad intelectual
          </h2>
          <p className="text-custom-black dark:text-custom-white">
            Todos los contenidos (textos, imágenes, código, diseños, marcas,
            etc.) son propiedad de Orbyz Studio o de sus respectivos titulares y
            están protegidos por la normativa de propiedad intelectual. Queda
            prohibida su reproducción, distribución o transformación sin
            autorización expresa.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            3. Uso permitido
          </h2>
          <p className="text-custom-black dark:text-custom-white">
            El usuario se compromete a utilizar el sitio de forma lícita,
            diligente y sin dañar la imagen o intereses de Orbyz Studio o de
            terceros.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            4. Responsabilidad
          </h2>
          <p className="text-custom-black dark:text-custom-white">
            Orbyz Studio no se hace responsable de:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-custom-black dark:text-custom-white">
            <li>
              Daños derivados de la interrupción, suspensión o mal
              funcionamiento del sitio.
            </li>
            <li>Errores u omisiones en los contenidos.</li>
            <li>
              Enlaces a sitios de terceros (solo se facilitan por conveniencia).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            5. Modificaciones
          </h2>
          <p className="text-custom-black dark:text-custom-white">
            Orbyz Studio se reserva el derecho a efectuar sin previo aviso las
            modificaciones que considere oportunas en el sitio, sus contenidos o
            presentación.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            6. Legislación y jurisdicción
          </h2>
          <p className="text-custom-black dark:text-custom-white">
            Estos términos se rigen por la legislación española. Para la
            resolución de cualquier controversia serán competentes los juzgados
            y tribunales de Valencia (España).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            7. Contacto
          </h2>
          <p className="text-custom-black dark:text-custom-white">
            Para cualquier consulta puede dirigirse a{" "}
            <a
              href="mailto:privacy@orbyzstudio.dev"
              className="text-custom-black dark:text-custom-green underline"
            >
              privacy@orbyzstudio.dev
            </a>
          </p>
        </section>

        <div className="mt-12 text-sm text-slate-500">
          <Link
            href="/"
            className="text-custom-black dark:text-custom-green underline"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
};

export default TermsConditions;
