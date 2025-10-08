import { getAllPosts, getFilterOptions } from "@/lib/posts";
import { BlogGrid } from "@/components/blog/blog-grid";
import { Suspense } from "react";

export const metadata = {
  title: "Blog",
  description: "Posts",
};

export default async function BlogIndex() {
  const [posts, filterOpts] = await Promise.all([
    getAllPosts(),
    getFilterOptions(),
  ]);

  return (
    <Suspense fallback={<div className="px-6 py-8 text-sm text-zinc-500">Loading posts…</div>}>
      <BlogGrid initialPosts={posts} filterOptions={filterOpts} />
    </Suspense>
  );
}