"use client"

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Article {
  title: string;
  description: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  available: boolean;
}

const ARTICLES_PER_PAGE = 10;

export function BlogList({ articles }: { articles: Article[] }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = articles.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= 11) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) pages.push(i);
      
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <>
      <div className="space-y-10">
        {currentArticles.map((article, index) => (
          <Card 
            key={startIndex + index} 
            className={`dark:bg-gray-900 border-2 transition-all ${article.available ? 'hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-lg' : 'opacity-60'}`}
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full font-medium">
                      {article.category}
                    </span>
                    {!article.available && (
                      <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                        Незабаром
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {article.available ? (
                      <Link href={`/blog/${article.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {article.title}
                      </Link>
                    ) : (
                      article.title
                    )}
                  </CardTitle>
                  <CardDescription className="text-base">{article.description}</CardDescription>
                </div>
                <BookOpen className="h-12 w-12 text-blue-600 dark:text-blue-400 flex-shrink-0 opacity-20" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(article.date).toLocaleDateString('uk-UA', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime} читання</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Пагінація */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          <Button
            variant="outline"
            size="sm"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span key={`dots-${index}`} className="px-2 text-gray-400 dark:text-gray-500">
                ...
              </span>
            ) : (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => goToPage(page as number)}
                className={
                  currentPage === page
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800"
                }
              >
                {page}
              </Button>
            )
          )}

          <Button
            variant="outline"
            size="sm"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Показуємо лічильник */}
      {totalPages > 1 && (
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
          Сторінка {currentPage} з {totalPages} • Всього {articles.length} статей
        </p>
      )}
    </>
  );
}
