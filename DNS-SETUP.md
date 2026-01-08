# 🌐 Налаштування DNS для fop-help.com

## ✅ Що вже налаштовано в коді

1. **Google Analytics:** `G-BZYJHJKSXR` ✅
2. **Google Site Verification:** `-3SuFo8zlyvnn6FJbSiIJ68_3BAM3a8p9q7BG0BTl1o` ✅

---

## 📋 Що потрібно зробити в DNS (GoDaddy/nic.ua/інший провайдер)

### 1. Google Search Console Verification

**Додайте TXT запис:**

```
Тип запису: TXT
Хост: @ (або fop-help.com)
Значення: google-site-verification=-3SuFo8zlyvnn6FJbSiIJ68_3BAM3a8p9q7BG0BTl1o
TTL: 3600 (або Auto)
```

**Після додавання:**
1. Почекайте 5-15 хвилин (поширення DNS)
2. Поверніться в Google Search Console
3. Натисніть "Підтвердити"

---

### 2. Основні DNS записи для сайту

**A запис (для основного домену):**
```
Тип: A
Хост: @
Значення: [IP вашого хостингу]
TTL: 3600
```

**CNAME для www:**
```
Тип: CNAME
Хост: www
Значення: fop-help.com
TTL: 3600
```

---

### 3. Для Netlify (якщо використовуєте)

**Netlify DNS налаштування:**

1. **Основний домен:**
```
Тип: A
Хост: @
Значення: 75.2.60.5
```

2. **WWW:**
```
Тип: CNAME
Хост: www
Значення: [ваш-сайт].netlify.app
```

3. **SSL сертифікат:**
   - Netlify автоматично видасть Let's Encrypt SSL
   - Через 1-2 години сайт буде доступний по HTTPS

---

### 4. Для Vercel (якщо використовуєте)

**Vercel DNS налаштування:**

1. **Додайте домен в Vercel Dashboard:**
   - Project Settings → Domains
   - Введіть `fop-help.com`

2. **Vercel покаже вам DNS записи:**
```
Тип: A
Значення: 76.76.21.21
```

3. **SSL:**
   - Автоматично від Vercel
   - Підтримка HTTP/2

---

## 🔍 Перевірка після налаштування

### 1. Перевірте DNS поширення:
```bash
nslookup fop-help.com
```

Або онлайн: https://dnschecker.org/

### 2. Перевірте Google Verification:
1. https://search.google.com/search-console
2. Додайте property для fop-help.com
3. Підтвердіть через TXT запис

### 3. Перевірте SSL:
```
https://fop-help.com
```

Має показувати 🔒 замок в браузері

---

## ⏱️ Терміни

- **DNS поширення:** 5-60 хвилин (зазвичай 15 хв)
- **SSL сертифікат:** 1-2 години (автоматично)
- **Google indexing:** 24-48 годин після верифікації

---

## 📊 Після запуску - Google Search Console

1. **Відправте sitemap:**
   ```
   https://fop-help.com/sitemap.xml
   ```

2. **Запитайте індексацію:**
   - URL Inspection → Request Indexing
   - Для головної сторінки та ключових сторінок

3. **Моніторинг:**
   - Performance (позиції в пошуку)
   - Coverage (проіндексовані сторінки)
   - Enhancements (Rich Snippets)

---

## ✅ Чеклист запуску

- [ ] DNS A запис додано
- [ ] CNAME для www додано
- [ ] Google TXT verification додано
- [ ] Почекав 15 хв (DNS поширення)
- [ ] Google Search Console підтверджено
- [ ] Sitemap відправлено в GSC
- [ ] SSL працює (https://)
- [ ] Сайт доступний на fop-help.com
- [ ] Google Analytics отримує дані

**Після всіх чекбоксів - сайт повністю готовий! 🚀**
