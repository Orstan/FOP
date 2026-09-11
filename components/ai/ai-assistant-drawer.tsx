'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  Loader2,
  Mic,
  MicOff,
  RotateCcw,
  Copy,
  Check,
  FileText,
  Calculator,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { useAIAssistantStore } from '@/lib/ai-assistant-store';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const QUICK_PROMPTS = [
  {
    icon: '📊',
    label: 'Податки 3 групи 2026',
    query: 'Розрахуй податки та ЄСВ для ФОП 3 групи у 2026 році при доході 100 000 грн на місяць.',
  },
  {
    icon: '📄',
    label: 'Договір послуг',
    query: 'Які обов\'язкові пункти мають бути в договорі про надання послуг для ФОП та як його створити?',
  },
  {
    icon: '💳',
    label: 'Чи потрібен РРО/ПРРО?',
    query: 'Чи потрібен мені касовий апарат (РРО або ПРРО), якщо клієнти платять за реквізитами IBAN та через сайт?',
  },
  {
    icon: '⚡',
    label: 'Відкриття ФОП у Дії',
    query: 'Як покроково відкрити ФОП онлайн через Дію за 10 хвилин і яку групу краще обрати для початківця?',
  },
  {
    icon: '🌐',
    label: 'ЗЕД та валюта для IT',
    query: 'Як ФОП 3 групи легально отримувати валюту від іноземних замовників (Upwork, Payoneer) та чи потрібен акт?',
  },
  {
    icon: '💰',
    label: 'Розмір та терміни ЄСВ',
    query: 'Скільки становить ЄСВ у 2026 році за місяць і квартал, та в які граничні терміни його потрібно сплачувати?',
  },
];

export function AIAssistantDrawer() {
  const { isOpen, closeAssistant, initialQuery, setInitialQuery } = useAIAssistantStore();

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Голосовий ввід
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Фокус на інпут при відкритті
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen]);

  // Прокручування до останнього повідомлення
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // Обробка initialQuery (наприклад, перехід з кнопки на сторінці)
  useEffect(() => {
    if (isOpen && initialQuery && initialQuery.trim()) {
      handleSendMessage(initialQuery.trim());
      setInitialQuery('');
    }
  }, [isOpen, initialQuery]);

  // Ініціалізація Web Speech Recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'uk-UA';

        recognition.onresult = (event: any) => {
          let transcript = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
          }
          if (transcript) {
            setInput(transcript);
          }
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognition.onerror = (event: any) => {
          console.error('Speech recognition error:', event.error);
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert('Ваш браузер не підтримує розпізнавання голосу. Рекомендуємо Google Chrome або Microsoft Edge.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (err) {
        console.error('Failed to start speech recognition:', err);
        setIsListening(false);
      }
    }
  };

  const handleSendMessage = async (userText: string) => {
    const trimmed = userText.trim();
    if (!trimmed || isLoading) return;

    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: trimmed,
    };

    const updatedHistory = [...messages, userMessage];
    setMessages(updatedHistory);
    setInput('');
    setIsLoading(true);

    const assistantId = (Date.now() + 1).toString();
    setMessages((prev) => [...prev, { id: assistantId, role: 'assistant', content: '' }]);

    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedHistory.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Помилка сервера (${res.status})`);
      }

      if (!res.body) {
        throw new Error('Немає відповіді від сервера.');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let streamedContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        streamedContent += chunk;

        setMessages((prev) =>
          prev.map((msg) => (msg.id === assistantId ? { ...msg, content: streamedContent } : msg))
        );
      }
    } catch (err: any) {
      console.error('AI chat request failed:', err);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantId
            ? {
                ...msg,
                content: `⚠️ ${
                  err?.message || 'Не вдалося отримати відповідь'
                }. Будь ласка, спробуйте ще раз.`,
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  const handleClearChat = () => {
    setMessages([]);
    setInput('');
  };

  const handleCopyText = (content: string, index: number) => {
    navigator.clipboard.writeText(content);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Рендерер тексту з підтримкою Markdown та інтерактивних карток
  const renderMessageContent = (content: string) => {
    if (!content) return null;

    const paragraphs = content.split(/\n\n+/);

    return (
      <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed">
        {paragraphs.map((p, pIdx) => {
          if (p.startsWith('### ')) {
            return (
              <h4 key={pIdx} className="font-bold text-gray-900 dark:text-gray-100 text-sm sm:text-base mt-2.5 mb-1">
                {p.replace('### ', '')}
              </h4>
            );
          }
          if (p.startsWith('## ')) {
            return (
              <h3 key={pIdx} className="font-bold text-gray-900 dark:text-gray-100 text-base sm:text-lg mt-3 mb-1.5">
                {p.replace('## ', '')}
              </h3>
            );
          }

          const lines = p.split('\n');
          const isList = lines.every((line) => line.trim().startsWith('- ') || line.trim().startsWith('* ') || /^\d+\.\s/.test(line.trim()));

          if (isList) {
            return (
              <ul key={pIdx} className="space-y-1 pl-1 my-1.5">
                {lines.map((line, lIdx) => {
                  const cleanedLine = line.replace(/^[-*]\s+|\d+\.\s+/, '');
                  return (
                    <li key={lIdx} className="flex items-start gap-2">
                      <span className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0">•</span>
                      <span>{renderInlineFormatting(cleanedLine)}</span>
                    </li>
                  );
                })}
              </ul>
            );
          }

          return (
            <p key={pIdx} className="text-gray-800 dark:text-gray-200">
              {renderInlineFormatting(p)}
            </p>
          );
        })}
      </div>
    );
  };

  const renderInlineFormatting = (text: string) => {
    const parts: React.ReactNode[] = [];
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(formatBoldAndCode(text.substring(lastIndex, match.index), `${lastIndex}`));
      }

      const title = match[1];
      const href = match[2];

      const isDocument = href.includes('/documents');
      const isCalculator = href.includes('/calculators');

      if (isDocument) {
        parts.push(
          <span key={`card-${match.index}`} className="block my-1.5">
            <Link
              href={href}
              onClick={closeAssistant}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/50 dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-medium transition-all group shadow-2xs text-xs"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span className="line-clamp-1">{title}</span>
              <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform ml-auto text-blue-500 shrink-0" />
            </Link>
          </span>
        );
      } else if (isCalculator) {
        parts.push(
          <span key={`card-${match.index}`} className="block my-1.5">
            <Link
              href={href}
              onClick={closeAssistant}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-green-50 hover:bg-green-100 dark:bg-green-950/50 dark:hover:bg-green-900/60 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 font-medium transition-all group shadow-2xs text-xs"
            >
              <Calculator className="w-3.5 h-3.5 text-green-600 dark:text-green-400 shrink-0" />
              <span className="line-clamp-1">{title}</span>
              <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform ml-auto text-green-500 shrink-0" />
            </Link>
          </span>
        );
      } else {
        parts.push(
          <Link
            key={`link-${match.index}`}
            href={href}
            onClick={closeAssistant}
            className="text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-2 hover:text-blue-700 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-0.5"
          >
            {title}
            <ExternalLink className="w-3 h-3 inline shrink-0" />
          </Link>
        );
      }

      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(formatBoldAndCode(text.substring(lastIndex), `${lastIndex}`));
    }

    return parts;
  };

  const formatBoldAndCode = (str: string, keyPrefix: string) => {
    const boldParts = str.split(/(\*\*[^*]+\*\*)/g);
    return boldParts.map((bPart, bIdx) => {
      if (bPart.startsWith('**') && bPart.endsWith('**')) {
        return (
          <strong key={`${keyPrefix}-b-${bIdx}`} className="font-semibold text-gray-900 dark:text-gray-100">
            {bPart.slice(2, -2)}
          </strong>
        );
      }

      const codeParts = bPart.split(/(`[^`]+`)/g);
      return codeParts.map((cPart, cIdx) => {
        if (cPart.startsWith('`') && cPart.endsWith('`')) {
          return (
            <code
              key={`${keyPrefix}-c-${cIdx}`}
              className="px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-mono text-[11px]"
            >
              {cPart.slice(1, -1)}
            </code>
          );
        }
        return cPart;
      });
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1050] overflow-hidden">
      {/* Затемнення фону */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
        onClick={closeAssistant}
      />

      {/* Бічна панель (адаптивна до будь-якого екрану) */}
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen sm:w-[460px] max-w-full bg-white dark:bg-gray-900 shadow-2xl flex flex-col h-[100dvh] transform transition-all duration-300 sm:rounded-l-3xl overflow-hidden border-l border-gray-200 dark:border-gray-800">
          
          {/* Верхня шапка (Header) */}
          <div className="px-4 py-3 sm:px-5 sm:py-3.5 border-b border-gray-100 dark:border-gray-800 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-between shadow-md shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-amber-300 shadow-inner shrink-0">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm sm:text-base tracking-tight text-white leading-tight">
                    AI-Помічник ФОП
                  </h3>
                  <span className="text-[9px] sm:text-[10px] bg-white/20 uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full text-white">
                    2026
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-blue-100/90 font-medium leading-tight mt-0.5">
                  Юридично-податковий консультант
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <button
                  onClick={handleClearChat}
                  title="Очистити чат"
                  className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
                  aria-label="Очистити чат"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}

              <button
                onClick={closeAssistant}
                className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
                aria-label="Закрити"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Стрічка повідомлень */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3.5 bg-gray-50/60 dark:bg-gray-950/60">
            {messages.length === 0 ? (
              <div className="py-4 sm:py-6 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-3xl bg-gradient-to-tr from-blue-500 to-indigo-600 text-white flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-500/20">
                  <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-amber-300 animate-pulse" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-base sm:text-lg mb-1">
                  Вітаю! Чим можу допомогти?
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 max-w-xs mx-auto leading-relaxed mb-5 px-2">
                  Запитуйте про ставки податків 2026, ЄСВ, вибір групи ФОП, РРО, інвойси або складання договорів.
                </p>

                {/* Швидкі запитання (компактна сітка) */}
                <div className="text-left">
                  <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider px-1 block mb-2">
                    Популярні запитання:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {QUICK_PROMPTS.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(item.query)}
                        className="p-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-2xs active:scale-[0.98] transition-all text-left group flex items-start gap-2 cursor-pointer"
                      >
                        <span className="text-sm shrink-0 mt-0.5">{item.icon}</span>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                            {item.label}
                          </p>
                          <p className="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-1 mt-0.5">
                            {item.query}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              messages.map((message, idx) => {
                const isUser = message.role === 'user';
                return (
                  <div
                    key={message.id}
                    className={`flex gap-2 sm:gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!isUser && (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                        <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    )}

                    <div
                      className={`relative group max-w-[90%] sm:max-w-[85%] rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-xs ${
                        isUser
                          ? 'bg-blue-600 text-white rounded-tr-none'
                          : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 rounded-tl-none'
                      }`}
                    >
                      {isUser ? (
                        <p className="text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                      ) : (
                        <div>
                          {renderMessageContent(message.content)}

                          {message.content && (
                            <div className="flex justify-end mt-2 pt-1.5 border-t border-gray-100 dark:border-gray-800">
                              <button
                                onClick={() => handleCopyText(message.content, idx)}
                                className="text-[11px] text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 flex items-center gap-1 transition-colors cursor-pointer"
                              >
                                {copiedIndex === idx ? (
                                  <>
                                    <Check className="w-3 h-3 text-green-500" />
                                    <span className="text-green-500">Скопійовано</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3" />
                                    <span>Копіювати</span>
                                  </>
                                )}
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {isUser && (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                        <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    )}
                  </div>
                );
              })
            )}

            {isLoading && (
              <div className="flex gap-2 sm:gap-3 justify-start items-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl rounded-tl-none px-3.5 py-2.5 shadow-xs flex items-center gap-2">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-600 dark:text-blue-400" />
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    AI аналізує законодавство...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Форма введення повідомлення */}
          <div className="p-2.5 sm:p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shrink-0">
            {isListening && (
              <div className="mb-2 px-3 py-1.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 text-xs flex items-center justify-between animate-pulse">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span>Слухаю... Говоріть запитання українською</span>
                </div>
                <button
                  type="button"
                  onClick={toggleListening}
                  className="font-bold underline text-[11px] cursor-pointer"
                >
                  Зупинити
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={toggleListening}
                className={`p-2 sm:p-2.5 rounded-xl transition-all cursor-pointer shrink-0 ${
                  isListening
                    ? 'bg-red-500 text-white animate-bounce'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                title={isListening ? 'Зупинити голосовий ввід' : 'Голосовий ввід (мікрофон)'}
                aria-label="Голосовий ввід"
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>

              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Запитайте що завгодно про ФОП 2026..."
                disabled={isLoading}
                className="flex-1 bg-gray-100 dark:bg-gray-800 border-none rounded-xl px-3.5 py-2 sm:py-2.5 text-base sm:text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50"
              />

              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2 sm:p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:hover:bg-blue-600 text-white shadow-md shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center shrink-0 cursor-pointer"
                aria-label="Надіслати"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-1.5 text-center">
              <span className="text-[10px] text-gray-400 dark:text-gray-500 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3 text-green-500 shrink-0" />
                Експертна база законодавства та податків України 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
