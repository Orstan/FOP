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
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchCompany = async () => {
    if (!code || code.length < 8) {
      setError("Введіть коректний код ЄДРПОУ/ІПН");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Використовуємо безкоштовний API Opendatabot або подібний
      // Для демо використаємо mock дані
      // В продакшені потрібно отримати API ключ та використати справжній endpoint
      
      // Mock дані для демонстрації
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockData: CompanyData = {
        name: code.length === 10 ? "ФОП Іваненко Іван Іванович" : "ТОВ Компанія Приклад",
        code: code,
        address: "м. Київ, вул. Хрещатик, 1",
        director: code.length === 8 ? "Іваненко Іван Іванович" : undefined,
      };

      onCompanySelect(mockData);
    } catch (err) {
      setError("Не вдалося знайти організацію. Спробуйте ще раз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
      <div className="flex items-center gap-2">
        <Search className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <Label className="font-semibold text-blue-900 dark:text-blue-200">
          Автозаповнення за кодом
        </Label>
      </div>
      
      <div className="flex gap-2">
        <Input
          placeholder="ЄДРПОУ (8 цифр) або ІПН (10 цифр)"
          value={code}
          onChange={(e) => {
            setCode(e.target.value.replace(/\D/g, ''));
            setError("");
          }}
          maxLength={10}
          className="flex-1"
        />
        <Button 
          onClick={searchCompany}
          disabled={loading || code.length < 8}
          size="sm"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Search className="h-4 w-4" />
          )}
        </Button>
      </div>

      {error && (
        <p className="text-xs text-red-600 dark:text-red-400">{error}</p>
      )}

      <p className="text-xs text-gray-600 dark:text-gray-400">
        💡 Введіть код ЄДРПОУ або ІПН для автоматичного заповнення реквізитів
      </p>
    </div>
  );
}
