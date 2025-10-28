import type { Metadata } from "next";

const url = "https://www.orbyzstudio.dev";

/* Páginas principales */
export const metaHome: Metadata = {
  title: "Inicio",
  description:
    "Creamos productos digitales rápidos, escalables y con diseño diferencial.",
  openGraph: { title: "Inicio – ORBYZ Studio", url: `${url}/` },
};

export const metaServices: Metadata = {
  title: "Servicios",
  description:
    "Desarrollo web, identidad de marca y marketing digital bajo el mismo techo.",
  openGraph: { title: "Servicios – ORBYZ Studio", url: `${url}/services` },
};

export const metaContact: Metadata = {
  title: "Contacto",
  description: "Cuéntanos tu idea. Te respondemos en menos de 24 h.",
  openGraph: { title: "Contacto – ORBYZ Studio", url: `${url}/contact` },
};

export const metaBlog: Metadata = {
  title: "Blog",
  description:
    "Artículos, tutoriales y casos de estudio sobre desarrollo y diseño.",
  openGraph: { title: "Blog – ORBYZ Studio", url: `${url}/blog` },
};

export const metaProjects: Metadata = {
  title: "Proyectos",
  description: "Algunos de los trabajos que hemos entregado recientemente.",
  openGraph: { title: "Proyectos – ORBYZ Studio", url: `${url}/projects` },
};

/* Sub-servicios */
export const metaWeb: Metadata = {
  title: "Desarrollo Web",
  description:
    "Aplicaciones full-stack con Next.js, TypeScript y diseño UI/UX.",
  openGraph: {
    title: "Desarrollo Web – ORBYZ Studio",
    url: `${url}/services/web-development`,
  },
};

export const metaBranding: Metadata = {
  title: "Identidad de Marca",
  description:
    "Naming, logo, paleta, tipografía y manual de marca para startups.",
  openGraph: {
    title: "Identidad de Marca – ORBYZ Studio",
    url: `${url}/services/branding`,
  },
};

export const metaMarketing: Metadata = {
  title: "Marketing Digital",
  description:
    "SEO técnico, campañas SEM, redes sociales y funnels de conversión.",
  openGraph: {
    title: "Marketing Digital – ORBYZ Studio",
    url: `${url}/services/digital-marketing`,
  },
};
