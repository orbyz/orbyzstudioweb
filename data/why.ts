export type WhyItem = {
  id: "business" | "tech" | "conversion" | "custom";
  title: string;
  description: string;
};

export const whyItems: WhyItem[] = [
  {
    id: "business",
    title: "Pensamos como negocio",
    description:
      "Cada decisión está orientada a generar clientes y resultados, no solo diseño.",
  },
  {
    id: "tech",
    title: "Tecnología moderna y rápida",
    description:
      "Construimos con estándares actuales para asegurar rendimiento, SEO y escalabilidad.",
  },
  {
    id: "conversion",
    title: "Enfoque en conversión",
    description:
      "Diseñamos experiencias pensadas para convertir tráfico en oportunidades reales.",
  },
  {
    id: "custom",
    title: "Soluciones a medida",
    description:
      "Nada de plantillas genéricas. Cada proyecto se construye desde cero según el objetivo.",
  },
];
