import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Pin the workspace root so Next doesn't infer it from a stray parent lockfile.
  outputFileTracingRoot: path.resolve(process.cwd()),
  basePath: process.env.NEXT_BASE_PATH || "",
};

export default nextConfig;
