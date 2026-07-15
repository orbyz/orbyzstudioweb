import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

// Cliente oficial de Notion, autenticado con el token de tu integración interna
const notion = new Client({ auth: process.env.NOTION_TOKEN });

// Convierte los bloques de una página de Notion a Markdown
const n2m = new NotionToMarkdown({ notionClient: notion });

const DATABASE_ID = process.env.NOTION_DATABASE_ID!;

// Notion ahora permite que una base de datos tenga varias "fuentes de datos".
// Las consultas ya no se hacen con databases.query (obsoleto), sino con
// dataSources.query, usando el id de la fuente de datos. Para una base de
// datos normal (la mayoría de los casos) solo hay una, así que la buscamos
// una vez y la reutilizamos.
let cachedDataSourceId: string | null = null;

async function getDataSourceId(): Promise<string> {
  if (cachedDataSourceId) return cachedDataSourceId;

  const db = await notion.databases.retrieve({ database_id: DATABASE_ID });
  const dataSourceId = (db as any).data_sources?.[0]?.id;

  if (!dataSourceId) {
    throw new Error(
      "No se encontró una fuente de datos en la base de datos de Notion. Revisa NOTION_DATABASE_ID."
    );
  }

  cachedDataSourceId = dataSourceId;
  return dataSourceId;
}

export type BlogPostSummary = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags: string[];
  cover: string | null;
};

export type BlogPost = BlogPostSummary & {
  content: string;
};

// Tipos mínimos para no depender de los tipos internos de @notionhq/client
type NotionPage = {
  id: string;
  cover?: { external?: { url: string }; file?: { url: string } } | null;
  properties: Record<string, any>;
};

function mapPage(page: NotionPage): BlogPostSummary {
  const props = page.properties;
  return {
    id: page.id,
    title: props.Name?.title?.[0]?.plain_text ?? "Sin título",
    slug: props.Slug?.rich_text?.[0]?.plain_text ?? page.id,
    excerpt: props.Excerpt?.rich_text?.[0]?.plain_text ?? "",
    date: props.Date?.date?.start ?? "",
    tags: (props.Tags?.multi_select ?? []).map((t: { name: string }) => t.name),
    cover: page.cover?.external?.url ?? page.cover?.file?.url ?? null,
  };
}

/** Devuelve todos los posts con Status = "Publicado", ordenados por fecha descendente */
export async function getPublishedPosts(): Promise<BlogPostSummary[]> {
  const dataSourceId = await getDataSourceId();

  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    filter: {
      property: "Status",
      select: { equals: "Publicado" },
    },
    sorts: [{ property: "Date", direction: "descending" }],
  });

  return (response.results as unknown as NotionPage[]).map(mapPage);
}

/** Devuelve un post publicado por su slug, con el contenido ya convertido a Markdown */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const dataSourceId = await getDataSourceId();

  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    filter: {
      and: [
        { property: "Slug", rich_text: { equals: slug } },
        { property: "Status", select: { equals: "Publicado" } },
      ],
    },
  });

  const page = response.results[0] as unknown as NotionPage | undefined;
  if (!page) return null;

  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const { parent: content } = n2m.toMarkdownString(mdBlocks);

  return { ...mapPage(page), content };
}

/** Slugs de todos los posts publicados, usado por generateStaticParams */
export async function getAllSlugs(): Promise<string[]> {
  const posts = await getPublishedPosts();
  return posts.map((p) => p.slug);
}
