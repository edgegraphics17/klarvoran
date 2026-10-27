import type { NextConfig } from "next";
import path from "node:path";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    // Vercel Hobby: 5.000 Bild-Transformationen je 30 Tage für alle Projekte zusammen – wenige Varianten, lange Cache-Zeit.
    formats: ["image/webp"],
    minimumCacheTTL: 2678400, // 31 Tage
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [64, 128, 256],
  },
  poweredByHeader: false,
  turbopack: {
    root: path.join(__dirname),
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/coaching-angebot",
        destination: "/avgs",
        permanent: true,
      },
      {
        source: "/ablauf",
        destination: "/avgs",
        permanent: true,
      },
      {
        source: "/ueber-den-coach",
        destination: "/ueber-uns#gruender",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
