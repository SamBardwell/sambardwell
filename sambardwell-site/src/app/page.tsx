import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Personal site built with Next.js (static).",
};

export default function Home() {
  return (
    <div className="px-6">
      <h1 className="text-2xl font-semibold">Under Construction</h1>
      <p className="mt-4 text-sm text-zinc-400">
        Check back soon.
      </p>
    </div>
  );
}