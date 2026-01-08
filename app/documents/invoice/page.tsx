"use client"

import { useState } from "react";
import Link from "next/link";
import { Receipt, ArrowLeft, Download, Info, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme-toggle";

export default function InvoiceGenerator() {
  const [formData, setFormData] = useState({
    executorName: "",
    executorNameEn: "",
    executorCode: "",
    executorAddress: "",
    executorBank: "",
    executorIban: "",
    clientName: "",
    clientNameEn: "",
    clientAddress: "",
    serviceDescription: "",
    serviceDescriptionEn: "",
    amount: "",
    currency: "USD",
    invoiceNumber: "",
    invoiceDate: new Date().toISOString().split('T')[0],
    dueDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generatePDF = async () => {
    if (!formData.executorName || !formData.clientName || !formData.serviceDescription || !formData.amount) {
      alert("Заповніть обов'язкові поля");
      return;
    }

    try {
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).default;
      
      const iframe = document.createElement('iframe');
      iframe.style.visibility = 'hidden';
      iframe.style.position = 'fixed';
      iframe.style.left = '-10000px';
      iframe.style.top = '0';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = 'none';
      document.body.appendChild(iframe);

      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      
      if (!iframeDoc) {
        throw new Error("Не вдалося створити iframe");
      }

      const content = `
        <html>
          <head>
            <style>
              body { 
                font-family: Arial, sans-serif; 
                background-color: #ffffff; 
                color: #000000; 
                margin: 0; 
                padding: 20mm; 
                width: 210mm;
                min-height: 297mm;
                box-sizing: border-box;
              }
              .header { text-align: center; font-weight: bold; font-size: 16pt; margin-bottom: 20px; }
              .section { margin: 20px 0; }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid #000; padding: 8px; }
              th { background: #f0f0f0; }
            </style>
          </head>
          <body>
            <div class="header">
              РАХУНОК-ФАКТУРА № ${formData.invoiceNumber || '___'}<br>
              від ${formData.invoiceDate}
            </div>
            
            <div class="section">
              <strong>Постачальник:</strong><br>
              ${formData.executorName}<br>
              ІПН: ${formData.executorCode || '___'}
            </div>

            <div class="section">
              <strong>Покупець:</strong><br>
              ${formData.clientName}<br>
            </div>

            <div class="section">
              <table>
                <tr>
                  <th>Опис</th>
                  <th>Сума</th>
                </tr>
                <tr>
                  <td>${formData.serviceDescription}</td>
                  <td style="text-align: right;">${formData.amount} грн</td>
                </tr>
                <tr>
                  <td style="text-align: right;"><strong>РАЗОМ:</strong></td>
                  <td style="text-align: right;"><strong>${formData.amount} грн</strong></td>
                </tr>
              </table>
            </div>

            <div style="margin-top: 40px;">
              <strong>Виконавець:</strong> ${formData.executorName} _________________
            </div>
          </body>
        </html>
      `;

      iframeDoc.open();
      iframeDoc.write(content);
      iframeDoc.close();

      await new Promise(resolve => setTimeout(resolve, 500));

      const canvas = await html2canvas(iframeDoc.body, {
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false,
        useCORS: true 
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

      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, imgHeight);
      pdf.save(`Рахунок_${formData.invoiceNumber || 'б/н'}_${formData.invoiceDate}.pdf`);

      document.body.removeChild(iframe);
      
    } catch (error) {
      console.error("Помилка при генерації PDF:", error);
      alert("Не вдалося створити PDF. Деталі в консолі.");
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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
            <Globe className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            Рахунок-фактура (Invoice)
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Двомовний рахунок для експорту послуг за кордон (UA/EN)
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="dark:bg-gray-900 print:hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                Заповніть дані
              </CardTitle>
              <CardDescription>
                Рахунок автоматично створюється українською та англійською мовами
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Реквізити рахунку</h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="invoiceNumber">Номер інвойсу *</Label>
                    <Input
                      id="invoiceNumber"
                      name="invoiceNumber"
                      placeholder="INV-001"
                      value={formData.invoiceNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currency">Валюта</Label>
                    <select
                      id="currency"
                      name="currency"
                      value={formData.currency}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="UAH">UAH</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="invoiceDate">Дата виставлення *</Label>
                    <Input
                      id="invoiceDate"
                      name="invoiceDate"
                      type="date"
                      value={formData.invoiceDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dueDate">Термін оплати</Label>
                    <Input
                      id="dueDate"
                      name="dueDate"
                      type="date"
                      value={formData.dueDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Постачальник (Seller)</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="executorName">Назва українською *</Label>
                  <Input
                    id="executorName"
                    name="executorName"
                    placeholder="ФОП Іваненко Іван Іванович"
                    value={formData.executorName}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="executorNameEn">Назва англійською</Label>
                  <Input
                    id="executorNameEn"
                    name="executorNameEn"
                    placeholder="FOP Ivanenko Ivan Ivanovych"
                    value={formData.executorNameEn}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="executorCode">ЄДРПОУ/ІПН *</Label>
                  <Input
                    id="executorCode"
                    name="executorCode"
                    placeholder="1234567890"
                    value={formData.executorCode}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="executorAddress">Адреса</Label>
                  <Input
                    id="executorAddress"
                    name="executorAddress"
                    placeholder="Ukraine, Kyiv"
                    value={formData.executorAddress}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="executorBank">Назва банку</Label>
                  <Input
                    id="executorBank"
                    name="executorBank"
                    placeholder="Monobank"
                    value={formData.executorBank}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="executorIban">IBAN рахунок *</Label>
                  <Input
                    id="executorIban"
                    name="executorIban"
                    placeholder="UA123456789012345678901234567"
                    value={formData.executorIban}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Покупець (Buyer)</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="clientName">Назва українською *</Label>
                  <Input
                    id="clientName"
                    name="clientName"
                    placeholder='ТОВ "Компанія"'
                    value={formData.clientName}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clientNameEn">Назва англійською</Label>
                  <Input
                    id="clientNameEn"
                    name="clientNameEn"
                    placeholder='Company LLC'
                    value={formData.clientNameEn}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clientAddress">Адреса</Label>
                  <Input
                    id="clientAddress"
                    name="clientAddress"
                    placeholder="USA, New York"
                    value={formData.clientAddress}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Послуги</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="serviceDescription">Опис українською *</Label>
                  <Textarea
                    id="serviceDescription"
                    name="serviceDescription"
                    placeholder="Послуги з розробки програмного забезпечення"
                    value={formData.serviceDescription}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceDescriptionEn">Опис англійською</Label>
                  <Textarea
                    id="serviceDescriptionEn"
                    name="serviceDescriptionEn"
                    placeholder="Software development services"
                    value={formData.serviceDescriptionEn}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Сума *</Label>
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    placeholder="5000"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <Button onClick={generatePDF} className="w-full" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Завантажити PDF
              </Button>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <div className="flex gap-2">
                  <Info className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-purple-900 dark:text-purple-200">
                    <p className="font-semibold mb-1">Для експорту послуг</p>
                    <p>ФОП 3 групи звільнені від ПДВ при експорті послуг. Вказуйте реквізити вашого валютного рахунку.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900 print:shadow-none print:border-0">
            <CardHeader className="print:hidden">
              <CardTitle>Попередній перегляд</CardTitle>
              <CardDescription>
                Англомовна версія інвойсу
              </CardDescription>
            </CardHeader>
            <CardContent id="invoice-preview" className="prose dark:prose-invert max-w-none text-sm">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">INVOICE</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Рахунок-фактура</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">№ {formData.invoiceNumber || "___"}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Date: {formData.invoiceDate || "__.__.____"}
                    </div>
                    {formData.dueDate && (
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Due: {formData.dueDate}
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 border-t border-b dark:border-gray-700 py-4">
                  <div>
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">From / Від</div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {formData.executorNameEn || formData.executorName || "[Seller Name]"}
                    </div>
                    {formData.executorCode && (
                      <div className="text-sm text-gray-600 dark:text-gray-400">Tax ID: {formData.executorCode}</div>
                    )}
                    {formData.executorAddress && (
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{formData.executorAddress}</div>
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">To / Для</div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {formData.clientNameEn || formData.clientName || "[Buyer Name]"}
                    </div>
                    {formData.clientAddress && (
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{formData.clientAddress}</div>
                    )}
                  </div>
                </div>

                <div>
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                      <tr>
                        <th className="text-left p-2 font-semibold">Description / Опис</th>
                        <th className="text-right p-2 font-semibold">Amount / Сума</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-gray-700">
                        <td className="p-2">
                          <div>{formData.serviceDescriptionEn || formData.serviceDescription || "[Service description]"}</div>
                          {formData.serviceDescriptionEn && formData.serviceDescription && (
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{formData.serviceDescription}</div>
                          )}
                        </td>
                        <td className="p-2 text-right font-semibold">
                          {formData.amount || "0.00"} {formData.currency}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-end">
                  <div className="w-64">
                    <div className="flex justify-between py-2 border-t-2 border-gray-900 dark:border-gray-100">
                      <span className="font-bold">TOTAL / РАЗОМ:</span>
                      <span className="font-bold text-lg text-purple-600 dark:text-purple-400">
                        {formData.amount || "0.00"} {formData.currency}
                      </span>
                    </div>
                  </div>
                </div>

                {(formData.executorBank || formData.executorIban) && (
                  <div className="border-t dark:border-gray-700 pt-4">
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                      Payment Details / Реквізити для оплати
                    </div>
                    {formData.executorBank && (
                      <div className="text-sm"><span className="font-semibold">Bank:</span> {formData.executorBank}</div>
                    )}
                    {formData.executorIban && (
                      <div className="text-sm"><span className="font-semibold">IBAN:</span> {formData.executorIban}</div>
                    )}
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      VAT exempt (export of services) / Без ПДВ (експорт послуг)
                    </div>
                  </div>
                )}

                <div className="text-xs text-gray-500 dark:text-gray-400 text-center pt-4 border-t dark:border-gray-700">
                  Thank you for your business! / Дякуємо за співпрацю!
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
