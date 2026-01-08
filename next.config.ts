import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  // Для статичного експорту розкоментуйте наступний рядок:
  // output: 'export',
  // Але це вимкне: sitemap.xml, robots.txt, manifest.json (динамічні route handlers)
};

export default nextConfig;
