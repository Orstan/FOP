# 🚀 Vercel Деплой - Покрокова Інструкція

## Метод 1: Через GitHub (Найпростіше) ⭐ РЕКОМЕНДУЮ

### Крок 1: Завантажте код на GitHub

```bash
# 1. Ініціалізуйте Git (якщо ще не зробили)
git init

# 2. Додайте всі файли
git add .

# 3. Зробіть коміт
git commit -m "Initial commit - FOP Help website"

# 4. Створіть репозиторій на GitHub
# Зайдіть на https://github.com → New repository
# Назва: fop-help
# Public або Private - не важливо
# НЕ додавайте README, .gitignore (вони вже є)
# Create repository

# 5. Підключіть remote та завантажте
git branch -M main
git remote add origin https://github.com/ВАШ_USERNAME/fop-help.git
git push -u origin main
```

---

### Крок 2: Реєстрація на Vercel

1. **Відкрийте:** https://vercel.com
2. **Натисніть:** "Sign Up" (вгорі справа)
3. **Оберіть:** "Continue with GitHub"
4. **Авторизуйтеся** через GitHub
5. **Дозвольте доступ** до репозиторіїв

✅ Ви зареєстровані!

---

### Крок 3: Import проекту з GitHub

**На головній Vercel:**

1. **Натисніть:** "Add New..." → "Project"
   
2. **Оберіть репозиторій:**
   - У списку знайдіть `fop-help`
   - Натисніть **"Import"**

3. **Configure Project:**
   
   📋 **Project Name:** `fop-help` (або будь-яке)
   
   📋 **Framework Preset:** 
   - Vercel автоматично визначить: **Next.js** ✅
   - Якщо ні - оберіть вручну: **Next.js**
   
   📋 **Root Directory:** 
   - Залиште: `./` (якщо проект в корені)
   
   📋 **Build and Output Settings:**
   ```
   Build Command: npm run build (автоматично)
   Output Directory: .next (автоматично)
   Install Command: npm install (автоматично)
   ```
   - **НЕ МІНЯЙТЕ** - все правильно за замовчуванням
   
   📋 **Environment Variables:**
   - Поки що **залиште порожнім**
   - (Google Analytics вже в коді)

4. **Натисніть:** **"Deploy"** (велика синя кнопка)

---

### Крок 4: Чекайте деплой (1-2 хвилини)

Ви побачите:
```
Building...
├── Installing dependencies
├── Building application  
├── Uploading build
└── Deploying...

🎉 Deployment ready!
```

**Після завершення:**
- Vercel покаже URL: `https://fop-help.vercel.app`
- Натисніть **"Visit"** → ваш сайт працює! ✅

---

### Крок 5: Додайте власний домен (fop-help.com)

**У Vercel Dashboard:**

1. **Перейдіть до проекту:** `fop-help`

2. **Натисніть вкладку:** **"Settings"** (вгорі)

3. **У лівому меню:** **"Domains"**

4. **Додайте домен:**
   - У полі введіть: `fop-help.com`
   - Натисніть **"Add"**

5. **Vercel покаже 2 варіанти налаштування:**

---

### 📋 Варіант A: Nameservers (Простіше) - РЕКОМЕНДУЮ

**Якщо використовуєте GoDaddy/Hostinger:**

Vercel покаже свої nameservers:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Що робити:**

1. **Зайдіть у свій хостинг** (GoDaddy/Hostinger)
2. **Знайдіть:** Domain Settings → Nameservers
3. **Оберіть:** "Use custom nameservers"
4. **Замініть на:**
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
5. **Збережіть**

⏱️ **Почекайте:** 5-30 хвилин (DNS поширення)

✅ **Після цього:** Vercel автоматично:
- Налаштує SSL
- Налаштує всі DNS записи
- Все працюватиме!

---

### 📋 Варіант B: A та CNAME записи (Якщо не хочете міняти nameservers)

**У вашому DNS провайдері (GoDaddy/Hostinger):**

**1. Додайте A запис:**
```
Тип: A
Хост/Name: @ (або залиште порожнім)
Значення/Value: 76.76.21.21
TTL: 3600 (або Auto)
```

**2. Додайте CNAME для www:**
```
Тип: CNAME
Хост/Name: www
Значення/Value: cname.vercel-dns.com
TTL: 3600
```

**3. Збережіть зміни**

⏱️ **Почекайте:** 5-30 хвилин

✅ **Vercel автоматично:**
- Визначить налаштування
- Видасть SSL сертифікат
- Сайт буде доступний на https://fop-help.com

---

### Крок 6: Перевірте SSL та домен

**Через 15-30 хвилин:**

1. **Відкрийте:** https://fop-help.com
2. **Перевірте замок SSL** 🔒 у браузері
3. **Перевірте www:** https://www.fop-help.com (має редіректити на fop-help.com)

✅ **Працює!** Сайт онлайн!

---

### Крок 7: Налаштуйте Google Search Console

**Після того як домен працює:**

1. **Зайдіть:** https://search.google.com/search-console
2. **Add Property:** `fop-help.com`
3. **Виберіть метод:** "HTML tag" (він вже в коді!)
4. **Підтвердіть домен** - має пройти автоматично ✅
5. **Додайте Sitemap:**
   - URL: `https://fop-help.com/sitemap.xml`
   - Submit

✅ **Google почне індексувати** ваш сайт!

---

## Метод 2: Через Vercel CLI (Для досвідчених)

```bash
# 1. Встановіть Vercel CLI
npm i -g vercel

# 2. Логін
vercel login

# 3. Деплой (у папці проекту)
vercel

# Відповідайте на питання:
# Set up and deploy? → Y
# Which scope? → Ваш акаунт
# Link to existing project? → N
# What's your project's name? → fop-help
# In which directory is your code? → ./
# Want to override settings? → N

# 4. Деплой на production
vercel --prod

# 5. Додайте домен через Dashboard (як у Методі 1)
```

---

## 🎯 Після деплою - важливі дії

### 1. Перевірте всі сторінки:
- ✅ https://fop-help.com (головна)
- ✅ https://fop-help.com/calculators
- ✅ https://fop-help.com/documents
- ✅ https://fop-help.com/blog

### 2. Перевірте SEO файли:
- ✅ https://fop-help.com/sitemap.xml (має відкритися)
- ✅ https://fop-help.com/robots.txt (має відкритися)
- ✅ https://fop-help.com/manifest.webmanifest (JSON файл)

### 3. Перевірте Analytics:
- Зайдіть на https://analytics.google.com
- Перевірте Real-Time → має показати ваші візити

### 4. Перевірте мобільну версію:
- Відкрийте на телефоні
- Перевірте темну тему
- Спробуйте калькулятори

---

## 🔄 Автоматичні деплої (Bonus!)

**Тепер при кожному git push:**

```bash
# Внесли зміни в код
git add .
git commit -m "Додав нову статтю"
git push

# Vercel автоматично:
# 1. Виявляє новий коміт
# 2. Запускає білд
# 3. Деплоїть на production
# 4. Сайт оновлюється за 1-2 хв!
```

✅ **Не потрібно нічого робити вручну!**

---

## ⚙️ Корисні налаштування Vercel

### Production Domain (за замовчуванням):
- `fop-help.com` → production
- `www.fop-help.com` → редірект на fop-help.com

### Preview Deployments:
- Кожна гілка git → окремий preview URL
- Для тестування перед production

### Analytics (вбудований):
- Dashboard → Analytics
- Безкоштовно: Web Vitals, Top pages, Traffic

### Environment Variables:
- Якщо потрібні секрети (API keys)
- Settings → Environment Variables

---

## 🆘 Вирішення проблем

### Домен не працює через 30 хв:
```bash
# Перевірте DNS
nslookup fop-help.com

# Має показати: 76.76.21.21
# Якщо ні - DNS ще не оновився, почекайте
```

### SSL не активувався:
- Зайдіть у Vercel Dashboard → Domains
- Біля домену має бути ✅ (зелена галочка)
- Якщо ні - натисніть "Refresh" або почекайте

### Білд падає:
- Перевірте Build Logs у Vercel
- Переконайтеся що `npm run build` працює локально

### Google Analytics не показує дані:
- Почекайте 24 години (дані з затримкою)
- Перевірте що ID правильний: `G-BZYJHJKSXR`

---

## ✅ Чеклист успішного деплою

- [ ] Код завантажений на GitHub
- [ ] Проект імпортований у Vercel
- [ ] Перший деплой пройшов успішно
- [ ] Домен fop-help.com доданий у Vercel
- [ ] DNS налаштовані (A запис або nameservers)
- [ ] SSL активний (🔒 в браузері)
- [ ] Sitemap доступний: /sitemap.xml
- [ ] Google Search Console налаштований
- [ ] Google Analytics отримує дані
- [ ] Мобільна версія працює

**Після всіх чекбоксів - ВСЕ ГОТОВО! 🎉**

---

## 📊 Що далі?

1. **Моніторинг:** Vercel Analytics + Google Search Console
2. **Контент:** Додавайте нові статті в блог (git push → автодеплой)
3. **SEO:** Просування через backlinks та соцмережі
4. **Монетизація:** Додайте партнерські посилання банків

**Сайт працює 24/7 безкоштовно на CDN по всьому світу!** 🚀
