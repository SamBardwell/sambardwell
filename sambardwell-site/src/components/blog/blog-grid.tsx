"use client";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { FiltersBar } from "@/components/blog/filters-bar";
import { PostCard } from "@/components/blog/card";
import type { Post } from "@/lib/posts";

const SORTERS: Record<string, (a: Post, b: Post) => number> = {
  "date-desc": (a, b) =>
    Date.parse(b.date || "") - Date.parse(a.date || ""),
  "date-asc": (a, b) =>
    Date.parse(a.date || "") - Date.parse(b.date || ""),
};

export interface BlogGridProps {
  initialPosts: Post[];
  filterOptions: { types: string[]; energies: string[] };
}

function toArray(v: string | string[] | undefined): string[] {
  return Array.isArray(v) ? v : v ? [v] : [];
}

export function BlogGrid({ initialPosts, filterOptions }: BlogGridProps) {
  const sp = useSearchParams();

  const activeTypes = toArray(sp.getAll("type"));
  const activeEnergy = toArray(sp.getAll("energy"));
  const sort = sp.get("sort") || "date-desc";

  const filtered = useMemo(() => {
    const base = initialPosts.filter((p) => {
      if (activeTypes.length && !activeTypes.includes(p.type || "")) return false;
      if (activeEnergy.length && !activeEnergy.every((e) => p.energy?.includes(e)))
        return false;
      return true;
    });
    const cmp = SORTERS[sort];
    return cmp ? [...base].sort(cmp) : base;
  }, [initialPosts, activeTypes, activeEnergy, sort]);

  return (
    <main className="site-container flex flex-col gap-6">
      <FiltersBar types={filterOptions.types} energies={filterOptions.energies} />
      <div className="grid items-stretch gap-4 grid-cols-[repeat(auto-fill,minmax(11rem,1fr))]">
        {filtered.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-sm text-zinc-400">No posts match filters.</div>
        )}
      </div>
    </main>
  );
}