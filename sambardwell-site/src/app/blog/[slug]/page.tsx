import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import type { PostMeta } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getAllPosts();
  const post = posts.find(p => p.slug === slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.title || slug,
    description: post.description,
  };
}

interface MDXPostModule {
  default: React.ComponentType;
  metadata?: PostMeta;
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const posts = await getAllPosts();
  const post = posts.find(p => p.slug === slug);
  if (!post) notFound();

  const mod = (await import(`@/content/posts/${slug}.mdx`)) as MDXPostModule;
  const MDXContent = mod.default;

  return (
    <article className="prose prose-invert mx-auto max-w-7xl px-6 flex flex-col gap-6">
      <header className="mb-8">
        <h1>{post.title || slug}</h1>
        {post.date && (
          <p className="text-sm text-zinc-500">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString()}
            </time>
          </p>
        )}
      </header>
      <MDXContent />
    </article>
  );
}