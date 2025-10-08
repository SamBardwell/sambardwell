import { Suspense } from "react";
import { getAllPosts, getFilterOptions } from "@/lib/posts";
import { BlogGrid } from "@/components/blog/blog-grid";
import { PostCardSkeletonGrid } from "@/components/blog/post-card-skeleton";

export const metadata = {
  title: "Blog",
  description: "Posts",
};

async function BlogIndexContent() {
  const [posts, filterOpts] = await Promise.all([
    getAllPosts(),
    getFilterOptions(),
  ]);
  return <BlogGrid initialPosts={posts} filterOptions={filterOpts} />;
}

export default function BlogIndex() {
  return (
    <Suspense fallback={<PostCardSkeletonGrid count={9} />}>
      <BlogIndexContent />
    </Suspense>
  );
}