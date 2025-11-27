import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // menambahkan configurasi gambar external
  images: {
    domains: ["i.pinimg.com"],
  }
};

export default nextConfig;
