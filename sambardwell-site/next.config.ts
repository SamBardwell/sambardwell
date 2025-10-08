import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  typedRoutes: false,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: { unoptimized: true },
};

export default withMDX(nextConfig);