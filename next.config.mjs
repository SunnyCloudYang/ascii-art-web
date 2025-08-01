const internalHost = process.env.TAURUS_DEV_HOST || 'localhost'
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? 'https://origakid.top/ascii-art-web' : `http://${internalHost}:3000`,
}

export default nextConfig
