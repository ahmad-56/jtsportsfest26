import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Read current source files locally instead of stale optimized image copies.
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
