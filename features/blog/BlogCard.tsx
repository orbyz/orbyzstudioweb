import Image from "next/image";
import Link from "next/link";
import type { BlogPostSummary } from "@/lib/notion";

export function BlogCard({ post }: { post: BlogPostSummary }) {
  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl border border-default overflow-hidden hover:border-primary/40 transition-colors"
    >
      <div className="relative aspect-video bg-black/20">
        {post.cover ? (
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 bg-primary/10" />
        )}
      </div>

      <div className="p-6">
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="text-xl font-semibold text-text mb-2 leading-snug group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        <p className="text-muted text-sm mb-4 line-clamp-2">{post.excerpt}</p>

        <p className="text-xs text-muted">{formattedDate}</p>
      </div>
    </Link>
  );
}
