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
    <>
      <div className="site-container mb-6">
        <div className="flex items-start gap-3 px-4 py-3 rounded-lg bg-emerald-950/20 border-l-4 border-emerald-500">
          <svg 
            className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p className="text-sm text-emerald-100/90 leading-relaxed">
            Experimenting with a card based blog layout. Not sure if I&apos;ll actually write posts regularly, 
            but the Pokemon card UI was too cool not to build.
          </p>
        </div>
      </div>
      <Suspense fallback={<PostCardSkeletonGrid count={9} />}>
        <BlogIndexContent />
      </Suspense>
      <p className="site-container mt-8 text-xs text-zinc-500 text-center">
        Card-based layout inspired by{" "}
        <a
          href="https://rarecandy.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-400"
        >
          RareCandy
        </a>
        , a TCG collector app
      </p>
    </>
  );
}