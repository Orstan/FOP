"use client"

import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CompanyData {
  name: string;
  code: string;
  address?: string;
  director?: string;
}

interface CompanySearchProps {
  onCompanySelect: (company: CompanyData) => void;
}

export function CompanySearch({ onCompanySelect }: CompanySearchProps) {
  const openSearchLink = () => {
    const searchUrl = "https://opendatabot.ua/";
    window.open(searchUrl, '_blank');
  };

  return (
    <div className="space-y-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
      <div className="flex items-center gap-2 mb-2">
        <Search className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <Label className="font-semibold text-blue-900 dark:text-blue-200">
          Пошук реквізитів компанії
        </Label>
      </div>
      
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
        Знайдіть дані організації за кодом ЄДРПОУ/ІПН у безкоштовних реєстрах:
      </p>

      <div className="flex flex-col gap-2">
        <Button 
          onClick={openSearchLink}
          variant="outline"
          size="sm"
          className="w-full justify-start"
        >
          <Search className="h-4 w-4 mr-2" />
          Відкрити Opendatabot
        </Button>
        
        <a 
          href="https://usr.minjust.gov.ua/content/free-search" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
        >
          Або державний реєстр Мін'юсту →
        </a>
      </div>

      <p className="text-xs text-gray-600 dark:text-gray-400 pt-2 border-t dark:border-blue-700">
        💡 Знайдіть організацію, скопіюйте дані та вставте у форму нижче
      </p>
    </div>
  );
}
