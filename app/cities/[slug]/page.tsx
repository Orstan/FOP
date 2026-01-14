import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCityBySlug, getAllCitySlugs, type CityData } from '@/lib/cities-data';
import { Button } from '@/components/ui/button';
import { Calculator, FileText, BookOpen, MapPin, Users, TrendingUp } from 'lucide-react';

interface CityPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return {
      title: 'Місто не знайдено',
    };
  }

  const title = `ФОП у ${city.name} - Калькулятори, Документи та Консультації для Підприємців 2026`;
  const description = `Безкоштовні послуги для ФОП у місті ${city.name}, ${city.region}. ⚡ Калькулятори податків ⚡ Конструктор договорів ⚡ Акти та рахунки ⚡ Експертні поради для підприємців. Населення: ${city.population.toLocaleString('uk-UA')} осіб.`;

  return {
    title,
    description,
    keywords: [
      `ФОП ${city.name}`,
      `підприємець ${city.name}`,
      `відкрити ФОП ${city.name}`,
      `податки ФОП ${city.name}`,
      `калькулятор податків ${city.name}`,
      `договір ${city.name}`,
      `ЄСВ ${city.name}`,
      `документи для бізнесу ${city.name}`,
      `${city.region}`,
      `бізнес ${city.name}`,
      `підприємництво ${city.name}`,
      `ФОП 3 група ${city.name}`,
      `єдиний податок ${city.name}`,
      `консультація підприємця ${city.name}`,
    ],
    alternates: {
      canonical: `/cities/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'uk_UA',
      url: `/cities/${slug}`,
      siteName: 'ФОП Помічник',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `ФОП Помічник - ${city.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `ФОП Помічник - ${city.name}`,
    description: `Безкоштовні послуги для підприємців у місті ${city.name}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.region,
      addressCountry: 'UA',
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      '@id': `https://www.wikidata.org/wiki/${city.name}`,
    },
    url: `https://fop-help.com/cities/${slug}`,
    image: 'https://fop-help.com/og-image.png',
    priceRange: 'Безкоштовно',
    serviceType: ['Калькулятори податків', 'Документи для бізнесу', 'Консультації'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="flex-1">
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4 text-primary">
                <MapPin className="h-8 w-8" />
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                ФОП у місті {city.name}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-2">
                {city.region}
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>Населення: {city.population.toLocaleString('uk-UA')}</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  <span>{city.description}</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                Безкоштовні інструменти та документи для підприємців міста {city.name}. 
                Калькулятори податків, конструктор договорів, експертні поради — все для вашого бізнесу.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Інструменти для ФОП у місті {city.name}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Калькулятори</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Розрахунок податків, ЄСВ, пені та відпускних для підприємців {city.name}
                </p>
                <Link href="/calculators">
                  <Button className="w-full">
                    Перейти до калькуляторів
                  </Button>
                </Link>
              </div>

              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Документи</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Створіть договори, акти, рахунки для вашого бізнесу в {city.name}
                </p>
                <Link href="/documents">
                  <Button className="w-full">
                    Створити документ
                  </Button>
                </Link>
              </div>

              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Блог</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Експертні статті про податки, ведення бізнесу та зміни в законодавстві
                </p>
                <Link href="/blog">
                  <Button className="w-full">
                    Читати статті
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Популярні послуги для ФОП у {city.name}
              </h2>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <Link href={`/cities/${city.slug}/fop-tax`} className="block bg-card border rounded-lg p-4 hover:shadow-lg hover:border-primary/50 transition-all">
                  <div className="text-2xl mb-2">💰</div>
                  <h3 className="font-semibold mb-1">Податки ФОП</h3>
                  <p className="text-sm text-muted-foreground">Розрахунок єдиного податку</p>
                </Link>
                
                <Link href={`/cities/${city.slug}/esv`} className="block bg-card border rounded-lg p-4 hover:shadow-lg hover:border-primary/50 transition-all">
                  <div className="text-2xl mb-2">🏥</div>
                  <h3 className="font-semibold mb-1">ЄСВ</h3>
                  <p className="text-sm text-muted-foreground">Розрахунок соціальних внесків</p>
                </Link>
                
                <Link href={`/cities/${city.slug}/contract`} className="block bg-card border rounded-lg p-4 hover:shadow-lg hover:border-primary/50 transition-all">
                  <div className="text-2xl mb-2">📄</div>
                  <h3 className="font-semibold mb-1">Договір</h3>
                  <p className="text-sm text-muted-foreground">Конструктор договорів</p>
                </Link>
                
                <Link href={`/cities/${city.slug}/act`} className="block bg-card border rounded-lg p-4 hover:shadow-lg hover:border-primary/50 transition-all">
                  <div className="text-2xl mb-2">📋</div>
                  <h3 className="font-semibold mb-1">Акт робіт</h3>
                  <p className="text-sm text-muted-foreground">Генератор актів</p>
                </Link>
                
                <Link href={`/cities/${city.slug}/invoice`} className="block bg-card border rounded-lg p-4 hover:shadow-lg hover:border-primary/50 transition-all">
                  <div className="text-2xl mb-2">💳</div>
                  <h3 className="font-semibold mb-1">Рахунок</h3>
                  <p className="text-sm text-muted-foreground">Створення рахунків</p>
                </Link>
                
                <Link href={`/cities/${city.slug}/open-fop`} className="block bg-card border rounded-lg p-4 hover:shadow-lg hover:border-primary/50 transition-all">
                  <div className="text-2xl mb-2">🚀</div>
                  <h3 className="font-semibold mb-1">Відкрити ФОП</h3>
                  <p className="text-sm text-muted-foreground">Інструкція відкриття</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Підприємництво в місті {city.name}
              </h2>
              
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  <strong>{city.name}</strong> — {city.description} з населенням {city.population.toLocaleString('uk-UA')} осіб, 
                  розташоване в {city.region}. Місто пропонує сприятливі умови для розвитку підприємництва 
                  та ведення бізнесу у різних галузях економіки.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Чому варто відкрити ФОП у {city.name}?</h3>
                <ul className="space-y-2 mb-6">
                  <li>✅ Спрощена система оподаткування для малого бізнесу</li>
                  <li>✅ Можливість працювати з клієнтами по всій Україні та за кордоном</li>
                  <li>✅ Мінімальна бюрократія при відкритті ФОП</li>
                  <li>✅ Підтримка підприємців від держави</li>
                  <li>✅ Зручні онлайн-сервіси для ведення бізнесу</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Популярні види діяльності ФОП у {city.name}</h3>
                <ul className="space-y-2 mb-6">
                  <li>🔹 IT-послуги та програмування</li>
                  <li>🔹 Консалтинг та бізнес-послуги</li>
                  <li>🔹 Торгівля через інтернет</li>
                  <li>🔹 Фріланс: дизайн, копірайтинг, маркетинг</li>
                  <li>🔹 Освітні послуги та тренінги</li>
                  <li>🔹 Ремонт та будівництво</li>
                  <li>🔹 Транспортні послуги</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Податки для ФОП у {city.name} у 2026 році</h3>
                <p className="mb-4">
                  Підприємці міста {city.name} можуть обрати одну з груп оподаткування залежно від виду діяльності 
                  та обсягу доходів:
                </p>
                <ul className="space-y-2 mb-6">
                  <li><strong>Група 1:</strong> до 167 розмірів МЗП, ставка 10% МЗП</li>
                  <li><strong>Група 2:</strong> до 834 розмірів МЗП, ставка 20% МЗП</li>
                  <li><strong>Група 3:</strong> до 7 млн грн/рік, ставка 5% від доходу + ПДВ</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Як відкрити ФОП у {city.name}?</h3>
                <ol className="space-y-2 mb-6 list-decimal list-inside">
                  <li>Подати заяву через Дію або особисто в ДПС</li>
                  <li>Обрати групу оподаткування та КВЕД</li>
                  <li>Отримати виписку з ЄДР</li>
                  <li>Відкрити рахунок у банку (за потреби)</li>
                  <li>Почати вести діяльність та сплачувати податки</li>
                </ol>

                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg my-8">
                  <h3 className="text-xl font-semibold mb-3">💡 Корисні інструменти</h3>
                  <p className="mb-4">
                    Наш сайт пропонує безкоштовні інструменти для підприємців {city.name}:
                  </p>
                  <ul className="space-y-2">
                    <li>📊 <Link href="/calculators/fop-tax" className="text-primary hover:underline">Калькулятор податків ФОП</Link></li>
                    <li>💰 <Link href="/calculators/esv" className="text-primary hover:underline">Розрахунок ЄСВ</Link></li>
                    <li>📄 <Link href="/documents/contract" className="text-primary hover:underline">Конструктор договорів</Link></li>
                    <li>📋 <Link href="/documents/act" className="text-primary hover:underline">Генератор актів виконаних робіт</Link></li>
                    <li>💼 <Link href="/blog" className="text-primary hover:underline">Експертні статті для бізнесу</Link></li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Контакти податкової служби в {city.region}</h3>
                <p className="mb-4">
                  Для отримання консультацій щодо відкриття ФОП у {city.name}, зміни групи оподаткування 
                  або інших питань, ви можете звернутися до місцевого відділення ДПС або скористатися 
                  онлайн-сервісами на офіційному сайті податкової служби України.
                </p>

                <div className="bg-muted p-6 rounded-lg mt-8">
                  <p className="text-center text-lg">
                    <strong>Потрібна допомога з документами?</strong><br />
                    Скористайтеся нашими безкоштовними інструментами для створення договорів, 
                    актів та розрахунку податків
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center mt-6">
                    <Link href="/calculators">
                      <Button size="lg">Калькулятори</Button>
                    </Link>
                    <Link href="/documents">
                      <Button size="lg" variant="outline">Документи</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                ФОП Помічник — ваш надійний партнер у бізнесі
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Підприємці з {city.name} та інших міст України довіряють нашим інструментам 
                для ведення бізнесу. Приєднуйтесь до тисяч успішних підприємців!
              </p>
              <Link href="/">
                <Button size="lg" variant="outline">
                  На головну сторінку
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
