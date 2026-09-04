/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve AVIF where supported, WebP otherwise; sizes picked per <ImageSlot sizes>.
    formats: ['image/avif', 'image/webp'],
    // Optimised variants are immutable, so let the CDN keep them for 30 days.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
