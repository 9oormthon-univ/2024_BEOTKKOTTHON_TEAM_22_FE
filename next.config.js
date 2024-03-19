/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.utoimage.com'],
    minimumCacheTTL: 31536000,
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
