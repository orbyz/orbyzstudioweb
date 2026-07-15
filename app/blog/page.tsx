import { getPublishedPosts } from "@/lib/notion";
import { BlogHero } from "@/features/blog/BlogHero";
import { BlogList } from "@/features/blog/BlogList";
import { BlogCTA } from "@/features/blog/BlogCTA";
import { metaBlog } from "../metadata";

export const metadata = metaBlog;

// Revalida esta página cada hora: si publicas un artículo nuevo en Notion,
// aparece solo en un máximo de 60 minutos, sin necesidad de redeploy.
export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <main>
      <BlogHero />
      <BlogList posts={posts} />
      <BlogCTA />
    </main>
  );
}
