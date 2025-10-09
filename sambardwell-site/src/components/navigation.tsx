"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
] as const;

export function Nav() {
  const pathname = usePathname();

  const items = useMemo(
    () =>
      links.map((l) => {
        const active =
          l.href === "/"
            ? pathname === "/"
            : pathname === l.href || pathname.startsWith(l.href + "/");
        return { ...l, active };
      }),
    [pathname]
  );

  return (
    <nav className="site-container flex h-14 items-center gap-6">
      <div className="font-semibold tracking-tight">Sam Bardwell</div>
      <ul className="flex items-center gap-4 text-sm">
        {items.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href as import("next").Route}
              aria-current={l.active ? "page" : undefined}
              className={`transition-colors ${
                l.active
                  ? "text-white"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}