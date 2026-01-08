# 🚀 Деплой сайту fop-help.com

## ❓ VPS чи безкоштовний хостинг?

### ✅ РЕКОМЕНДАЦІЯ: Безкоштовний хостинг (не потрібен VPS!)

**Чому:**
- ✅ Ваш сайт статичний (Next.js SSG)
- ✅ Автоматичний SSL
- ✅ CDN по всьому світу
- ✅ Безкоштовно назавжди
- ✅ Автоматичні деплої з Git

---

## 🎯 Найкращі варіанти (БЕЗ VPS)

### 1. **Vercel** (Рекомендовано #1) ⭐⭐⭐⭐⭐

**Переваги:**
- Створено командою Next.js
- Ідеальна інтеграція
- Автоматичний sitemap.xml, robots.txt, manifest.json
- Безкоштовний SSL
- CDN по всьому світу
- Analytics безкоштовно

**Як задеплоїти:**

```bash
# 1. Встановіть Vercel CLI
npm i -g vercel

# 2. Залогіньтесь
vercel login

# 3. Деплой (у папці проекту)
vercel

# 4. Додайте домен fop-help.com в Dashboard
# Settings → Domains → Add fop-help.com
```

**Або через GitHub:**
1. Завантажте код на GitHub
2. Зайдіть на https://vercel.com
3. "Import Project" → оберіть репозиторій
4. Deploy → автоматично!
5. Додайте домен в налаштуваннях

**DNS налаштування для Vercel:**
```
Тип: A
Хост: @
Значення: 76.76.21.21

Тип: CNAME
Хост: www
Значення: cname.vercel-dns.com
```

---

### 2. **Netlify** (Рекомендовано #2) ⭐⭐⭐⭐

**Переваги:**
- Дуже простий у використанні
- Безкоштовний SSL
- CDN + автоматичні деплої
- Forms для email підписки (bonus)

**Як задеплоїти:**

```bash
# 1. Встановіть Netlify CLI
npm i -g netlify-cli

# 2. Білд проекту
npm run build

# 3. Деплой
netlify deploy --prod
```

**DNS налаштування для Netlify:**
```
Тип: A
Хост: @
Значення: 75.2.60.5

Тип: CNAME
Хост: www
Значення: [ваш-сайт].netlify.app
```

---

### 3. **Cloudflare Pages** (Рекомендовано #3) ⭐⭐⭐⭐

**Переваги:**
- Найшвидший CDN у світі
- Безкоштовно + безліміт
- Інтеграція з Cloudflare DNS

**Як задеплоїти:**
1. https://pages.cloudflare.com
2. Connect Git repository
3. Build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
4. Deploy!

---

## ⚙️ Статичний експорт (GitHub Pages / будь-який хостинг)

**Якщо хочете статичний HTML (папка `out`):**

### Крок 1: Оновіть `next.config.ts`

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

### Крок 2: Білд

```bash
npm run build
```

Результат буде в папці `out/` - готовий статичний сайт!

### Крок 3: Завантажте на хостинг

**GitHub Pages:**
```bash
# Додайте .github/workflows/deploy.yml
# Автоматичний деплой на кожен push
```

**Будь-який хостинг:**
- Завантажте папку `out/` на сервер
- Налаштуйте веб-сервер (Nginx/Apache)

**⚠️ УВАГА при статичному експорті:**
- ❌ Не працює: `sitemap.xml`, `robots.txt`, `manifest.json` (динамічні)
- ❌ Не працює: API routes, middleware
- ✅ Працює: всі сторінки, калькулятори, документи, блог

**Вирішення:**
Створіть статичні файли вручну в папці `public/`:
- `/public/sitemap.xml`
- `/public/robots.txt`
- `/public/manifest.json`

---

## 🎯 МОЯ РЕКОМЕНДАЦІЯ

### Для вашого проекту: **Vercel** 🏆

**Чому:**
1. ✅ Безкоштовно назавжди
2. ✅ Всі фічі Next.js працюють (sitemap, robots, manifest)
3. ✅ Автоматичний SSL
4. ✅ Швидкий CDN
5. ✅ Analytics вбудований
6. ✅ Деплой за 2 хвилини

**VPS не потрібен!** Це витрати ($5-20/міс) без необхідності.

---

## 📋 Покрокова інструкція (Vercel)

### Крок 1: Підготовка

```bash
# Перевірте білд локально
npm run build

# Має пройти без помилок ✅
```

### Крок 2: GitHub

```bash
# Ініціалізуйте Git (якщо ще не зробили)
git init
git add .
git commit -m "Initial commit"

# Створіть репозиторій на GitHub
# Завантажте код
git remote add origin https://github.com/your-username/fop-help.git
git push -u origin main
```

### Крок 3: Vercel

1. Зайдіть на https://vercel.com
2. Залогіньтесь через GitHub
3. "New Project"
4. Оберіть репозиторій `fop-help`
5. Framework Preset: Next.js ✅ (автоматично)
6. Deploy!

### Крок 4: Додайте домен

1. Project Settings → Domains
2. Add Domain: `fop-help.com`
3. Vercel покаже DNS записи
4. Додайте їх у GoDaddy/nic.ua
5. Почекайте 5-15 хв → SSL автоматично!

### Крок 5: Готово! 🎉

```
https://fop-help.com - працює!
```

---

## 🔄 Автоматичні деплої

**З Vercel/Netlify:**
- Кожен `git push` → автоматичний деплой
- Preview для кожної гілки
- Rollback в один клік

**Приклад:**
```bash
# Внесли зміни
git add .
git commit -m "Додав нову статтю"
git push

# Через 1-2 хв сайт оновлений автоматично! 🚀
```

---

## 💰 Порівняння вартості

| Варіант | Вартість/міс | SSL | CDN | Складність |
|---------|--------------|-----|-----|------------|
| **Vercel** | $0 | ✅ | ✅ | ⭐ (дуже просто) |
| **Netlify** | $0 | ✅ | ✅ | ⭐ (дуже просто) |
| **Cloudflare** | $0 | ✅ | ✅ | ⭐⭐ (просто) |
| **VPS** | $5-20 | ⚠️ (налаштування) | ❌ | ⭐⭐⭐⭐⭐ (складно) |

---

## ✅ Висновок

**НЕ ПОТРІБЕН VPS!** Використовуйте Vercel:
1. Безкоштовно
2. Простіше
3. Швидше
4. Надійніше
5. Автоматичні деплої

**Деплой займе 5 хвилин замість годин налаштувань VPS.**

---

## 🆘 Якщо виникли проблеми

**Білд падає:**
```bash
# Перевірте помилки
npm run build

# Очистіть кеш
rm -rf .next
npm run build
```

**Після деплою щось не працює:**
- Перевірте Environment Variables в Vercel
- Переконайтеся, що Google Analytics ID правильний
- Перевірте DNS через https://dnschecker.org

**Потрібна допомога:**
- Документація Vercel: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs
