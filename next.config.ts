import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production hostname — the site is served from fytfil.com
  assetPrefix: process.env.NODE_ENV === "production" ? "https://fytfil.com" : "",
};

export default nextConfig;
