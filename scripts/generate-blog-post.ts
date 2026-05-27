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

// Шаблон для генерації статті
const generateBlogPostPrompt = (topic: typeof blogTopics[0]) => `
Створи детальну SEO-оптимізовану статтю для блогу про ФОП (фізичні особи-підприємці) в Україні.

Тема: ${topic.title}
Категорія: ${topic.category}
Ключові слова: ${topic.keywords.join(', ')}

Стаття має бути:
1. Обсягом 2000-2500 слів
2. Структурована з чіткими заголовками H2 та H3
3. Містити практичні поради та покрокові інструкції
4. Включати реальні приклади та цифри (актуальні на 2026 рік)
5. SEO-оптимізована з природним використанням ключових слів
6. Написана простою, зрозумілою мовою для підприємців
7. Містити таблиці, списки переваг/недоліків де це доречно

Структура статті:
- Вступ з коротким описом проблеми/теми
- Основні розділи з детальною інформацією
- Практичні поради та інструкції
- Переваги та недоліки (якщо застосовно)
- Висновок з підсумками
- Посилання на інші корисні статті блогу

Формат відповіді: надай ТІЛЬКИ текст статті українською мовою, без додаткових коментарів.
Стаття має бути готова до публікації та відповідати стилю існуючих статей на сайті fop-help.com.
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

// Функція для створення React компонента статті
function createBlogPostComponent(
  title: string,
  slug: string,
  content: string,
  keywords: string[],
  category: string,
  readTime: string
): string {
  const today = new Date().toISOString().split('T')[0];
  
  return `import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "${title} | ФОП Помічник 2026",
  description: "${content.substring(0, 155).replace(/"/g, '\\"')}...",
  keywords: [
    ${keywords.map(k => `"${k}"`).join(',\n    ')}
  ],
  openGraph: {
    title: "${title}",
    description: "${content.substring(0, 155).replace(/"/g, '\\"')}...",
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
              ← Назад до блогу
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            ${title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: ${new Date().toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span>•</span>
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

// Основна функція генерації статті
async function generateBlogPost() {
  try {
    // Вибираємо випадкову тему
    const randomTopic = blogTopics[Math.floor(Math.random() * blogTopics.length)];
    console.log(`🎯 Генеруємо статтю: ${randomTopic.title}`);

    // Генеруємо контент через OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: "Ти експерт з українського законодавства для підприємців (ФОП). Пишеш детальні, практичні статті простою мовою."
        },
        {
          role: "user",
          content: generateBlogPostPrompt(randomTopic)
        }
      ],
      temperature: 0.7,
      max_tokens: 4000,
    });

    const content = completion.choices[0].message.content || '';
    console.log(`✅ Контент згенеровано (${content.length} символів)`);

    // Створюємо slug та директорію
    const slug = generateSlug(randomTopic.title);
    const blogDir = path.join(process.cwd(), 'app', 'blog', slug);
    
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
