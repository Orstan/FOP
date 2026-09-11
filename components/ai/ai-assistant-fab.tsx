'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import { useAIAssistantStore } from '@/lib/ai-assistant-store';

export function AIAssistantFAB() {
  const { openAssistant, isOpen } = useAIAssistantStore();

  if (isOpen) return null;

  return (
    <div className="hidden lg:flex fixed bottom-8 right-8 z-40">
      <button
        onClick={() => openAssistant()}
        className="group relative w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="AI-Помічник ФОП"
      >
        {/* Пульсуюче сяйво */}
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-50 blur group-hover:opacity-80 transition-opacity -z-10 animate-pulse" />

        {/* Іконка */}
        <Sparkles className="w-6 h-6 text-amber-300 transition-transform group-hover:rotate-12" />

        {/* Спливаюча підказка */}
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900/95 dark:bg-gray-800/95 backdrop-blur-sm text-white text-xs font-semibold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-xl border border-white/10">
          AI-Помічник ФОП ✨
        </span>
      </button>
    </div>
  );
}
