'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAIAssistantStore } from '@/lib/ai-assistant-store';

export function AIHeroButton() {
  const { openAssistant } = useAIAssistantStore();

  return (
    <Button
      size="lg"
      onClick={() => openAssistant()}
      className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
    >
      <Sparkles className="mr-2 h-5 w-5 text-amber-300 animate-pulse shrink-0" />
      Запитати AI-Помічника
    </Button>
  );
}

export function AICardButton() {
  const { openAssistant } = useAIAssistantStore();

  return (
    <Button
      onClick={() => openAssistant()}
      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-xs cursor-pointer active:scale-95 transition-all"
    >
      <Sparkles className="mr-2 h-4 w-4 text-amber-300 shrink-0" />
      Відкрити консультанта
    </Button>
  );
}
