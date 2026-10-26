import type { Metadata } from "next";

const url = "https://www.orbyzstudio.dev";

/* Página de inicio */
export const metaHome: Metadata = {
  title: "Desarrollo Web y Marketing Digital",
  description:
    "Diseño web, desarrollo a medida y marketing digital para empresas que quieren mejorar su presencia online y captar clientes.",
  alternates: {
    canonical: `${url}/`,
  },
  openGraph: {
    type: "website",
    title: "OrByZ Studio | Desarrollo Web y Marketing Digital",
    description:
      "Creamos webs y soluciones digitales enfocadas en el crecimiento y la captación de clientes.",
    url: `${url}/`,
  },
};

/* Servicios */
export const metaServices: Metadata = {
  title: "Servicios de Desarrollo Web y Marketing Digital",
  description:
    "Descubre nuestros servicios de desarrollo web, branding y marketing digital para impulsar tu negocio en Internet.",
  alternates: {
    canonical: `${url}/services`,
  },
  openGraph: {
    type: "website",
    title: "Servicios Digitales | OrByZ Studio",
    description:
      "Desarrollo web, identidad de marca y marketing digital para empresas.",
    url: `${url}/services`,
  },
};

/* Contacto */
export const metaContact: Metadata = {
  title: "Contacto y Presupuestos",
  description:
    "Cuéntanos qué necesita tu negocio. Solicita una propuesta de desarrollo web, branding o marketing digital sin compromiso.",
  alternates: {
    canonical: `${url}/contact`,
  },
  openGraph: {
    type: "website",
    title: "Contacta con OrByZ Studio",
    description:
      "Hablemos de tu proyecto y encontremos la solución digital que necesita tu negocio.",
    url: `${url}/contact`,
  },
};

/* Blog */
export const metaBlog: Metadata = {
  title: "Blog de Desarrollo Web, SEO y Marketing Digital",
  description:
    "Consejos, guías y recursos sobre desarrollo web, SEO, diseño digital y estrategias de marketing para empresas.",
  alternates: {
    canonical: `${url}/blog`,
  },
  openGraph: {
    type: "website",
    title: "Blog | OrByZ Studio",
    description:
      "Ideas y recursos prácticos sobre tecnología, diseño web y crecimiento digital.",
    url: `${url}/blog`,
  },
};

/* Proyectos */
export const metaProjects: Metadata = {
  title: "Proyectos y Casos de Desarrollo Web",
  description:
    "Explora proyectos de desarrollo web, plataformas digitales y soluciones creadas para empresas y clientes.",
  alternates: {
    canonical: `${url}/projects`,
  },
  openGraph: {
    type: "website",
    title: "Proyectos | OrByZ Studio",
    description:
      "Descubre proyectos reales de diseño y desarrollo digital.",
    url: `${url}/projects`,
  },
};

/* Sub-servicios */
export const metaWeb: Metadata = {
  title: "Desarrollo Web",
  description:
    "Aplicaciones full-stack con Next.js, TypeScript y diseño UI/UX.",
  openGraph: {
    title: "Desarrollo Web – ORBYZ Studio",
    url: `${url}/services`,
  },
};

export const metaBranding: Metadata = {
  title: "Identidad de Marca",
  description:
    "Naming, logo, paleta, tipografía y manual de marca para startups.",
  openGraph: {
    title: "Identidad de Marca – ORBYZ Studio",
    url: `${url}/services`,
  },
};

export const metaMarketing: Metadata = {
  title: "Marketing Digital",
  description:
    "SEO técnico, campañas SEM, redes sociales y funnels de conversión.",
  openGraph: {
    title: "Marketing Digital – ORBYZ Studio",
    url: `${url}/services`,
  },
};
