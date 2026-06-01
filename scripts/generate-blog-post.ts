import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Список тем для генерації статей про ФОП
const blogTopics = [
  {
    title: "Як ФОП працювати з іноземними клієнтами у 2026",
    keywords: ["ФОП іноземні клієнти", "міжнародні платежі ФОП", "експорт послуг ФОП"],
    category: "Міжнародний бізнес"
  },
  {
    title: "Податкові канікули для ФОП 2026: Умови та переваги",
    keywords: ["податкові канікули ФОП", "пільги для ФОП", "звільнення від податків"],
    category: "Податки"
  },
  {
    title: "Як ФОП отримати кредит на розвиток бізнесу",
    keywords: ["кредит для ФОП", "бізнес-кредитування", "фінансування ФОП"],
    category: "Фінанси"
  },
  {
    title: "Страхування для ФОП: Види та необхідність у 2026",
    keywords: ["страхування ФОП", "медичне страхування підприємця", "страхування бізнесу"],
    category: "Страхування"
  },
  {
    title: "Як ФОП наймати працівників: Покрокова інструкція",
    keywords: ["найм працівників ФОП", "трудові договори", "зарплата працівників ФОП"],
    category: "Кадри"
  },
  {
    title: "Електронний підпис для ФОП: Як отримати та використовувати",
    keywords: ["ЕЦП для ФОП", "електронний підпис", "цифровий підпис підприємця"],
    category: "Документи"
  },
  {
    title: "ФОП на патенті 2026: Хто може та як перейти",
    keywords: ["патент для ФОП", "патентна система", "спрощена система"],
    category: "Податки"
  },
  {
    title: "Як ФОП вести облік доходів та витрат",
    keywords: ["облік ФОП", "книга обліку доходів", "бухгалтерія для підприємця"],
    category: "Бухгалтерія"
  },
  {
    title: "Франшиза для ФОП: Як відкрити бізнес за франшизою",
    keywords: ["франшиза ФОП", "бізнес за франшизою", "купити франшизу"],
    category: "Бізнес"
  },
  {
    title: "Як ФОП платити аліменти: Розрахунок та нюанси",
    keywords: ["аліменти ФОП", "розрахунок аліментів", "виплата аліментів підприємцем"],
    category: "Юридичні питання"
  },
  {
    title: "Онлайн-каси для ФОП 2026: Вибір та підключення",
    keywords: ["онлайн-каса ФОП", "програмний РРО", "електронна каса"],
    category: "Обладнання"
  },
  {
    title: "Як ФОП отримати субсидію від держави",
    keywords: ["субсидії для ФОП", "державна підтримка бізнесу", "гранти для підприємців"],
    category: "Фінанси"
  },
  {
    title: "ФОП та криптовалюта: Як легально працювати з крипто",
    keywords: ["ФОП криптовалюта", "оподаткування криптовалюти", "крипто бізнес"],
    category: "Фінанси"
  },
  {
    title: "Як ФОП відкрити інтернет-магазин: Покрокова інструкція",
    keywords: ["інтернет-магазин ФОП", "онлайн-торгівля", "e-commerce для ФОП"],
    category: "Бізнес"
  },
  {
    title: "Бухгалтерські програми для ФОП 2026: Огляд та порівняння",
    keywords: ["програми для ФОП", "бухгалтерське ПЗ", "автоматизація обліку"],
    category: "Бухгалтерія"
  },
];

// Шаблон для генерації статті у форматі JSX
const generateBlogPostPrompt = (topic: typeof blogTopics[0]) => `
Створи SEO-оптимізовану статтю для блогу про ФОП (фізичні особи-підприємці) в Україні.

Тема: ${topic.title}
Категорія: ${topic.category}
Ключові слова: ${topic.keywords.join(', ')}

ВАЖЛИВО: Стаття має бути у форматі JSX (React) з HTML-тегами. НЕ використовуй Markdown!

Формат відповіді - ТІЛЬКИ JSX код (без блоків коду, без коментарів, без пояснень).
Використовуй ТІЛЬКИ такі HTML-теги:
- <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6"> для заголовків секцій
- <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4"> для підзаголовків
- <p className="text-gray-700 dark:text-gray-300 mb-4"> для абзаців
- <ul className="space-y-2 mb-6"> та <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span> для списків
- <strong> для жирного тексту
- <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg"> для блоків-порад
- <div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg"> для попереджень

Структура статті:
1. Вступний абзац (2-3 речення, що пояснюють тему)
2. 4-6 основних секцій з h2 заголовками
3. Практичні поради та покрокові інструкції
4. Переваги та недоліки (якщо застосовно)
5. Висновок

Вимоги до контенту:
- Обсяг: 1500-2000 слів
- Мова: українська
- Актуальна інформація на 2026 рік
- Практичні поради для підприємців
- Природне використання ключових слів
- НЕ використовуй символи > та < в тексті (тільки в тегах). Замість > пиши &gt; а замість < пиши &lt;
- НЕ використовуй лапки " в тексті, пиши &laquo; та &raquo;
- className атрибути мають бути саме такими як показано вище
- Кожен тег має бути правильно закритий
- НЕ додавай посилання на зовнішні сайти

Надай ТІЛЬКИ JSX код без огортання у блоки коду.
`;

// Функція для генерації slug зі заголовка
function generateSlug(title: string): string {
  const translitMap: { [key: string]: string } = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e', 'є': 'ye',
    'ж': 'zh', 'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'yi', 'й': 'y', 'к': 'k', 'л': 'l',
    'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ь': '', 'ю': 'yu',
    'я': 'ya'
  };

  return title
    .toLowerCase()
    .split('')
    .map(char => translitMap[char] || char)
    .join('')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 60);
}

// Функція для витягування description з контенту (перший абзац тексту)
function extractDescription(content: string): string {
  // Шукаємо текст в першому <p> тезі
  const match = content.match(/<p[^>]*>([^<]+)<\/p>/);
  if (match && match[1]) {
    return match[1].replace(/&laquo;/g, '"').replace(/&raquo;/g, '"').replace(/&gt;/g, '>').replace(/&lt;/g, '<').substring(0, 155);
  }
  // Fallback: беремо перші 155 символів без HTML тегів
  return content.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().substring(0, 155);
}

// Функція для створення React компонента статті
function createBlogPostComponent(
  title: string,
  slug: string,
  content: string,
  keywords: string[],
  category: string,
  readTime: string
): string {
  const description = extractDescription(content).replace(/"/g, '\\"').replace(/\n/g, ' ');
  const dateStr = new Date().toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' });
  
  return `import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "${title} | ФОП Помічник 2026",
  description: "${description}",
  keywords: [
    ${keywords.map(k => `"${k}"`).join(',\n    ')}
  ],
  openGraph: {
    title: "${title}",
    description: "${description}",
    type: "article",
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium no-underline"
            >
              &larr; Назад до блогу
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            ${title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: ${dateStr}</time>
            <span>&bull;</span>
            <span>Читання: ${readTime}</span>
          </div>

          ${content}

          <div className="grid md:grid-cols-2 gap-4 not-prose mt-12">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle>Інші статті</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/blog">
                    Всі статті блогу
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle>Калькулятори</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/calculators">
                    Розрахувати податки
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </article>
      </main>
    </div>
  );
}
`;
}

// Функція для отримання списку вже існуючих slug-ів
function getExistingSlugs(): string[] {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  if (!fs.existsSync(blogDir)) return [];
  return fs.readdirSync(blogDir).filter(item => {
    const itemPath = path.join(blogDir, item);
    return fs.statSync(itemPath).isDirectory() && item !== 'page.tsx';
  });
}

// Основна функція генерації статті
async function generateBlogPost() {
  try {
    // Отримуємо існуючі slug-и
    const existingSlugs = getExistingSlugs();
    console.log(`📂 Існуючих статей: ${existingSlugs.length}`);

    // Фільтруємо теми — тільки ті, для яких ще не створено статтю
    const availableTopics = blogTopics.filter(topic => {
      const slug = generateSlug(topic.title);
      return !existingSlugs.includes(slug);
    });

    if (availableTopics.length === 0) {
      console.log('⚠️ Всі теми вже використані! Додайте нові теми до списку.');
      return { success: false, reason: 'no_topics' };
    }

    console.log(`📋 Доступних тем: ${availableTopics.length}`);

    // Вибираємо випадкову тему з доступних
    const randomTopic = availableTopics[Math.floor(Math.random() * availableTopics.length)];
    console.log(`🎯 Генеруємо статтю: ${randomTopic.title}`);

    // Генеруємо контент через OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Ти експерт з українського законодавства для підприємців (ФОП). Генеруєш статті виключно у форматі JSX з HTML-тегами. НІКОЛИ не використовуй Markdown синтаксис (# ## ### - * і т.д.). Завжди повертай тільки валідний JSX код з className атрибутами."
        },
        {
          role: "user",
          content: generateBlogPostPrompt(randomTopic)
        }
      ],
      temperature: 0.7,
      max_tokens: 4000,
    });

    let content = completion.choices[0].message.content || '';
    // Очищуємо від можливих markdown code block маркерів
    content = content.replace(/^```[a-z]*\n?/gm, '').replace(/```$/gm, '').trim();
    // Видаляємо будь-які markdown заголовки якщо AI все ж їх додав
    content = content.replace(/^#{1,6}\s+.+$/gm, '');
    console.log(`✅ Контент згенеровано (${content.length} символів)`);

    // Створюємо slug та директорію
    const slug = generateSlug(randomTopic.title);
    const blogDir = path.join(process.cwd(), 'app', 'blog', slug);

    // Повторна перевірка на випадок race condition (два паралельні запуски)
    if (fs.existsSync(path.join(blogDir, 'page.tsx'))) {
      console.log(`⚠️ Стаття з slug '${slug}' вже існує. Пропускаємо.`);
      return { success: false, reason: 'already_exists', slug };
    }
    
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true });
    }

    // Оцінюємо час читання (приблизно 200 слів на хвилину)
    const wordCount = content.split(/\s+/).length;
    const readTime = `${Math.ceil(wordCount / 200)} хв`;

    // Створюємо файл компонента
    const componentCode = createBlogPostComponent(
      randomTopic.title,
      slug,
      content,
      randomTopic.keywords,
      randomTopic.category,
      readTime
    );

    const pagePath = path.join(blogDir, 'page.tsx');
    fs.writeFileSync(pagePath, componentCode, 'utf-8');
    console.log(`📝 Створено файл: ${pagePath}`);

    // Оновлюємо список блогів
    await updateBlogList(randomTopic, slug, readTime);

    // Оновлюємо sitemap
    await updateSitemap(slug);

    console.log(`🎉 Стаття успішно створена: /blog/${slug}`);
    return { success: true, slug, title: randomTopic.title };

  } catch (error) {
    console.error('❌ Помилка генерації статті:', error);
    throw error;
  }
}

// Функція оновлення списку блогів
async function updateBlogList(topic: typeof blogTopics[0], slug: string, readTime: string) {
  const blogPagePath = path.join(process.cwd(), 'app', 'blog', 'page.tsx');
  let content = fs.readFileSync(blogPagePath, 'utf-8');

  const today = new Date().toISOString().split('T')[0];
  const newArticle = `    {
      title: "${topic.title}",
      description: "${topic.keywords[0]} - детальний гайд для підприємців",
      slug: "${slug}",
      date: "${today}",
      readTime: "${readTime}",
      category: "${topic.category}",
      available: true,
    },`;

  // Перевіряємо чи стаття вже є в списку
  if (content.includes(`slug: "${slug}"`)) {
    console.log(`⚠️ Стаття '${slug}' вже є в списку блогів. Пропускаємо.`);
    return;
  }

  // Вставляємо нову статтю на початок масиву articles
  content = content.replace(
    /const articles = \[/,
    `const articles = [\n${newArticle}`
  );

  fs.writeFileSync(blogPagePath, content, 'utf-8');
  console.log('✅ Оновлено список блогів');
}

// Функція оновлення sitemap
async function updateSitemap(slug: string) {
  const sitemapPath = path.join(process.cwd(), 'app', 'sitemap.ts');
  let content = fs.readFileSync(sitemapPath, 'utf-8');

  // Перевіряємо чи slug вже є в sitemap
  if (content.includes(`'${slug}'`)) {
    console.log(`⚠️ Slug '${slug}' вже є в sitemap. Пропускаємо.`);
    return;
  }

  // Додаємо новий slug на початок масиву blogPosts
  content = content.replace(
    /const blogPosts = \[/,
    `const blogPosts = [\n    '${slug}',`
  );

  fs.writeFileSync(sitemapPath, content, 'utf-8');
  console.log('✅ Оновлено sitemap');
}

// Запуск генерації
if (require.main === module) {
  generateBlogPost()
    .then(result => {
      console.log('✨ Генерація завершена успішно!');
      process.exit(0);
    })
    .catch(error => {
      console.error('💥 Помилка:', error);
      process.exit(1);
    });
}

export { generateBlogPost, blogTopics };
