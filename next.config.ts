import type { NextConfig } from "next";

const repoName = "/shadow-mind-projection-test";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoName,
  assetPrefix: repoName,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
