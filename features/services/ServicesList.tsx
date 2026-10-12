import { ServiceBlock } from "@/features/services/ServiceBlock";

export function ServicesList() {
  return (
    <>
      <ServiceBlock
        id="web-conversion"
        title="Webs que convierten visitas en clientes"
        description="Diseñamos y desarrollamos plataformas optimizadas para generar leads."
        features={[
          "Diseño enfocado en conversión",
          "Desarrollo rápido y escalable",
          "SEO técnico base",
          "Optimización de rendimiento",
        ]}
        outcome="Más leads, mejor posicionamiento y mayor rendimiento"
      />

      <ServiceBlock
        id="captacion-clientes"
        title="Captación de clientes en automático"
        description="Creamos sistemas que generan oportunidades de negocio constantes."
        features={[
          "Landing pages optimizadas",
          "Automatización básica",
          "Integración con CRM",
        ]}
        outcome="Flujo constante de clientes potenciales"
        reverse
      />

      <ServiceBlock
        id="diseño-autoridad"
        title="Diseño que transmite autoridad"
        description="Construimos una identidad digital sólida y profesional."
        features={[
          "Identidad visual coherente",
          "UI moderna y limpia",
          "Experiencia de usuario optimizada",
        ]}
        outcome="Mayor confianza y mejor percepción de marca"
      />
    </>
  );
}
