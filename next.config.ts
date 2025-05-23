import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'fakestoreapi.com',
    },
  ],
};

export default nextConfig;
