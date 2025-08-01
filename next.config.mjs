const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/ascii-art-web" : undefined,
  basePath: isProd ? "/ascii-art-web" : undefined,
};

export default nextConfig;
