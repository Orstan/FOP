import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCityBySlug, getAllCitySlugs } from '@/lib/cities-data';
import { getBlogTopicBySlug, getAllBlogTopicSlugs } from '@/lib/blog-topics-data';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, ArrowRight, BookOpen } from 'lucide-react';

interface BlogCityPageProps {
  params: Promise<{ topic: string; city: string }>;
}

// Генеруємо тільки найпопулярніші комбінації під час build
// Решта згенерується on-demand (ISR)
export async function generateStaticParams() {
  const popularCities = ['kyiv', 'lviv', 'kharkiv', 'odesa', 'dnipro'];
  const topicSlugs = getAllBlogTopicSlugs();
  
  const params = [];
  for (const topicSlug of topicSlugs) {
    for (const citySlug of popularCities) {
      params.push({
        topic: topicSlug,
        city: citySlug,
      });
    }
  }
  
  return params;
}

// Увімкнути ISR з revalidation кожні 30 днів
export const revalidate = 2592000;
// Дозволити динамічну генерацію для інших міст
export const dynamicParams = true;

export async function generateMetadata({ params }: BlogCityPageProps): Promise<Metadata> {
  const { topic, city } = await params;
  const cityData = getCityBySlug(city);
  const topicData = getBlogTopicBySlug(topic);

  if (!cityData || !topicData) {
    return {
      title: 'Сторінка не знайдена',
    };
  }

  const title = `${topicData.title} у ${cityData.name} 2026 - Повний гід для підприємців | ФОП Помічник`;
  const description = `${topicData.description} Актуальна інформація для підприємців ${cityData.name}, ${cityData.region}. Експертні поради, інструкції, приклади.`;

  return {
    title,
    description,
    keywords: [
      ...topicData.keywords,
      `${cityData.name}`,
      `фоп ${cityData.name}`,
      `підприємець ${cityData.name}`,
      cityData.region,
      'україна 2026',
    ],
    alternates: {
      canonical: `/blog/${topic}-${city}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      locale: 'uk_UA',
      url: `/blog/${topic}-${city}`,
      siteName: 'ФОП Помічник',
      publishedTime: '2026-01-14T00:00:00Z',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogCityPage({ params }: BlogCityPageProps) {
  const { topic, city } = await params;
  const cityData = getCityBySlug(city);
  const topicData = getBlogTopicBySlug(topic);

  if (!cityData || !topicData) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${topicData.title} у ${cityData.name}`,
    description: topicData.description,
    author: {
      '@type': 'Organization',
      name: 'ФОП Помічник',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ФОП Помічник',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fop-help.com/og-image.png',
      },
    },
    datePublished: '2026-01-14',
    dateModified: '2026-01-14',
    articleSection: topicData.category,
    keywords: topicData.keywords.join(', '),
    locationCreated: {
      '@type': 'City',
      name: cityData.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="flex-1">
        <article>
          <header className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Link href="/" className="hover:text-primary transition-colors">Головна</Link>
                  <span>→</span>
                  <Link href="/blog" className="hover:text-primary transition-colors">Блог</Link>
                  <span>→</span>
                  <Link href={`/cities/${city}`} className="hover:text-primary transition-colors">{cityData.name}</Link>
                  <span>→</span>
                  <span className="text-foreground">{topicData.title}</span>
                </nav>

                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {topicData.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{cityData.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Січень 2026</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {topicData.emoji} {topicData.title} у {cityData.name}
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground">
                  {topicData.description}
                </p>
              </div>
            </div>
          </header>

          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <h2>Вступ</h2>
                  <p className="lead">
                    Якщо ви підприємець у місті <strong>{cityData.name}</strong> ({cityData.region}) або плануєте 
                    відкрити тут ФОП, ця стаття допоможе вам розібратися з усіма нюансами теми 
                    "{topicData.title.toLowerCase()}". Ми підготували актуальну інформацію на 2026 рік 
                    спеціально для жителів {cityData.name}.
                  </p>

                  <h2>Особливості для підприємців {cityData.name}</h2>
                  <p>
                    <strong>{cityData.name}</strong> — {cityData.description} з населенням {cityData.population.toLocaleString('uk-UA')} осіб. 
                    Місто розташоване в {cityData.region} і пропонує сприятливі умови для розвитку підприємництва.
                  </p>

                  <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg my-8">
                    <h3 className="mt-0 mb-3">💡 Ключова інформація</h3>
                    <ul className="mb-0">
                      <li><strong>Місто:</strong> {cityData.name}, {cityData.region}</li>
                      <li><strong>Населення:</strong> {cityData.population.toLocaleString('uk-UA')} осіб</li>
                      <li><strong>Тема:</strong> {topicData.title}</li>
                      <li><strong>Категорія:</strong> {topicData.category}</li>
                      <li><strong>Актуальність:</strong> 2026 рік</li>
                    </ul>
                  </div>

                  <h2>Детальний розбір теми</h2>
                  <p>
                    {topicData.description} Для підприємців {cityData.name} це особливо актуально, 
                    оскільки місто активно розвивається і потребує кваліфікованих фахівців у різних галузях.
                  </p>

                  <h3>Актуальність для {cityData.name}</h3>
                  <p>
                    У {cityData.name} станом на 2026 рік працюють тисячі підприємців, які стикаються 
                    з подібними питаннями. Місцева податкова служба та бізнес-спільнота активно підтримують 
                    розвиток малого та середнього підприємництва.
                  </p>

                  <h3>Практичні поради для підприємців {cityData.name}</h3>
                  <ul>
                    <li>📍 Враховуйте специфіку регіону та місцевого ринку</li>
                    <li>📞 Консультуйтеся з місцевою податковою службою {cityData.region}</li>
                    <li>💼 Використовуйте онлайн-сервіси для спрощення роботи</li>
                    <li>🤝 Спілкуйтеся з іншими підприємцями міста для обміну досвідом</li>
                    <li>📚 Слідкуйте за змінами в законодавстві України</li>
                  </ul>

                  <h2>Покрокова інструкція</h2>
                  <p>
                    Ми підготували детальну покрокову інструкцію для підприємців {cityData.name}, 
                    яка допоможе вам успішно вирішити всі питання, пов'язані з темою "{topicData.title.toLowerCase()}".
                  </p>

                  <ol>
                    <li>
                      <strong>Аналіз ситуації</strong> — оцініть свою поточну ситуацію та потреби 
                      як підприємця у {cityData.name}
                    </li>
                    <li>
                      <strong>Збір інформації</strong> — вивчіть актуальне законодавство та вимоги 
                      для вашого регіону
                    </li>
                    <li>
                      <strong>Підготовка документів</strong> — підготуйте всі необхідні документи 
                      та дані для оформлення
                    </li>
                    <li>
                      <strong>Звернення до органів</strong> — за потреби зверніться до податкової 
                      служби {cityData.region}
                    </li>
                    <li>
                      <strong>Виконання процедур</strong> — виконайте всі необхідні дії згідно 
                      з інструкцією
                    </li>
                    <li>
                      <strong>Контроль та моніторинг</strong> — регулярно перевіряйте виконання 
                      та коригуйте за потреби
                    </li>
                  </ol>

                  <div className="bg-muted p-6 rounded-lg my-8">
                    <h3 className="mt-0 mb-3">🎯 Корисні інструменти для підприємців {cityData.name}</h3>
                    <p className="mb-4">
                      Наш сайт пропонує безкоштовні інструменти, які допоможуть вам ефективно 
                      вирішувати повсякденні завдання підприємця:
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <Link href="/calculators/fop-tax" className="block p-3 bg-background rounded border hover:border-primary transition-colors">
                        💰 Калькулятор податків ФОП
                      </Link>
                      <Link href="/calculators/esv" className="block p-3 bg-background rounded border hover:border-primary transition-colors">
                        🏥 Розрахунок ЄСВ
                      </Link>
                      <Link href="/documents/contract" className="block p-3 bg-background rounded border hover:border-primary transition-colors">
                        📄 Конструктор договорів
                      </Link>
                      <Link href="/documents/act" className="block p-3 bg-background rounded border hover:border-primary transition-colors">
                        📋 Генератор актів
                      </Link>
                    </div>
                  </div>

                  <h2>Типові помилки та як їх уникнути</h2>
                  <p>
                    Підприємці {cityData.name} часто стикаються з певними помилками при роботі 
                    з темою "{topicData.title.toLowerCase()}". Давайте розглянемо найпоширеніші з них:
                  </p>

                  <ul>
                    <li>
                      <strong>Помилка №1:</strong> Несвоєчасне ознайомлення зі змінами в законодавстві. 
                      <em>Рішення:</em> Регулярно відвідуйте офіційні сайти та читайте експертні блоги.
                    </li>
                    <li>
                      <strong>Помилка №2:</strong> Неправильне оформлення документів. 
                      <em>Рішення:</em> Використовуйте перевірені шаблони та конструктори документів.
                    </li>
                    <li>
                      <strong>Помилка №3:</strong> Ігнорування термінів та дедлайнів. 
                      <em>Рішення:</em> Ведіть календар важливих дат та налаштуйте нагадування.
                    </li>
                  </ul>

                  <h2>Локальна підтримка для підприємців</h2>
                  <p>
                    У {cityData.name} та {cityData.region} діють різні програми підтримки підприємництва. 
                    Ви можете звернутися до:
                  </p>

                  <ul>
                    <li>Місцеве відділення Державної податкової служби</li>
                    <li>Центр підтримки підприємництва (якщо є у вашому регіоні)</li>
                    <li>Торгово-промислова палата {cityData.region}</li>
                    <li>Бізнес-асоціації та спілки підприємців міста</li>
                    <li>Онлайн-спільноти підприємців України</li>
                  </ul>

                  <h2>Висновки</h2>
                  <p>
                    Тема "{topicData.title.toLowerCase()}" є важливою для кожного підприємця {cityData.name}. 
                    Правильне розуміння всіх нюансів допоможе вам ефективно вести бізнес, уникати 
                    помилок та штрафів, а також використовувати всі можливості для розвитку.
                  </p>

                  <p>
                    Пам'ятайте, що законодавство постійно змінюється, тому важливо регулярно 
                    оновлювати свої знання та консультуватися з експертами. Наш сайт завжди надає 
                    актуальну інформацію станом на 2026 рік.
                  </p>
                </div>

                <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <ArrowRight className="h-5 w-5" />
                    Що далі?
                  </h3>
                  <p className="mb-4">
                    Використовуйте наші безкоштовні інструменти та читайте інші корисні статті 
                    для підприємців {cityData.name}.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href={`/cities/${city}`}>
                      <Button variant="outline">
                        <MapPin className="h-4 w-4 mr-2" />
                        Всі послуги для {cityData.name}
                      </Button>
                    </Link>
                    <Link href="/blog">
                      <Button variant="outline">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Інші статті блогу
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
