// pages/privacy-policy.tsx
import type { NextPage } from "next";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad – Orbyz Studio",
  description: "Cómo tratamos tus datos personales.",
};

const PrivacyPolicy: NextPage = () => {
  return (
    <main className="min-h-screen bg-custom-white dark:bg-custom-black text-custom-black">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-8 text-3xl font-bold text-custom-black dark:text-custom-green">
          Política de Privacidad
        </h1>
        <p className="mb-4 text-sm text-custom-black dark:text-custom-white">
          Última actualización: 26 de octubre de 2025
        </p>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            1. Responsable del tratamiento
          </h2>
          <ul className="list-disc space-y-1 pl-6 text-custom-black dark:text-custom-white">
            <li>Titular: Jonathan Olbes (en adelante, “Orbyz Studio”)</li>
            <li>Domicilio: Valencia, España</li>
            <li>
              Correo-e:{" "}
              <Link
                href="mailto:privacy@orbyzstudio.dev"
                className="dark:text-custom-green underline"
              >
                privacy@orbyzstudio.dev
              </Link>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            2. Finalidades y legitimación
          </h2>
          <ul className="list-disc space-y-1 pl-6 text-custom-black dark:text-custom-white">
            <li>Prestación del servicio solicitado: ejecución del contrato.</li>
            <li>
              Envío de comunicaciones comerciales: consentimiento (podrás
              retirarlo en cualquier momento).
            </li>
            <li>Cumplimiento de obligaciones legales: interés legítimo.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            3. Conservación
          </h2>
          <p className="text-custom-black dark:text-custom-white">
            Los datos se conservarán mientras se mantenga la relación y, tras su
            finalización, durante los plazos de prescripción legal aplicables.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            4. Cesiones y transferencias
          </h2>
          <p className="text-custom-black dark:text-custom-white">
            No se cederán datos a terceros salvo obligación legal o
            consentimiento expreso. No hay transferencias internacionales.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            5. Derechos
          </h2>
          <p className="text-custom-black dark:text-custom-white">
            Puedes ejercer los derechos de acceso, rectificación, supresión,
            limitación, oposición y portabilidad enviando un correo a{" "}
            <strong>privacy@orbyzstudio.dev</strong> junto con copia de tu DNI o
            documento identificativo equivalente.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            6. Procedencia
          </h2>
          <p className="text-custom-black dark:text-custom-white">
            Los datos personales que tratamos proceden del propio interesado
            (formularios de contacto, registro, etc.).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-custom-black dark:text-custom-green">
            7. Seguridad
          </h2>
          <p className="text-custom-black dark:text-custom-white">
            Orbyz Studio ha adoptado los niveles de seguridad correspondientes
            exigidos por el RGPD y demás normativa aplicable.
          </p>
        </section>

        <div className="mt-12 text-sm text-slate-500">
          <Link href="/" className="dark:text-custom-green underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
