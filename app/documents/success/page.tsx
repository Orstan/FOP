import Link from "next/link";
import Script from "next/script";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DocumentSuccessPage() {
  return (
    <>
      <Script id="ads-conversion-event" strategy="afterInteractive">
        {`gtag('event', 'ads_conversion___1', {});`}
      </Script>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center">
        <main className="container mx-auto px-4 py-12 max-w-2xl text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Документ успішно створено!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Ваш документ було завантажено. Перевірте папку "Завантаження" у вашому браузері.
          </p>
          <Button asChild>
            <Link href="/documents">
              Створити ще один документ
            </Link>
          </Button>
        </main>
      </div>
    </>
  );
}

