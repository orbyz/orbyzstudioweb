import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getAllSlugs } from "@/lib/notion";
import { BlogCTA } from "@/features/blog/BlogCTA";

export const revalidate = 3600;

type Params = { slug: string };

// Pre-genera las páginas de todos los posts publicados en build time
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const url = `https://www.orbyzstudio.dev/blog/${slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} – ORBYZ Studio`,
      description: post.excerpt,
      url,
      images: post.cover ? [post.cover] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <main>
      <article className="py-24 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          {post.cover && (
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-default mb-10">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <p className="text-sm text-muted mb-2">{formattedDate}</p>

          <h1 className="text-4xl md:text-5xl font-semibold text-text mb-6 leading-tight">
            {post.title}
          </h1>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="prose prose-invert max-w-none prose-headings:text-text prose-p:text-muted prose-li:text-muted prose-a:text-primary prose-strong:text-text prose-img:rounded-2xl">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      <BlogCTA />
    </main>
  );
}
