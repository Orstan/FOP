import type { NextConfig } from "next";

// СТАТИЧНИЙ ЕКСПОРТ - для папки out/
// Використовуйте цей конфіг тільки якщо деплоїте на статичний хостинг
// Для Vercel/Netlify використовуйте звичайний next.config.ts

const nextConfig: NextConfig = {
  output: 'export',
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  // Базовий шлях для GitHub Pages (якщо потрібно)
  // basePath: '/repository-name',
};

export default nextConfig;
