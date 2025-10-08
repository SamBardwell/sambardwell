import path from "node:path";
import { promises as fs } from "node:fs";
import matter from "gray-matter";

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

let _postsCache:
  | {
      signature: string;
      posts: Post[];
    }
  | null = null;

function normalizeEnergy(v: unknown): string[] {
  if (Array.isArray(v)) return v.filter(Boolean).map(String);
  if (typeof v === "string" && v.trim().length) return [v];
  return [];
}

function extractExportedMetadata(source: string): Partial<PostMeta> | null {
  const match = source.match(/export\s+const\s+metadata\s*=\s*({[\s\S]*?});/);
  if (!match) return null;
  let objCode = match[1];

  objCode = objCode
    .replace(/\/\/.*$/gm, "")
    .replace(/,\s*}/g, "}")
    .replace(/,\s*]/g, "]");

  try {
    // eslint-disable-next-line no-new-func
    const meta = new Function("return " + objCode)();
    if (meta && typeof meta === "object") return meta as Partial<PostMeta>;
  } catch {
    return null;
  }
  return null;
}

function coerceDate(d: unknown): string | undefined {
  if (!d) return undefined;
  if (d instanceof Date) return d.toISOString().slice(0, 10);
  if (typeof d === "string") return d;
  return undefined;
}

async function readPostFile(slug: string): Promise<Post | null> {
  const full = path.join(POSTS_DIR, `${slug}.mdx`);
  try {
    const raw = await fs.readFile(full, "utf8");
    const { data } = matter(raw);
    const meta: Partial<PostMeta> = Object.keys(data || {}).length
      ? (data as Partial<PostMeta>)
      : extractExportedMetadata(raw) || {};

    if (meta.draft) return null;

    const energy = normalizeEnergy(meta.energy);
    const date = coerceDate(meta.date);

    return {
      slug,
      ...meta,
      date,
      energy,
    };
  } catch {
    return null;
  }
}

async function computeSignature(files: string[]) {
  const stats = await Promise.all(
    files.map(async (f) => {
      const s = await fs.stat(path.join(POSTS_DIR, f));
      return `${f}:${s.mtimeMs}`;
    })
  );
  return stats.sort().join("|");
}

export async function getAllPosts(): Promise<Post[]> {
  const files = await fs.readdir(POSTS_DIR);
  const mdxFiles = files.filter((f) => f.endsWith(".mdx"));

  const signature = await computeSignature(mdxFiles);
  if (
    _postsCache &&
    _postsCache.signature === signature &&
    process.env.NODE_ENV === "production"
  ) {
    return _postsCache.posts;
  }

  const posts = (
    await Promise.all(
      mdxFiles.map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        return readPostFile(slug);
      })
    )
  ).filter(Boolean) as Post[];

  function dateValue(p: Post): number {
    return p.date ? Date.parse(p.date) || 0 : 0;
  }
  posts.sort((a, b) => dateValue(b) - dateValue(a));

  _postsCache = { signature, posts };
  return posts;
}

export function clearPostsCache() {
  _postsCache = null;
}

export async function getFilterOptions() {
  const posts = await getAllPosts();
  const types = Array.from(
    new Set(posts.map((p) => p.type).filter(Boolean))
  ) as string[];
  const energies = Array.from(
    new Set(posts.flatMap((p) => p.energy || []))
  );
  return { types, energies };
}