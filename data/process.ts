export type ProcessStep = {
  id: "discover" | "strategy" | "build" | "launch";
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    step: "01",
    title: "Descubrimiento",
    description:
      "Analizamos tu negocio, objetivos y oportunidades para definir una base sólida.",
  },
  {
    id: "strategy",
    step: "02",
    title: "Estrategia",
    description:
      "Diseñamos la estructura, el flujo de conversión y la experiencia del usuario.",
  },
  {
    id: "build",
    step: "03",
    title: "Diseño & Desarrollo",
    description:
      "Construimos una solución rápida, escalable y alineada con tus objetivos.",
  },
  {
    id: "launch",
    step: "04",
    title: "Lanzamiento & Optimización",
    description:
      "Publicamos, medimos resultados y optimizamos para mejorar el rendimiento.",
  },
];
