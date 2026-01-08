# 📦 Статичний експорт (папка out)

## ⚠️ ВАЖЛИВО

**Статичний експорт обмежує функціональність!**

### Що НЕ працюватиме:
- ❌ `/sitemap.xml` (динамічний route handler)
- ❌ `/robots.txt` (динамічний route handler)
- ❌ `/manifest.webmanifest` (динамічний route handler)

### Що працюватиме:
- ✅ Всі сторінки (.html файли)
- ✅ Калькулятори (client-side JavaScript)
- ✅ Документи (client-side)
- ✅ Блог статті
- ✅ Темна/світла тема
- ✅ Google Analytics

---

## 🔧 Як створити папку out:

### Крок 1: Замініть next.config.ts

```bash
# Перейменуйте поточний конфіг
mv next.config.ts next.config.vercel.ts

# Використайте статичний конфіг
mv next.config.static.ts next.config.ts
```

**АБО вручну відредагуйте `next.config.ts`:**

```typescript
const nextConfig: NextConfig = {
  output: 'export',  // ← додайте цей рядок
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};
```

### Крок 2: Створіть статичні файли замість динамічних

Створіть ці файли в папці `public/`:

**`/public/sitemap.xml`:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://fop-help.com/</loc>
    <lastmod>2026-01-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://fop-help.com/calculators</loc>
    <lastmod>2026-01-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://fop-help.com/calculators/fop-tax</loc>
    <lastmod>2026-01-08</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://fop-help.com/documents</loc>
    <lastmod>2026-01-08</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://fop-help.com/blog</loc>
    <lastmod>2026-01-08</lastmod>
    <priority>0.8</priority>
  </url>
  <!-- Додайте решту URL вручну -->
</urlset>
```

**`/public/robots.txt`:**
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://fop-help.com/sitemap.xml
```

**`/public/manifest.json`:**
```json
{
  "name": "ФОП Помічник - Документи та Калькулятори",
  "short_name": "ФОП Помічник",
  "description": "Безкоштовні документи, калькулятори податків та поради для українських підприємців",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2563eb",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Крок 3: Видаліть динамічні route handlers

```bash
# Видаліть або перейменуйте ці файли:
rm app/sitemap.ts
rm app/robots.ts
rm app/manifest.ts
```

### Крок 4: Білд

```bash
npm run build
```

Тепер папка `out/` з'явиться! ✅

---

## 📤 Завантаження на хостинг

### GitHub Pages:

```bash
# Додайте .nojekyll файл
touch out/.nojekyll

# Push папку out/ на gh-pages гілку
```

### Будь-який статичний хостинг:

1. Завантажте весь вміст папки `out/` на сервер
2. Налаштуйте веб-сервер (Nginx/Apache) на цю папку
3. Готово!

---

## 🎯 МОЄ ПОРАДА

**НЕ використовуйте статичний експорт!**

**Чому:**
1. Втрачаєте автоматичний sitemap
2. Втрачаєте PWA manifest
3. Потрібно вручну підтримувати файли
4. Vercel/Netlify - безкоштовні і простіші

**Vercel робить ВСЕ автоматично:**
- ✅ Sitemap генерується при кожному білді
- ✅ Robots працює
- ✅ Manifest працює
- ✅ SSL автоматично
- ✅ CDN по всьому світу

**Деплой на Vercel = 2 хвилини**  
**Налаштування статичного експорту + хостинг = 2 години**

---

## ✅ Рекомендація

**Поточний білд (`.next`) готовий для Vercel!**

Просто виконайте:
```bash
npm i -g vercel
vercel
```

І сайт буде онлайн за 2 хвилини з усіма фічами! 🚀
