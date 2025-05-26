import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/img/**",
      },
  ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
