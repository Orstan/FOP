"use client"

import Link from "next/link";
import { Home, ArrowLeft, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <Card className="dark:bg-gray-900 border-2">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <FileQuestion className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <CardTitle className="text-4xl font-bold text-gray-900 dark:text-gray-100">404</CardTitle>
            <CardDescription className="text-xl mt-2">
              Сторінку не знайдено
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-gray-600 dark:text-gray-400">
              На жаль, сторінка, яку ви шукаєте, не існує або була переміщена.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-2">
                Можливо, вам будуть корисні:
              </p>
              <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-300">
                <li>• <Link href="/calculators" className="hover:underline">Калькулятори податків</Link></li>
                <li>• <Link href="/documents" className="hover:underline">Конструктор документів</Link></li>
                <li>• <Link href="/blog" className="hover:underline">Блог для підприємців</Link></li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild className="flex-1" size="lg">
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" />
                  На головну
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex-1" size="lg" onClick={() => window.history.back()}>
                <button>
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Назад
                </button>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
