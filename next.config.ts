import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "github.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
