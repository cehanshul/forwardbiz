import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "himira.co.in",
      "www.mangopoint.in",
      "plus.unsplash.com",
      "lh3.googleusercontent.com",
    ], // Allow Unsplash images
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during builds
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
