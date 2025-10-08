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
    openGraph: {
      title: post.title || slug,
      description: post.description || "",
      type: "article",
      url: `/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title || slug,
      description: post.description || "",
    },
  };
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  try {
    type MDXPostModule = {
      default: React.ComponentType;
      metadata?: PostMeta;
    };
    const mod = (await import(`@/content/posts/${slug}.mdx`)) as MDXPostModule;
    const MDXContent = mod.default;
    const meta: PostMeta = mod.metadata ?? {};

    return (
      <article className="prose prose-invert max-w-3xl px-6">
        <header className="mb-8">
          <h1>{meta.title || slug}</h1>
          {meta.date && (
            <p className="text-sm text-zinc-500">
              <time dateTime={meta.date}>
                {new Date(meta.date).toLocaleDateString()}
              </time>
            </p>
          )}
        </header>
        <MDXContent />
      </article>
    );
  } catch {
    notFound();
  }
}