export type BriefField = {
  id: string;
  section: string;
  label: string;
  hint?: string;
  type: "short" | "long" | "email";
  required?: boolean;
};

export const BRIEF_FIELDS: BriefField[] = [
  // Datos generales
  {
    id: "company_name",
    section: "Datos generales",
    label: "¿Cuál es el nombre de tu empresa o marca?",
    type: "short",
    required: true,
  },
  {
    id: "contact_name",
    section: "Datos generales",
    label: "¿Cuál es tu nombre y cargo?",
    type: "short",
    required: true,
  },
  {
    id: "contact_email",
    section: "Datos generales",
    label: "¿Cuál es tu correo electrónico?",
    hint: "Te enviaremos la propuesta a este correo",
    type: "email",
    required: true,
  },

  // 1. Sobre el negocio
  {
    id: "business_description",
    section: "Tu negocio",
    label: "¿A qué se dedica tu empresa? Descríbelo brevemente.",
    type: "long",
    required: true,
  },
  {
    id: "differentiation",
    section: "Tu negocio",
    label: "¿Qué te diferencia de tu competencia?",
    type: "long",
    required: true,
  },
  {
    id: "main_goal",
    section: "Tu negocio",
    label: "¿Cuál es el objetivo principal de tu nueva página web?",
    hint: "vender, generar contactos, informar, reservar citas, mostrar portafolio, etc.",
    type: "long",
    required: true,
  },
  {
    id: "success_metric",
    section: "Tu negocio",
    label: "¿Cómo sabrás que la página web fue un éxito? ¿Qué resultado esperas en 3-6 meses?",
    type: "long",
    required: false,
  },

  // 2. Cliente ideal
  {
    id: "ideal_client",
    section: "Tu cliente ideal",
    label: "¿Quién es tu cliente o usuario ideal?",
    hint: "edad, ubicación, intereses, necesidades",
    type: "long",
    required: true,
  },
  {
    id: "client_problem",
    section: "Tu cliente ideal",
    label: "¿Qué problema le resuelves a esa persona?",
    type: "long",
    required: false,
  },
  {
    id: "client_search",
    section: "Tu cliente ideal",
    label: "¿Cómo suele buscar tu cliente una solución como la tuya?",
    hint: "Google, redes sociales, recomendaciones",
    type: "short",
    required: false,
  },

  // 3. Marca y diseño
  {
    id: "brand_assets",
    section: "Marca y diseño",
    label: "¿Cuentas con manual de marca, logo, colores o tipografía ya definidos?",
    hint: "si sí, nos los podrás compartir después de enviar este formulario",
    type: "short",
    required: false,
  },
  {
    id: "reference_sites",
    section: "Marca y diseño",
    label: "Menciona 2-3 páginas web (de cualquier rubro) que te gusten y explica por qué.",
    type: "long",
    required: true,
  },
  {
    id: "brand_words",
    section: "Marca y diseño",
    label: "Elige 3 palabras que describan cómo quieres que se sienta tu marca.",
    hint: "ej: confiable, moderna, cercana, elegante",
    type: "short",
    required: true,
  },
  {
    id: "avoid",
    section: "Marca y diseño",
    label: "¿Hay algo que definitivamente NO quieres ver?",
    hint: "colores, estilos, referencias de competidores a evitar",
    type: "long",
    required: false,
  },

  // 4. Contenido y estructura
  {
    id: "pages_needed",
    section: "Contenido y estructura",
    label: "¿Qué páginas o secciones necesitas?",
    hint: "inicio, servicios, nosotros, contacto, blog, tienda, portafolio...",
    type: "long",
    required: true,
  },
  {
    id: "content_ready",
    section: "Contenido y estructura",
    label: "¿Ya tienes textos e imágenes propias, o necesitas que te ayudemos a redactarlos/producirlos?",
    type: "long",
    required: false,
  },
  {
    id: "multilingual",
    section: "Contenido y estructura",
    label: "¿Necesitas la web en más de un idioma?",
    type: "short",
    required: false,
  },

  // 5. Funcionalidad
  {
    id: "features_needed",
    section: "Funcionalidad",
    label: "¿Qué funciones necesita la web?",
    hint: "formulario de contacto, reservas, tienda online, panel de administración, WhatsApp, CRM",
    type: "long",
    required: true,
  },
  {
    id: "self_management",
    section: "Funcionalidad",
    label: "¿Vas a necesitar actualizar el contenido tú mismo/a en el futuro?",
    type: "short",
    required: false,
  },

  // 6. Referencias y competencia
  {
    id: "competitors",
    section: "Referencias y competencia",
    label: "Menciona 2-3 competidores directos. ¿Qué opinas de sus páginas web?",
    type: "long",
    required: false,
  },

  // 7. Logística
  {
    id: "budget",
    section: "Logística del proyecto",
    label: "¿Cuentas con un presupuesto aproximado destinado a este proyecto?",
    type: "short",
    required: false,
  },
  {
    id: "deadline",
    section: "Logística del proyecto",
    label: "¿Existe alguna fecha límite importante para el lanzamiento?",
    type: "short",
    required: false,
  },
  {
    id: "domain_hosting",
    section: "Logística del proyecto",
    label: "¿Ya tienes dominio y hosting, o necesitas que los gestionemos?",
    type: "short",
    required: false,
  },
];
