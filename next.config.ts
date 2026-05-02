import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.yorkshire.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.yell.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.loopnet.com",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
