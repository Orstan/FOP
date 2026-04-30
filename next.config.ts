import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Redirect non-www to www (301 permanent)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'fop-help.com',
          },
        ],
        destination: 'https://www.fop-help.com/:path*',
        permanent: true,
      },
    ];
  },
  // Для статичного експорту розкоментуйте наступний рядок:
  // output: 'export',
  // Але це вимкне: sitemap.xml, robots.txt, manifest.json (динамічні route handlers)
};

export default nextConfig;
