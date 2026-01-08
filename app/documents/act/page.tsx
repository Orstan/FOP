"use client"

import { useState } from "react";
import Link from "next/link";
import { FileText, ArrowLeft, Download, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme-toggle";

export default function ActGenerator() {
  const [formData, setFormData] = useState({
    executorName: "",
    executorCode: "",
    clientName: "",
    clientCode: "",
    serviceDescription: "",
    amount: "",
    actNumber: "",
    actDate: new Date().toISOString().split('T')[0],
    contractNumber: "",
    contractDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generatePDF = async () => {
    if (!formData.executorName || !formData.clientName || !formData.serviceDescription || !formData.amount) {
      alert("Заповніть обов'язкові поля: виконавець, замовник, опис робіт, сума");
      return;
    }

    const html2pdf = (await import('html2pdf.js')).default;
    
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      position: absolute;
      left: -9999px;
      top: 0;
      width: 800px;
      padding: 40px;
      background: #ffffff;
      color: #000000;
      font-family: Arial, sans-serif;
      font-size: 14px;
      line-height: 1.8;
    `;
    
    wrapper.innerHTML = `
      <div style="text-align: center; font-weight: bold; font-size: 18px; margin-bottom: 20px;">
        АКТ № ${formData.actNumber || '___'}<br>
        приймання-передачі виконаних робіт (наданих послуг)
      </div>
      <div style="margin-bottom: 15px;">
        м. ${formData.city || '___'}, ${formData.actDate}
      </div>
      <div style="margin-bottom: 20px; text-align: justify;">
        <strong>Виконавець:</strong> ${formData.executorName}<br>
        <strong>Замовник:</strong> ${formData.clientName}
      </div>
      <div style="margin: 20px 0;">
        <strong>1. Виконані роботи (надані послуги):</strong><br>
        <div style="margin-left: 20px; margin-top: 10px;">
          ${formData.serviceDescription}
        </div>
      </div>
      <div style="margin: 20px 0;">
        <strong>2. Вартість:</strong><br>
        <div style="margin-left: 20px; margin-top: 10px;">
          <strong>${formData.amount} грн</strong> ${amountInWords(parseFloat(formData.amount))}
        </div>
      </div>
      <div style="margin-top: 40px; display: flex; justify-content: space-between;">
        <div>
          <strong>ВИКОНАВЕЦЬ:</strong><br>
          ${formData.executorName}<br>
          _________________
        </div>
        <div>
          <strong>ЗАМОВНИК:</strong><br>
          ${formData.clientName}<br>
          _________________
        </div>
      </div>
    `;
    
    document.body.appendChild(wrapper);
    
    const opt = {
      margin: 15,
      filename: `Акт_${formData.actNumber || 'б/н'}_${formData.actDate}.pdf`,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { 
        scale: 2,
        backgroundColor: '#ffffff'
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
    };

    try {
      await html2pdf().set(opt).from(wrapper).save();
    } finally {
      document.body.removeChild(wrapper);
    }
  };

  const amountInWords = (num: number): string => {
    if (!num || isNaN(num)) return "";
    return `(${num.toLocaleString('uk-UA')} грн 00 коп.)`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <header className="border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50 print:hidden">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/documents" className="flex items-center gap-2 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">Документи</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-8 print:hidden">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Акт виконаних робіт
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Створіть акт приймання-передачі виконаних робіт або наданих послуг
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="dark:bg-gray-900 print:hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
                Заповніть дані
              </CardTitle>
              <CardDescription>
                Акт підтверджує факт надання послуг та є підставою для оплати
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Реквізити акту</h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="actNumber">Номер акту</Label>
                    <Input
                      id="actNumber"
                      name="actNumber"
                      placeholder="01"
                      value={formData.actNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="actDate">Дата акту</Label>
                    <Input
                      id="actDate"
                      name="actDate"
                      type="date"
                      value={formData.actDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="contractNumber">№ договору</Label>
                    <Input
                      id="contractNumber"
                      name="contractNumber"
                      placeholder="01/2026"
                      value={formData.contractNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contractDate">Дата договору</Label>
                    <Input
                      id="contractDate"
                      name="contractDate"
                      type="date"
                      value={formData.contractDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Виконавець</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="executorName">ПІБ/Назва виконавця *</Label>
                  <Input
                    id="executorName"
                    name="executorName"
                    placeholder="ФОП Іваненко Іван Іванович"
                    value={formData.executorName}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="executorCode">ЄДРПОУ/ІПН</Label>
                  <Input
                    id="executorCode"
                    name="executorCode"
                    placeholder="1234567890"
                    value={formData.executorCode}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Замовник</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="clientName">Назва/ПІБ замовника *</Label>
                  <Input
                    id="clientName"
                    name="clientName"
                    placeholder='ТОВ "Компанія"'
                    value={formData.clientName}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clientCode">ЄДРПОУ/ІПН</Label>
                  <Input
                    id="clientCode"
                    name="clientCode"
                    placeholder="0987654321"
                    value={formData.clientCode}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Виконані роботи</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="serviceDescription">Опис виконаних робіт/послуг *</Label>
                  <Textarea
                    id="serviceDescription"
                    name="serviceDescription"
                    placeholder="Наприклад: Розробка веб-сайту згідно технічного завдання від 01.01.2026"
                    value={formData.serviceDescription}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Сума (грн) *</Label>
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    placeholder="50000"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                  {formData.amount && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Прописом: {amountInWords(parseFloat(formData.amount))}
                    </p>
                  )}
                </div>
              </div>

              <Button onClick={generatePDF} className="w-full" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Завантажити PDF
              </Button>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <div className="flex gap-2">
                  <Info className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-green-900 dark:text-green-200">
                    <p className="font-semibold mb-1">Важливо!</p>
                    <p>Акт є документом, що підтверджує виконання робіт. Підписується обома сторонами та є підставою для оплати.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900 print:shadow-none print:border-0">
            <CardHeader className="print:hidden">
              <CardTitle>Попередній перегляд</CardTitle>
              <CardDescription>
                Так виглядатиме ваш акт
              </CardDescription>
            </CardHeader>
            <CardContent id="act-preview" className="prose dark:prose-invert max-w-none text-sm">
              <div className="space-y-4">
                <div className="text-center font-bold text-lg print:text-base">
                  АКТ № {formData.actNumber || "___"}<br />
                  приймання-передачі виконаних робіт (наданих послуг)
                </div>
                
                <div className="text-right">
                  м. _______________ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {formData.actDate || "__.__.____"}
                </div>

                <p>
                  Ми, що нижче підписалися, <strong>{formData.executorName || "[Виконавець]"}</strong>
                  {formData.executorCode && <>, код {formData.executorCode}</>}, 
                  іменований надалі "Виконавець", з однієї сторони, та{" "}
                  <strong>{formData.clientName || "[Замовник]"}</strong>
                  {formData.clientCode && <>, код {formData.clientCode}</>}, 
                  іменований надалі "Замовник", з другої сторони, склали цей Акт про наступне:
                </p>

                <div>
                  <p className="font-bold">1. ПРЕДМЕТ АКТУ</p>
                  <p>
                    1.1. Виконавець передає, а Замовник приймає виконані роботи (надані послуги) за Договором
                    {formData.contractNumber && <> № {formData.contractNumber}</>}
                    {formData.contractDate && <> від {formData.contractDate}</>}:
                  </p>
                  <p className="pl-4">
                    <strong>{formData.serviceDescription || "[Опис виконаних робіт]"}</strong>
                  </p>
                </div>

                <div>
                  <p className="font-bold">2. ВАРТІСТЬ ВИКОНАНИХ РОБІТ</p>
                  <p>
                    2.1. Загальна вартість виконаних робіт становить:{" "}
                    <strong>{formData.amount || "[___]"} грн 00 коп.</strong>
                    {formData.amount && (
                      <> {amountInWords(parseFloat(formData.amount))}</>
                    )}
                  </p>
                  <p>
                    2.2. ПДВ не обкладається відповідно до ст. 208 Податкового кодексу України.
                  </p>
                </div>

                <div>
                  <p className="font-bold">3. ВИСНОВКИ СТОРІН</p>
                  <p>3.1. Замовник претензій до обсягу, якості та строків виконання робіт не має.</p>
                  <p>3.2. Роботи виконані у повному обсязі та в строк.</p>
                  <p>3.3. Цей Акт складений у двох примірниках, які мають однакову юридичну силу, по одному для кожної Сторони.</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div>
                    <p className="font-semibold">ВИКОНАВЕЦЬ:</p>
                    <p className="text-sm">
                      {formData.executorName || "[ПІБ]"}<br />
                      {formData.executorCode && <>Код: {formData.executorCode}<br /></>}
                    </p>
                    <p className="mt-8">_____________ / {formData.executorName?.split(' ')[1] || "_______"} /</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">(підпис) (ПІБ)</p>
                  </div>
                  <div>
                    <p className="font-semibold">ЗАМОВНИК:</p>
                    <p className="text-sm">
                      {formData.clientName || "[Назва/ПІБ]"}<br />
                      {formData.clientCode && <>Код: {formData.clientCode}<br /></>}
                    </p>
                    <p className="mt-8">_____________ / _______ /</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">(підпис) (ПІБ)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
