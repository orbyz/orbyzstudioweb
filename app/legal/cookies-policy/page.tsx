import Link from "next/link";
import { LegalLayout } from "@/features/legal/LegalLayout";
import { LegalSection } from "@/features/legal/LegalSection";

export default function CookiesPage() {
  return (
    <LegalLayout title="Política de Cookies">
      <LegalSection title="1. ¿Qué es una cookie?">
        <p>
          Una cookie es un fichero que se descarga en su dispositivo al acceder
          a determinadas páginas web para almacenar y recuperar información.
        </p>
      </LegalSection>

      <LegalSection title="2. Tipos de cookies utilizadas">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Técnicas:</strong> necesarias para el funcionamiento.
          </li>
          <li>
            <strong>Análisis:</strong> permiten medir el uso del sitio.
          </li>
          <li>
            <strong>Publicitarias:</strong> gestionan espacios publicitarios.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Lista de cookies">
        <div className="overflow-x-auto border border-default rounded-xl">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-default">
              <tr>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Finalidad</th>
                <th className="px-4 py-2">Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-default">
                <td className="px-4 py-2">orbyz_cookie_consent</td>
                <td className="px-4 py-2">Guardar preferencias de cookies</td>
                <td className="px-4 py-2">1 año</td>
              </tr>
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection title="6. Gestión / desactivación">
        <p>Puede gestionar sus preferencias desde el banner o su navegador.</p>
      </LegalSection>

      <LegalSection title="7. Responsable">
        <p>
          OrByZ Studio – Valencia, España –{" "}
          <a
            href="mailto:privacy@orbyzstudio.dev"
            className="text-primary underline"
          >
            privacy@orbyzstudio.dev
          </a>
        </p>
      </LegalSection>

      <div className="pt-10">
        <Link href="/" className="text-primary underline">
          Volver al inicio
        </Link>
      </div>
    </LegalLayout>
  );
}
