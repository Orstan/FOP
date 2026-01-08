"use client"

import { useState } from "react";
import Link from "next/link";
import { FileSignature, ArrowLeft, Download, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme-toggle";

export default function ContractGenerator() {
  const [formData, setFormData] = useState({
    executorName: "",
    executorCode: "",
    executorAddress: "",
    clientName: "",
    clientCode: "",
    clientAddress: "",
    serviceDescription: "",
    amount: "",
    deadline: "",
    contractNumber: "",
    contractDate: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generatePDF = async () => {
    if (!formData.executorName || !formData.clientName || !formData.serviceDescription || !formData.amount) {
      alert("Заповніть обов'язкові поля: виконавець, замовник, опис послуг, вартість");
      return;
    }

    try {
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).default;
      
      const element = document.getElementById('contract-preview');
      if (!element) {
        alert("Помилка: не знайдено елемент для генерації PDF");
        return;
      }

      const canvas = await html2canvas(element, {
        scale: 3,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const imgProps = pdf.getImageProperties(imgData);
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save(`Договір_${formData.contractNumber || 'б/н'}_${formData.contractDate}.pdf`);
      
    } catch (error) {
      console.error("Помилка при генерації PDF:", error);
      alert("Не вдалося створити PDF. Спробуйте ще раз.");
    }
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
            Договір надання послуг
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Заповніть форму та отримайте готовий договір у форматі PDF
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="dark:bg-gray-900 print:hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileSignature className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Заповніть дані
              </CardTitle>
              <CardDescription>
                Всі поля важливі для створення юридично коректного договору
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Дані виконавця (ФОП)</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="executorName">ПІБ виконавця *</Label>
                  <Input
                    id="executorName"
                    name="executorName"
                    placeholder="ФОП Іваненко Іван Іванович"
                    value={formData.executorName}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="executorCode">ЄДРПОУ/ІПН виконавця</Label>
                  <Input
                    id="executorCode"
                    name="executorCode"
                    placeholder="1234567890"
                    value={formData.executorCode}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="executorAddress">Адреса виконавця</Label>
                  <Input
                    id="executorAddress"
                    name="executorAddress"
                    placeholder="м. Київ, вул. Хрещатик, 1"
                    value={formData.executorAddress}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Дані замовника</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="clientName">Назва/ПІБ замовника *</Label>
                  <Input
                    id="clientName"
                    name="clientName"
                    placeholder='ТОВ "Компанія" або Петренко П.П.'
                    value={formData.clientName}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clientCode">ЄДРПОУ/ІПН замовника</Label>
                  <Input
                    id="clientCode"
                    name="clientCode"
                    placeholder="0987654321"
                    value={formData.clientCode}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clientAddress">Адреса замовника</Label>
                  <Input
                    id="clientAddress"
                    name="clientAddress"
                    placeholder="м. Київ, вул. Шевченка, 10"
                    value={formData.clientAddress}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Умови договору</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="contractNumber">Номер договору</Label>
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

                <div className="space-y-2">
                  <Label htmlFor="serviceDescription">Опис послуг *</Label>
                  <Textarea
                    id="serviceDescription"
                    name="serviceDescription"
                    placeholder="Наприклад: Розробка веб-сайту згідно технічного завдання"
                    value={formData.serviceDescription}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Вартість послуг (грн) *</Label>
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    placeholder="50000"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deadline">Термін виконання</Label>
                  <Input
                    id="deadline"
                    name="deadline"
                    placeholder="30 календарних днів з дати підписання"
                    value={formData.deadline}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <Button onClick={generatePDF} className="w-full" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Завантажити PDF
              </Button>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex gap-2">
                  <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-900 dark:text-blue-200">
                    <p className="font-semibold mb-1">Важливо!</p>
                    <p>Перевірте всі дані перед скачуванням. Цей документ має юридичну силу після підписання обома сторонами.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900 print:shadow-none print:border-0">
            <CardHeader className="print:hidden">
              <CardTitle>Попередній перегляд</CardTitle>
              <CardDescription>
                Так виглядатиме ваш договір
              </CardDescription>
            </CardHeader>
            <CardContent id="contract-preview" className="prose dark:prose-invert max-w-none text-sm">
              <div className="space-y-4">
                <div className="text-center font-bold text-lg print:text-base">
                  ДОГОВІР № {formData.contractNumber || "___"}<br />
                  про надання послуг
                </div>
                
                <div className="text-right">
                  м. _______________ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {formData.contractDate || "__.__.____"}
                </div>

                <p>
                  <strong>{formData.executorName || "[ПІБ Виконавця]"}</strong>
                  {formData.executorCode && <>, код {formData.executorCode}</>}
                  {formData.executorAddress && <>, адреса: {formData.executorAddress}</>}, 
                  який(а) діє на підставі Виписки з Єдиного державного реєстру, надалі іменований "Виконавець", 
                  з однієї сторони, та
                </p>

                <p>
                  <strong>{formData.clientName || "[Назва/ПІБ Замовника]"}</strong>
                  {formData.clientCode && <>, код {formData.clientCode}</>}
                  {formData.clientAddress && <>, адреса: {formData.clientAddress}</>}, 
                  надалі іменований "Замовник", з другої сторони, 
                  разом іменовані "Сторони", а кожен окремо - "Сторона", уклали цей Договір про наступне:
                </p>

                <div>
                  <p className="font-bold">1. ПРЕДМЕТ ДОГОВОРУ</p>
                  <p>
                    1.1. Виконавець зобов'язується надати послуги: <strong>{formData.serviceDescription || "[Опис послуг]"}</strong>, 
                    а Замовник зобов'язується прийняти та оплатити надані послуги.
                  </p>
                  <p>
                    1.2. Вартість послуг становить: <strong>{formData.amount || "[___]"} грн</strong> 
                    (ПДВ не обкладається відповідно до ст. 208 Податкового кодексу України).
                  </p>
                  {formData.deadline && (
                    <p>1.3. Термін виконання робіт: {formData.deadline}</p>
                  )}
                </div>

                <div>
                  <p className="font-bold">2. ПРАВА ТА ОБОВ'ЯЗКИ СТОРІН</p>
                  <p>2.1. Виконавець зобов'язується:</p>
                  <p>2.1.1. Надати послуги належної якості у встановлені строки.</p>
                  <p>2.1.2. Інформувати Замовника про хід виконання робіт.</p>
                  
                  <p>2.2. Замовник зобов'язується:</p>
                  <p>2.2.1. Оплатити вартість послуг у строки, передбачені цим Договором.</p>
                  <p>2.2.2. Прийняти надані послуги згідно з Актом приймання-передачі.</p>
                </div>

                <div>
                  <p className="font-bold">3. ПОРЯДОК ОПЛАТИ</p>
                  <p>3.1. Оплата здійснюється на підставі рахунку Виконавця протягом 5 банківських днів з дати підписання Акту.</p>
                  <p>3.2. Датою оплати вважається дата зарахування коштів на рахунок Виконавця.</p>
                </div>

                <div>
                  <p className="font-bold">4. ВІДПОВІДАЛЬНІСТЬ СТОРІН</p>
                  <p>4.1. За невиконання або неналежне виконання зобов'язань за цим Договором Сторони несуть відповідальність згідно з чинним законодавством України.</p>
                </div>

                <div>
                  <p className="font-bold">5. ТЕРМІН ДІЇ ДОГОВОРУ</p>
                  <p>5.1. Договір набирає чинності з моменту його підписання Сторонами і діє до повного виконання Сторонами своїх зобов'язань.</p>
                </div>

                <div>
                  <p className="font-bold">6. РЕКВІЗИТИ ТА ПІДПИСИ СТОРІН</p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="font-semibold">ВИКОНАВЕЦЬ:</p>
                      <p className="text-sm">
                        {formData.executorName || "[ПІБ]"}<br />
                        {formData.executorCode && <>Код: {formData.executorCode}<br /></>}
                        {formData.executorAddress && <>Адреса: {formData.executorAddress}<br /></>}
                      </p>
                      <p className="mt-8">_____________ / {formData.executorName?.split(' ')[1] || "_______"} /</p>
                    </div>
                    <div>
                      <p className="font-semibold">ЗАМОВНИК:</p>
                      <p className="text-sm">
                        {formData.clientName || "[Назва/ПІБ]"}<br />
                        {formData.clientCode && <>Код: {formData.clientCode}<br /></>}
                        {formData.clientAddress && <>Адреса: {formData.clientAddress}<br /></>}
                      </p>
                      <p className="mt-8">_____________ / _______ /</p>
                    </div>
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
