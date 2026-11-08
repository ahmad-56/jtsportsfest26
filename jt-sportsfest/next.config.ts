import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Bypass the image cache during development.
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
