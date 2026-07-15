# Notion como CMS del blog — guía de instalación

Con esto, escribes los artículos en Notion, cambias su estado a "Publicado"
y aparecen solos en orbyzstudio.dev/blog (máximo 1 hora después, o al instante
si activas el paso opcional de revalidación instantánea).

## 1. Crear la base de datos en Notion

Crea una base de datos (tabla) en Notion llamada, por ejemplo, "Blog OrByZ",
con estas propiedades exactas (mayúsculas y nombres importan, el código las
busca por nombre):

| Propiedad | Tipo         | Uso                                            |
|-----------|--------------|-------------------------------------------------|
| Name      | Título       | Título del artículo (ya viene por defecto)      |
| Slug      | Texto        | URL del post, ej: `como-elegir-nextjs`          |
| Excerpt   | Texto        | Resumen corto (para la tarjeta y el meta description) |
| Date      | Fecha        | Fecha de publicación                            |
| Tags      | Multi-select | Categorías, ej: Desarrollo, SEO, Marketing      |
| Status    | Select       | Opciones: `Borrador` y `Publicado`              |

El **contenido del artículo** lo escribes directamente en el cuerpo de cada
página de Notion (texto, imágenes, listas, títulos H2/H3, etc. — todo eso se
convierte automáticamente a Markdown).

La **portada** del artículo es la imagen de portada (cover) de la página de
Notion — la que se pone arriba del todo al abrir la página.

## 2. Crear la integración de Notion

1. Ve a https://www.notion.so/my-integrations → "New integration".
2. Dale un nombre, ej. "OrByZ Blog".
3. Copia el **Internal Integration Token** (empieza por `secret_` o `ntn_`).
4. Abre tu base de datos "Blog OrByZ" en Notion → botón `···` (arriba derecha)
   → "Connections" → conecta la integración que acabas de crear.
   (Sin este paso, la API no puede leer la base de datos aunque tengas el token.)

## 3. Variables de entorno

Añade a tu `.env.local` (y también en Vercel → Settings → Environment Variables):

```
NOTION_TOKEN=secret_tu_token_de_integracion
NOTION_DATABASE_ID=el_id_de_tu_base_de_datos
REVALIDATE_SECRET=una_frase_secreta_inventada_por_ti
```

El `NOTION_DATABASE_ID` es el trozo de 32 caracteres en la URL de la base de
datos: `notion.so/tuworkspace/ESTE_ID_AQUI?v=...`

## 4. Instalar dependencias

```bash
npm install @notionhq/client notion-to-md react-markdown remark-gfm
npm install -D @tailwindcss/typography
```

`@tailwindcss/typography` da las clases `prose` que usa la página de detalle
para que el contenido de Notion se vea bien tipografiado automáticamente.
Actívalo en tu `styles/globals.css` (Tailwind v4, vía CSS):

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
```

## 5. Copiar los archivos

Copia estos archivos a tu repo, respetando las rutas:

```
lib/notion.ts
features/blog/BlogHero.tsx
features/blog/BlogList.tsx
features/blog/BlogCard.tsx
features/blog/BlogCTA.tsx
app/blog/page.tsx              (reemplaza el placeholder actual)
app/blog/[slug]/page.tsx       (nuevo)
app/api/revalidate/route.ts    (opcional, para publicación instantánea)
```

## 6. Probar en local

```bash
npm run dev
```

Escribe un artículo de prueba en Notion, ponle Slug, Excerpt, Date, Tags, y
cambia Status a "Publicado". Entra a `http://localhost:3000/blog` — debería
aparecer.

## 7. Publicación instantánea (opcional)

Por defecto, un artículo nuevo tarda hasta 1 hora en aparecer (por el
`revalidate = 3600`). Si quieres que aparezca al instante al marcarlo como
"Publicado", la forma más simple sin escribir más código es usar una
automatización gratuita en Make.com o Zapier:

**Trigger:** "Notion – Updated Database Item" (cuando cambia el Status)
**Acción:** HTTP POST a `https://www.orbyzstudio.dev/api/revalidate?secret=TU_REVALIDATE_SECRET`

Así, en cuanto marcas el artículo como Publicado en Notion, la web se
actualiza en segundos.

## Flujo de trabajo final

1. Escribes el artículo en Notion (texto, imágenes, todo dentro de la página).
2. Rellenas Slug, Excerpt, Date, Tags.
3. Cambias Status a "Publicado".
4. El artículo aparece en orbyzstudio.dev/blog automáticamente — no tocas código,
   no haces deploy.
