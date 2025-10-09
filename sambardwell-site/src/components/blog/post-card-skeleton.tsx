"use client";

import React from "react";

function PostCardSkeleton() {
  return (
    <div className="flex flex-col w-full animate-pulse">
      <div className="relative aspect-[63/88] rounded-xl overflow-hidden ring-1 ring-zinc-700 bg-zinc-800/40">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,#27272a_0%,#3f3f46_40%,#27272a_80%)] bg-[length:200%_100%] animate-[shimmer_1.4s_ease_infinite]" />
      </div>
      <div className="mt-2 px-1 space-y-2">
        <div className="h-4 w-3/4 rounded bg-zinc-800/70" />
        <div className="flex gap-2">
          <div className="h-4 w-10 rounded bg-zinc-800/50" />
          <div className="h-4 w-12 rounded bg-zinc-800/50" />
        </div>
        <div className="h-3 w-20 rounded bg-zinc-800/40" />
      </div>
    </div>
  );
}

export function PostCardSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="site-container flex flex-col gap-6">
      <div className="grid items-stretch gap-4 grid-cols-[repeat(auto-fill,minmax(11rem,1fr))]">
        {Array.from({ length: count }).map((_, i) => (
          <PostCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}