import path from "node:path";
import { promises as fs } from "node:fs";

const POSTS_DIR = path.join(process.cwd(), "src", "content", "posts");

export type PostMeta = {
  title?: string;
  description?: string;
  date?: string;
  type?: string;
  energy?: string[];
  difficulty?: number;
  impact?: number;
  tags?: string[];
  thumbnail?: string;
  draft?: boolean;
};

export type Post = PostMeta & { slug: string };

interface MDXMetaModule {
  metadata?: PostMeta;
}

export async function getAllPosts(): Promise<Post[]> {
  const files = await fs.readdir(POSTS_DIR);
  const mdx = files.filter(f => f.endsWith(".mdx"));

  const posts = await Promise.all(
    mdx.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const mod = (await import(`@/content/posts/${slug}.mdx`)) as MDXMetaModule;
      const meta = mod.metadata || {};
      if (meta.draft) return null;
      return { slug, ...meta } as Post;
    })
  );

  const typed = posts.filter((p): p is Post => !!p);
  return typed.sort(
    (a, b) => Date.parse(b.date || "") - Date.parse(a.date || "")
  );
}

export async function getFilterOptions() {
  const posts = await getAllPosts();
  const types = Array.from(new Set(posts.map(p => p.type).filter(Boolean))) as string[];
  const energies = Array.from(new Set(posts.flatMap(p => p.energy || [])));
  return { types, energies };
}