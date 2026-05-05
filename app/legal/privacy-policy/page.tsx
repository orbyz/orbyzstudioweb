import Link from "next/link";
import type { Metadata } from "next";
import { LegalLayout } from "@/features/legal/LegalLayout";
import { LegalSection } from "@/features/legal/LegalSection";

export const metadata: Metadata = {
  title: "Política de Privacidad – OrByZ Studio",
  description: "Cómo tratamos tus datos personales.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Política de Privacidad">
      <LegalSection title="1. Responsable del tratamiento">
        <ul className="list-disc pl-5 space-y-2">
          <li>Titular: OrByZ Studio</li>
          <li>Domicilio: Valencia, España</li>
          <li>
            Correo electrónico:{" "}
            <a
              href="mailto:privacy@orbyzstudio.dev"
              className="text-primary underline"
            >
              privacy@orbyzstudio.dev
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Finalidades y legitimación">
        <ul className="list-disc pl-5 space-y-2">
          <li>Prestación del servicio solicitado (ejecución contractual).</li>
          <li>Comunicaciones comerciales (consentimiento).</li>
          <li>Cumplimiento de obligaciones legales.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Conservación">
        <p>
          Los datos se conservarán mientras exista relación contractual y
          durante los plazos legales aplicables.
        </p>
      </LegalSection>

      <LegalSection title="4. Cesiones y transferencias">
        <p>
          No se cederán datos a terceros salvo obligación legal o consentimiento
          expreso. No se realizan transferencias internacionales.
        </p>
      </LegalSection>

      <LegalSection title="5. Derechos">
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión,
          oposición y portabilidad enviando un correo a{" "}
          <strong>privacy@orbyzstudio.dev</strong>.
        </p>
      </LegalSection>

      <LegalSection title="6. Procedencia">
        <p>
          Los datos personales proceden del propio interesado mediante
          formularios de contacto u otros medios.
        </p>
      </LegalSection>

      <LegalSection title="7. Seguridad">
        <p>
          OrByZ Studio aplica las medidas de seguridad necesarias conforme al
          RGPD.
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
