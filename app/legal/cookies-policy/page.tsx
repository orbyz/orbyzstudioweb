// pages/cookie-policy.tsx
import type { NextPage } from "next";
import Link from "next/link";

const CookiePolicy: NextPage = () => {
  return (
    <main className="min-h-screen bg-custom-white dark:bg-custom-black text-custom-black">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-8 text-3xl font-bold text-custom-black dark:text-custom-green">
          Política de Cookies
        </h1>
        <p className="mb-4 text-sm text-custom-black dark:text-custom-white">
          Última actualización: 26 de octubre de 2025
        </p>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            1. ¿Qué es una cookie?
          </h2>
          <p className="text-custom-black dark:text-custom-white">
            Una cookie es un fichero que se descarga en su
            ordenador/smartphone/tablet al acceder a determinadas páginas web
            para almacenar y recuperar información sobre la navegación realizada
            desde ese equipo.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            2. Tipos de cookies utilizadas
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-custom-black dark:text-custom-white">
            <li>
              <strong>Técnicas (necesarias):</strong> permiten la navegación y
              la utilización de los servicios de la web.
            </li>
            <li>
              <strong>Análisis o medición:</strong> permiten cuantificar el
              número de usuarios y realizar mediciones estadísticas (ej. Google
              Analytics).{" "}
              <span className="text-amber-600 dark:text-custom-green">
                *Desactivables*
              </span>
            </li>
            <li>
              <strong>Publicitarias:</strong> gestionan los espacios
              publicitarios más eficientemente.{" "}
              <span className="text-amber-600 dark:text-custom-green">
                *Desactivables*
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            3. Lista de cookies
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-custom-green text-sm">
              <thead className="bg-custom-white">
                <tr>
                  <th className="px-4 py-2 text-left">Nombre</th>
                  <th className="px-4 py-2 text-left">Titular</th>
                  <th className="px-4 py-2 text-left">Finalidad</th>
                  <th className="px-4 py-2 text-left">Duración</th>
                  <th className="px-4 py-2 text-left">Tipo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-custom-green dark:text-custom-white">
                <tr>
                  <td className="px-4 py-2">orbyz_cookie_consent</td>
                  <td className="px-4 py-2">Orbyz Studio</td>
                  <td className="px-4 py-2">Guardar preferencias de cookies</td>
                  <td className="px-4 py-2">1 año</td>
                  <td className="px-4 py-2">Técnica</td>
                </tr>
                {/* TODO: añadir filas cuando integres GA, GTM, etc. */}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            4. Transfers internacionales
          </h2>
          <p className="text-custom-black dark:text-custom-white">
            Google Analytics puede transferir datos fuera de la UE amparado en
            las Standard Contractual Clauses aprobadas por la Comisión Europea.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            5. Conservación
          </h2>
          <p className="text-custom-black dark:text-custom-white">
            Las cookies se conservarán durante el tiempo indicado en la tabla
            salvo que las borre antes desde su navegador.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            6. Gestión / desactivación
          </h2>
          <p className="text-custom-black dark:text-custom-white">
            Puede retirar o gestionar su consentimiento en cualquier momento
            desde el panel de preferencias (botón “Configurar cookies” en el
            pie) o bien configurar su navegador:
          </p>
          <ul className="mt-2 list-disc pl-6 text-sm">
            <li>
              <a
                className="text-custom-black dark:text-custom-green underline"
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noreferrer"
              >
                Chrome
              </a>
            </li>
            <li>
              <a
                className="text-custom-black dark:text-custom-green underline"
                href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer"
                target="_blank"
                rel="noreferrer"
              >
                Firefox
              </a>
            </li>
            <li>
              <a
                className="text-custom-black dark:text-custom-green underline"
                href="https://support.apple.com/guide/safari/manage-cookies-sfri11471"
                target="_blank"
                rel="noreferrer"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                className="text-custom-black dark:text-custom-green underline"
                href="https://support.microsoft.com/help/17442/windows-internet-explorer-delete-manage-cookies"
                target="_blank"
                rel="noreferrer"
              >
                Edge / IE
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            7. Responsable
          </h2>
          <p className="text-custom-black dark:text-custom-white">
            Jonathan Olbes (Orbyz Studio) – Valencia, España –{" "}
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

export default CookiePolicy;
