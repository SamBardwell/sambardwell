import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/posts";
import { blogPostHref } from "@/lib/routes";

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="flex flex-col group">
      <Link
        href={blogPostHref(post.slug)}
        className="relative rounded-xl border border-zinc-700 bg-zinc-900/70 overflow-hidden shadow-sm transition-all
                   group-hover:shadow-md group-hover:border-zinc-500 focus:outline-none focus-visible:ring-2
                   focus-visible:ring-emerald-500"
        aria-label={post.title || post.slug}
      >
        <div className="aspect-[63/88] w-full">
          {post.thumbnail ? (
            <Image
              src={post.thumbnail}
              alt={post.title || post.slug}
              width={350}
              height={490}
              className="h-full w-full object-contain"
              priority={false}
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center text-xs text-zinc-500">
              No Image
            </span>
          )}
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity" />
      </Link>

      <div
        className="mt-2 rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 shadow-sm
                   group-hover:border-zinc-600 group-hover:shadow-md transition-colors"
      >
        <Link
          href={blogPostHref(post.slug)}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
        >
          <h3 className="text-base font-semibold leading-snug mb-2">
            {post.title || post.slug}
          </h3>
        </Link>

        {post.energy?.length ? (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.energy.slice(0, 3).map((e) => (
              <span
                key={e}
                className="text-[10px] font-medium tracking-wide px-2 py-1 rounded bg-zinc-800 text-zinc-300"
              >
                {e.toUpperCase()}
              </span>
            ))}
          </div>
        ) : null}

        <div className="flex justify-between text-[11px] text-zinc-500 mb-2">
            <span>{post.type}</span>
            {post.date && (
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString()}
              </time>
            )}
        </div>

        <div className="text-[11px] text-zinc-400 flex gap-4">
          {typeof post.difficulty === "number" && (
            <span>Difficulty: {post.difficulty}</span>
          )}
          {typeof post.impact === "number" && (
            <span>Impact: {post.impact}</span>
          )}
        </div>
      </div>
    </div>
  );
}