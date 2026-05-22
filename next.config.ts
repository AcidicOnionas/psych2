import type { NextConfig } from "next";

const repoName = "/psych2";
const isProductionBuild = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  ...(isProductionBuild && {
    basePath: repoName,
    assetPrefix: repoName,
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
