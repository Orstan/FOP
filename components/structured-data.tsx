export function ArticleStructuredData({ 
  title, 
  description, 
  datePublished, 
  dateModified,
  authorName = "ФОП Помічник",
  image = "https://fop-help.com/og-image.png"
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": authorName,
      "url": "https://fop-help.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ФОП Помічник",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fop-help.com/logo.png"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function FAQStructuredData({ 
  questions 
}: {
  questions: Array<{ question: string; answer: string }>;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function HowToStructuredData({
  name,
  description,
  steps
}: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ФОП Помічник",
    "description": "Безкоштовний конструктор документів, розумні калькулятори податків та експертний блог для українських підприємців",
    "url": "https://fop-help.com",
    "logo": "https://fop-help.com/logo.png",
    "sameAs": [
      "https://facebook.com/fop-helper",
      "https://t.me/fop_helper"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "availableLanguage": ["Ukrainian", "English"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function WebApplicationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ФОП Помічник",
    "description": "Конструктор документів та калькулятори для українських підприємців",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "UAH"
    },
    "featureList": [
      "Конструктор договорів",
      "Калькулятор податків ФОП",
      "Калькулятор ЄСВ",
      "Генерація PDF документів",
      "SEO блог для підприємців"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
