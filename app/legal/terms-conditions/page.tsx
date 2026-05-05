import Link from "next/link";
import { LegalLayout } from "@/features/legal/LegalLayout";
import { LegalSection } from "@/features/legal/LegalSection";

export default function TermsPage() {
  return (
    <LegalLayout title="Términos y Condiciones">
      <LegalSection title="1. Objeto y aceptación">
        <p>
          El presente documento regula el acceso y uso del sitio web
          https://www.orbyzstudio.dev (en adelante, “el sitio”) que OrByZ Studio
          pone a disposición de los usuarios. La navegación implica la
          aceptación sin reservas.
        </p>
      </LegalSection>

      <LegalSection title="2. Propiedad intelectual">
        <p>
          Todos los contenidos (textos, imágenes, código, diseños, marcas, etc.)
          son propiedad de OrByZ Studio o de sus respectivos titulares y están
          protegidos por la normativa de propiedad intelectual.
        </p>
      </LegalSection>

      <LegalSection title="3. Uso permitido">
        <p>
          El usuario se compromete a utilizar el sitio de forma lícita,
          diligente y sin dañar la imagen o intereses de OrByZ Studio o de
          terceros.
        </p>
      </LegalSection>

      <LegalSection title="4. Responsabilidad">
        <ul className="list-disc pl-5 space-y-2">
          <li>Interrupciones o mal funcionamiento del sitio.</li>
          <li>Errores u omisiones en los contenidos.</li>
          <li>Enlaces a sitios de terceros.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Modificaciones">
        <p>
          OrByZ Studio se reserva el derecho a modificar contenidos o estructura
          del sitio sin previo aviso.
        </p>
      </LegalSection>

      <LegalSection title="6. Legislación y jurisdicción">
        <p>
          Estos términos se rigen por la legislación española. Cualquier
          controversia se someterá a los juzgados de Valencia (España).
        </p>
      </LegalSection>

      <LegalSection title="7. Contacto">
        <p>
          Para cualquier consulta puede dirigirse a{" "}
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
