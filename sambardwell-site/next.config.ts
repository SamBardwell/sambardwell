import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import matter from "gray-matter";

function remarkFrontmatterExport() {
  return (tree: any) => {
    const yamlNodes = tree.children.filter((n: any) => n.type === "yaml");
    if (!yamlNodes.length) return;
    const yaml = yamlNodes.map((n: any) => n.value).join("\n");
    const data = matter(`---\n${yaml}\n---`).data || {};
    tree.children = tree.children.filter((n: any) => n.type !== "yaml");
    tree.children.unshift({
      type: "mdxjsEsm",
      value: `export const metadata = ${JSON.stringify(data)};`,
    });
  };
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      remarkFrontmatterExport,
    ],
  },
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  eslint: { ignoreDuringBuilds: false },
};

export default withMDX(nextConfig);