"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type Props = { types: string[]; energies: string[] };

function toggleParam(current: URLSearchParams, key: string, value: string) {
  const existing = current.getAll(key);
  if (existing.includes(value)) {
    const next = existing.filter(v => v !== value);
    current.delete(key);
    next.forEach(v => current.append(key, v));
  } else {
    current.append(key, value);
  }
}

function buildBlogRoute(params: URLSearchParams): import("next").Route {
  const qs = params.toString();
  return (qs ? `/blog?${qs}` : "/blog") as import("next").Route;
}

export function FiltersBar({ types, energies }: Props) {
  const sp = useSearchParams();
  const router = useRouter();

  const apply = useCallback(
    (mutator: (params: URLSearchParams) => void) => {
      const params = new URLSearchParams(sp.toString());
      mutator(params);
      router.replace(buildBlogRoute(params));
    },
    [sp, router]
  );

  const isActiveMulti = (key: string, value: string) =>
    sp.getAll(key).includes(value);

  const sort = sp.get("sort") || "recent";
  const hasFilters = sp.getAll("type").length > 0 || sp.getAll("energy").length > 0;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <select
          className="bg-zinc-900 border border-zinc-700 rounded px-2 py-1 text-sm"
          value={sort}
          onChange={(e) =>
            apply(p => {
              p.set("sort", e.target.value);
            })
          }
        >
          <option value="recent">Recently Added</option>
          <option value="difficulty-desc">Difficulty ↓</option>
          <option value="difficulty-asc">Difficulty ↑</option>
          <option value="impact-desc">Impact ↓</option>
          <option value="impact-asc">Impact ↑</option>
        </select>
        <div className="flex items-center gap-1 text-xs text-zinc-500">Filters:</div>
        {types.map(t => (
          <button
            key={t}
            onClick={() => apply(p => toggleParam(p, "type", t))}
            className={`px-2 py-1 rounded text-xs border ${
              isActiveMulti("type", t)
                ? "bg-emerald-600 border-emerald-500 text-white"
                : "bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            {t}
          </button>
        ))}
        {energies.map(e => (
          <button
            key={e}
            onClick={() => apply(p => toggleParam(p, "energy", e))}
            className={`px-2 py-1 rounded text-xs border ${
              isActiveMulti("energy", e)
                ? "bg-indigo-600 border-indigo-500 text-white"
                : "bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            {e}
          </button>
        ))}
        {hasFilters && (
          <button
            onClick={() =>
              apply(p => {
                p.delete("type");
                p.delete("energy");
              })
            }
            className="text-xs px-2 py-1 rounded bg-zinc-700 hover:bg-zinc-600 text-white"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}