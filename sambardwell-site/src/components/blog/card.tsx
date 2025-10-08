import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/posts";
import { blogPostHref } from "@/lib/routes";

export function PostCard({ post }: { post: Post }) {
  const slug = post.slug;

  return (
    <div className="group flex flex-col w-full h-full">
      <Link
        href={blogPostHref(slug)}
        aria-label={post.title || slug}
        className="relative block rounded-xl overflow-hidden ring-1 ring-zinc-700 transition
                   group-hover:ring-zinc-500 group-hover:shadow-md group-hover:shadow-black/40 aspect-[63/88]"
      >
        <Image
          src={post.thumbnail ?? "/placeholder.png"}
          alt={post.title || slug}
          fill
          className="absolute inset-0 object-cover pointer-events-none select-none transition-transform
                     group-hover:scale-[1.015]"
          priority={false}
        />
        <span
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-10
                     bg-white transition-opacity"
        />
      </Link>

      <div className="mt-2 px-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold leading-snug tracking-tight flex-1 truncate">
            {post.title || slug}
          </h3>
        </div>

        {post.energy?.length && (
          <div className="mt-1 flex flex-wrap gap-1">
            {post.energy.slice(0, 2).map((e) => (
              <span
                key={e}
                className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[10px] font-medium tracking-wide"
              >
                {e.toUpperCase()}
              </span>
            ))}
            {post.energy.length > 2 && (
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 text-[10px]">
                +{post.energy.length - 2}
              </span>
            )}
          </div>
        )}

        <div className="mt-2 flex items-center justify-between text-[10px] text-zinc-500">
          <span className="truncate">{post.type}</span>
          {post.date && (
            <time
              dateTime={post.date}
              className="tabular-nums"
              title={post.date}
            >
              {new Date(post.date).toLocaleDateString(undefined, {
                month: "numeric",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          )}
        </div>
      </div>
    </div>
  );
}