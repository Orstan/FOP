import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Список тем для генерації статей про ФОП
interface BlogTopic {
  title: string;
  keywords: string[];
  category: string;
  context?: string;
}

const blogTopics: BlogTopic[] = [
  {
    title: "Додаткова винагорода 10 000 грн військовослужбовцям (роз'яснення наказу МОУ №232)",
    keywords: ["10 000 грн військовим", "додаткова винагорода", "наказ 232", "виплати ЗСУ", "роз'яснення 10000"],
    category: "Військове право",
    context: "Виплата 10 000 грн згідно з наказом МОУ №232 НЕ виплачується за час лікування, ВЛК або звільнення від обов'язків за станом здоров'я. Курсантам під час базової підготовки в навчальних центрах не виплачується (але виплачується, якщо підготовка проходить безпосередньо у бригаді). Не виплачується після СЗЧ, поки військовий у розпорядженні командира. Виплачується під час одиночних відряджень. Виплата оформлюється рапортом командира підрозділу, копії документів додавати не обов'язково."
  },
  {
    title: "Як ФОП перейти на загальну систему оподаткування у 2026 році",
    keywords: ["ФОП перехід на загальну систему", "загальна система оподаткування ФОП"],
    category: "Податки"
  },
  {
    title: "Податки для ІТ ФОП у 2026 році: що змінилося",
    keywords: ["податки ІТ ФОП", "ФОП 3 група ІТ", "податки програмістів"],
    category: "Податки"
  },
  {
    title: "ЄСВ для ФОП 2026: хто може не платити під час воєнного стану",
    keywords: ["ЄСВ 2026", "сплата ЄСВ ФОП", "скасування ЄСВ"],
    category: "Податки"
  },
  {
    title: "Військовий збір для ФОП: ставки та правила сплати 2026",
    keywords: ["військовий збір ФОП", "оплата військового збору"],
    category: "Податки"
  },
  {
    title: "Як повернути помилково сплачені податки ФОП",
    keywords: ["повернення податків ФОП", "помилкова сплата ЄСВ"],
    category: "Податки"
  },
  {
    title: "Як отримати витяг з реєстру платників єдиного податку онлайн",
    keywords: ["витяг єдиного податку", "реєстр платників ЄП онлайн"],
    category: "Документи"
  },
  {
    title: "Штрафи за несвоєчасну сплату ЄСВ та ЄП у 2026 році",
    keywords: ["штрафи ФОП", "пеня за несплату податків"],
    category: "Податки"
  },
  {
    title: "Як правильно оформити договір з фрілансером (ФОП)",
    keywords: ["договір з фрілансером", "ФОП договір надання послуг"],
    category: "Документи"
  },
  {
    title: "ЗЕД контракт для ФОП: зразок та вимоги 2026",
    keywords: ["ЗЕД контракт ФОП", "зовнішньоекономічна діяльність ФОП"],
    category: "Міжнародний бізнес"
  },
  {
    title: "Акти наданих послуг для ФОП: коли вони обов'язкові",
    keywords: ["акт наданих послуг", "первинна документація ФОП"],
    category: "Бухгалтерія"
  },
  {
    title: "Первинна документація ФОП 2026: що перевіряє податкова",
    keywords: ["документи ФОП", "перевірка податкової ФОП"],
    category: "Бухгалтерія"
  },
  {
    title: "Як ФОП приймати оплату з-за кордону: Payoneer, PaySera, Wise",
    keywords: ["Payoneer ФОП", "Wise для ФОП", "оплата з-за кордону"],
    category: "Міжнародний бізнес"
  },
  {
    title: "SWIFT-перекази для ФОП: валютний контроль 2026",
    keywords: ["SWIFT ФОП", "валютний контроль 2026"],
    category: "Міжнародний бізнес"
  },
  {
    title: "Як ФОП вивести валюту на особисту картку: законні способи",
    keywords: ["вивід валюти ФОП", "зняття валюти з рахунку ФОП"],
    category: "Фінанси"
  },
  {
    title: "Лізинг для ФОП: як взяти авто для бізнесу",
    keywords: ["лізинг для ФОП", "авто в лізинг на ФОП"],
    category: "Фінанси"
  },
  {
    title: "Як ФОП отримати грант від Дії: програма 'Власна справа'",
    keywords: ["грант Дія", "Власна справа грант"],
    category: "Фінанси"
  },
  {
    title: "Мікрогранти для ветеранів на відкриття бізнесу (ФОП) 2026",
    keywords: ["гранти для ветеранів", "бізнес для УБД"],
    category: "Фінанси"
  },
  {
    title: "Як змінити КВЕД ФОП онлайн через Дію",
    keywords: ["зміна КВЕД онлайн", "як додати КВЕД в Дії"],
    category: "Документи"
  },
  {
    title: "Які КВЕДи заборонені для ФОП на спрощеній системі 2026",
    keywords: ["заборонені КВЕД ФОП", "ФОП 2 група заборонені види діяльності"],
    category: "Юридичні питання"
  },
  {
    title: "Чи може ФОП працювати без печатки у 2026 році",
    keywords: ["печатка ФОП", "робота без печатки"],
    category: "Документи"
  },
  {
    title: "РРО для ФОП 2 групи: винятки та правила",
    keywords: ["РРО ФОП 2 група", "касовий апарат для 2 групи"],
    category: "Обладнання"
  },
  {
    title: "Як зареєструвати ПРРО Checkbox або Вчасно для ФОП",
    keywords: ["реєстрація ПРРО", "ПРРО Checkbox ФОП"],
    category: "Обладнання"
  },
  {
    title: "Еквайринг для інтернет-магазину ФОП: WayForPay, LiqPay, Mono",
    keywords: ["еквайринг для ФОП", "підключення LiqPay ФОП"],
    category: "Бізнес"
  },
  {
    title: "Дропшипінг ФОП 2026: як правильно вести облік та платити податки",
    keywords: ["дропшипінг ФОП", "податки з дропшипінгу"],
    category: "Бізнес"
  },
  {
    title: "Продаж товарів через Instagram та маркетплейси: як легалізувати",
    keywords: ["ФОП інстаграм", "продаж товарів в інтернеті ФОП"],
    category: "Бізнес"
  },
  {
    title: "Реклама у блогерів: як ФОП правильно оформити витрати",
    keywords: ["витрати на рекламу ФОП", "договір з блогером"],
    category: "Бухгалтерія"
  },
  {
    title: "Мобілізація ФОП 2026: що робити з податками та бізнесом",
    keywords: ["мобілізація ФОП", "податки мобілізованого ФОП"],
    category: "Військове право"
  },
  {
    title: "Бронювання працівників ФОП: чи можливо у 2026 році",
    keywords: ["бронювання працівників ФОП", "бронювання від мобілізації"],
    category: "Військове право"
  },
  {
    title: "Військовий облік для ФОП: нові правила та штрафи",
    keywords: ["військовий облік ФОП", "штрафи за військовий облік"],
    category: "Військове право"
  },
  {
    title: "Допомога сім'ям загиблих військовослужбовців: виплати 2026",
    keywords: ["виплати сім'ям загиблих", "компенсація за загиблого"],
    category: "Військове право"
  },
  {
    title: "Грошове забезпечення військових ЗСУ 2026: огляд зарплат та премій",
    keywords: ["зарплата ЗСУ 2026", "премії військовослужбовцям"],
    category: "Військове право"
  },
  {
    title: "Статус УБД для ФОП: пільги на податки та ведення бізнесу",
    keywords: ["пільги УБД ФОП", "статус УБД підприємцям"],
    category: "Військове право"
  },
  {
    title: "Компенсація за працевлаштування ВПО та ветеранів у 2026 році",
    keywords: ["компенсація за ВПО", "працевлаштування ветеранів ФОП"],
    category: "Кадри"
  },
  {
    title: "Відпустка для мобілізованих ФОП: збереження стажу",
    keywords: ["відпустка мобілізованих", "стаж для ФОП ЗСУ"],
    category: "Військове право"
  },
  {
    title: "Чи може військовослужбовець відкрити ФОП у 2026 році",
    keywords: ["ФОП для військового", "бізнес військовослужбовця"],
    category: "Військове право"
  },
  {
    title: "Як призупинити діяльність ФОП під час служби в ЗСУ",
    keywords: ["призупинення ФОП ЗСУ", "заморозити ФОП"],
    category: "Військове право"
  },
  {
    title: "Податкова перевірка ФОП 2026: мораторій та винятки",
    keywords: ["податкова перевірка ФОП", "мораторій на перевірки 2026"],
    category: "Податки"
  },
  {
    title: "Запит від податкової про надання пояснень: як відповідати ФОП",
    keywords: ["запит податкової", "пояснення для ДПС"],
    category: "Юридичні питання"
  },
  {
    title: "Блокування рахунків ФОП фінмоніторингом: причини та як розблокувати",
    keywords: ["фінмоніторинг ФОП", "блокування рахунку банку"],
    category: "Фінанси"
  },
  {
    title: "Арешт рахунків ФОП виконавчою службою у 2026 році",
    keywords: ["арешт рахунку ФОП", "виконавча служба блокування"],
    category: "Юридичні питання"
  },
  {
    title: "Ліквідація ФОП з боргами: чи можливо і які наслідки",
    keywords: ["закриття ФОП з боргами", "ліквідація ФОП 2026"],
    category: "Юридичні питання"
  },
  {
    title: "РРО для ФОП 2026: кому потрібен обов'язково та які штрафи",
    keywords: ["РРО ФОП", "касовий апарат", "штрафи РРО", "ПРРО"],
    category: "Обладнання"
  },
  {
    title: "ФОП та волонтерство 2026: як допомагати ЗСУ легально",
    keywords: ["ФОП волонтер", "допомога ЗСУ від ФОП", "податки волонтерство"],
    category: "Юридичні питання"
  },
  {
    title: "Декретні виплати для ФОП 2026: як оформити та отримати",
    keywords: ["декретні ФОП", "допомога по вагітності ФОП", "соціальні виплати"],
    category: "Фінанси"
  },
  {
    title: "Як закрити ФОП онлайн через Дію у 2026 році",
    keywords: ["закриття ФОП", "закрити ФОП Дія", "ліквідація ФОП онлайн"],
    category: "Документи"
  },
  {
    title: "Штрафи для ФОП у 2026 році: за що можуть покарати",
    keywords: ["штрафи ФОП", "податкові перевірки", "фінансова відповідальність ФОП"],
    category: "Податки"
  }
];

// Шаблон для генерації статті у форматі JSX
const generateBlogPostPrompt = (topic: BlogTopic) => `
Створи SEO-оптимізовану статтю для блогу про ФОП (фізичні особи-підприємці) в Україні.

Тема: ${topic.title}
Категорія: ${topic.category}
Ключові слова: ${topic.keywords.join(', ')}${topic.context ? '\n\nДодатковий контекст (обов\'язково використай ці факти у статті):\n' + topic.context : ''}

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
