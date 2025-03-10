import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/hungtranghamminh.github.io" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/hungtranghamminh.github.io" : "",
  trailingSlash: true,
};

export default nextConfig;