/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "aceternity.com", protocol: "https" },
      { hostname: "files.edgestore.dev", protocol: "https" },
      { hostname: "utfs.io", protocol: "https" },
      { hostname: "da8h6r7q9t.ufs.sh", protocol: "https" },
      { hostname: "api.producthunt.com", protocol: "https" },
      { hostname: "peerpush.com", protocol: "https" },
      { hostname: "images.unsplash.com", protocol: "https" },
    ],
  },
  productionBrowserSourceMaps: true,
};

// Wrap your Next.js config with the analyzer
export default nextConfig;
