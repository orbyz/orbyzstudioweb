import { ReactNode } from "react";

export type ServiceId = "web" | "automation" | "branding";

export type Service = {
  id: string;
  title: string;
  description: string;
  outcome: string;
  icon?: ReactNode;
  href?: string;
  ctaLabel?: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "web",
    title: "Webs que convierten visitas en clientes",
    description:
      "Diseñamos y desarrollamos plataformas rápidas, escalables y optimizadas para generar leads.",
    outcome: "+ leads · + velocidad · + SEO",
    href: "/services/web",
    ctaLabel: "Ver más",
  },
  {
    id: "automation",
    title: "Captación de clientes en automático",
    description:
      "Creamos sistemas que generan oportunidades de negocio de forma constante sin depender del boca a boca.",
    outcome: "flujo constante de leads",
    href: "/services/automation",
    ctaLabel: "Ver más",
  },
  {
    id: "branding",
    title: "Diseño que transmite autoridad",
    description:
      "Construimos una identidad digital sólida que aumenta la confianza y mejora la conversión.",
    outcome: "más confianza · mejor percepción",
    href: "/services/branding",
    ctaLabel: "Ver más",
  },
];
