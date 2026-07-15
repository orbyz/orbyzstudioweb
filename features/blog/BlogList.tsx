import type { BlogPostSummary } from "@/lib/notion";
import { BlogCard } from "./BlogCard";

export function BlogList({ posts }: { posts: BlogPostSummary[] }) {
  if (posts.length === 0) {
    return (
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-muted">
            Estamos preparando los primeros artículos. Vuelve pronto.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-24 md:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
