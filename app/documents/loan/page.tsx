"use client"

import { useState } from "react";
import Link from "next/link";
import { HandCoins, Download, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";

export default function LoanGenerator() {
  const [formData, setFormData] = useState({
    lenderName: "",
    lenderCode: "",
    lenderAddress: "",
    borrowerName: "",
    borrowerCode: "",
    borrowerAddress: "",
    loanAmount: "",
    interestRate: "0",
    returnDate: "",
    contractNumber: "",
    contractDate: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generatePDF = async () => {
    if (!formData.lenderName || !formData.borrowerName || !formData.loanAmount) {
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
        <!DOCTYPE html>
        <html>
          <head>
            <meta name="color-scheme" content="light only">
            <style>
              body { 
                font-family: 'Times New Roman', Times, serif;
                background-color: #ffffff; 
                color: #000000; 
                margin: 0; 
                padding: 10mm 15mm;
                width: 210mm; 
                min-height: 297mm; 
                box-sizing: border-box;
                font-size: 10pt;
                line-height: 1.3;
              }
              .branding { position: absolute; top: 10mm; right: 15mm; font-size: 8pt; color: #666; text-align: right; }
              .header { text-align: center; font-weight: bold; font-size: 13pt; margin-bottom: 8px; text-transform: uppercase; }
              .date-city { text-align: right; margin-bottom: 12px; font-size: 10pt; }
              .intro { text-align: justify; margin-bottom: 10px; text-indent: 10mm; }
              .section-title { font-weight: bold; margin-top: 10px; margin-bottom: 4px; text-transform: uppercase; font-size: 10pt; }
              .section-content { text-align: justify; margin-left: 0; }
              .item { margin-bottom: 3px; display: flex; }
              .item-number { min-width: 10mm; }
              .item-text { flex: 1; }
              .signatures { display: flex; justify-content: space-between; margin-top: 25px; }
              .col { width: 45%; }
              .sign-line { border-top: 1px solid #000; margin-top: 20px; width: 100%; }
              strong { font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="branding">ФОП Помічник<br>fop-help.com</div>
            
            <div class="header">
              ДОГОВІР ПОЗИКИ № ${formData.contractNumber || '___'}
            </div>
            
            <div class="date-city">
               м. Київ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${formData.contractDate}
            </div>

            <div class="intro">
              <strong>${formData.lenderName}</strong>, ІПН ${formData.lenderCode || '___________'}, надалі "Позикодавець", з однієї сторони, та
            </div>
            <div class="intro">
              <strong>${formData.borrowerName}</strong>, ІПН ${formData.borrowerCode || '___________'}, надалі "Позичальник", з іншої сторони, уклали цей Договір про наступне:
            </div>

            <div class="section-title">1. ПРЕДМЕТ ДОГОВОРУ</div>
            <div class="section-content">
              <div class="item">
                <span class="item-number">1.1.</span>
                <span class="item-text">Позикодавець передає Позичальнику у тимчасове користування грошові кошти у розмірі <strong>${formData.loanAmount} грн</strong> (гривень).</span>
              </div>
              <div class="item">
                <span class="item-number">1.2.</span>
                <span class="item-text">Позичальник зобов'язується повернути отримані кошти у встановлений термін.</span>
              </div>
            </div>

            <div class="section-title">2. УМОВИ ПОВЕРНЕННЯ</div>
            <div class="section-content">
              <div class="item">
                <span class="item-number">2.1.</span>
                <span class="item-text">Позика надається ${formData.interestRate && parseFloat(formData.interestRate) > 0 ? `під ${formData.interestRate}% річних` : 'без нарахування відсотків (безвідсоткова)'}.</span>
              </div>
              <div class="item">
                <span class="item-number">2.2.</span>
                <span class="item-text">Термін повернення позики: ${formData.returnDate || 'згідно домовленості Сторін'}.</span>
              </div>
              <div class="item">
                <span class="item-number">2.3.</span>
                <span class="item-text">Повернення здійснюється шляхом перерахування на банківський рахунок або готівкою.</span>
              </div>
            </div>

            <div class="section-title">3. ВІДПОВІДАЛЬНІСТЬ СТОРІН</div>
            <div class="section-content">
              <div class="item">
                <span class="item-number">3.1.</span>
                <span class="item-text">У разі несвоєчасного повернення позики Позичальник сплачує пеню у розмірі 0,1% від суми позики за кожний день прострочення.</span>
              </div>
              <div class="item">
                <span class="item-number">3.2.</span>
                <span class="item-text">Позикодавець має право вимагати дострокового повернення позики через суд.</span>
              </div>
            </div>

            <div class="section-title">4. ПІДПИСИ СТОРІН</div>
            <div class="signatures">
              <div class="col">
                <strong>ПОЗИКОДАВЕЦЬ:</strong><br>
                ${formData.lenderName}<br>
                ІПН: ${formData.lenderCode || '___________'}
                <div class="sign-line"></div>
                (підпис)
              </div>
              <div class="col">
                <strong>ПОЗИЧАЛЬНИК:</strong><br>
                ${formData.borrowerName}<br>
                ІПН: ${formData.borrowerCode || '___________'}
                <div class="sign-line"></div>
                (підпис)
              </div>
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

      pdf.save(`Договір_позики_${formData.contractNumber || 'б/н'}_${formData.contractDate}.pdf`);

      document.body.removeChild(iframe);
      
    } catch (error) {
      console.error("Помилка при генерації PDF:", error);
      alert("Не вдалося створити PDF. Деталі в консолі.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-8 print:hidden">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Договір позики
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Оформіть позику грошей між фізичними особами з розпискою
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="dark:bg-gray-900 print:hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HandCoins className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                Заповніть дані
              </CardTitle>
              <CardDescription>
                Договір підтверджує факт передачі грошей та умови повернення
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Реквізити договору</h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="contractNumber">Номер договору</Label>
                    <Input
                      id="contractNumber"
                      name="contractNumber"
                      placeholder="01"
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
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Позикодавець</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="lenderName">ПІБ позикодавця *</Label>
                  <Input
                    id="lenderName"
                    name="lenderName"
                    placeholder="Іваненко Іван Іванович"
                    value={formData.lenderName}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="lenderCode">ІПН</Label>
                    <Input
                      id="lenderCode"
                      name="lenderCode"
                      placeholder="1234567890"
                      value={formData.lenderCode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lenderAddress">Адреса</Label>
                    <Input
                      id="lenderAddress"
                      name="lenderAddress"
                      placeholder="м. Київ"
                      value={formData.lenderAddress}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Позичальник</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="borrowerName">ПІБ позичальника *</Label>
                  <Input
                    id="borrowerName"
                    name="borrowerName"
                    placeholder="Петренко Петро Петрович"
                    value={formData.borrowerName}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="borrowerCode">ІПН</Label>
                    <Input
                      id="borrowerCode"
                      name="borrowerCode"
                      placeholder="0987654321"
                      value={formData.borrowerCode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="borrowerAddress">Адреса</Label>
                    <Input
                      id="borrowerAddress"
                      name="borrowerAddress"
                      placeholder="м. Львів"
                      value={formData.borrowerAddress}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Умови позики</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="loanAmount">Сума позики, грн *</Label>
                  <Input
                    id="loanAmount"
                    name="loanAmount"
                    type="number"
                    placeholder="10000"
                    value={formData.loanAmount}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="interestRate">Відсоток, % річних</Label>
                    <Input
                      id="interestRate"
                      name="interestRate"
                      type="number"
                      placeholder="0"
                      value={formData.interestRate}
                      onChange={handleChange}
                    />
                    <p className="text-xs text-gray-500">0% = безвідсоткова позика</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="returnDate">Дата повернення</Label>
                    <Input
                      id="returnDate"
                      name="returnDate"
                      type="date"
                      value={formData.returnDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <Button onClick={generatePDF} className="w-full" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Завантажити PDF
              </Button>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Попередній перегляд
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800 text-sm space-y-3">
                <div className="text-center font-bold text-base">
                  ДОГОВІР ПОЗИКИ № {formData.contractNumber || '___'}
                </div>
                <div className="text-right text-xs">
                  м. Київ {formData.contractDate}
                </div>
                <div className="space-y-2 text-xs">
                  <p><strong>Позикодавець:</strong> {formData.lenderName || '_________________'}</p>
                  <p><strong>Позичальник:</strong> {formData.borrowerName || '_________________'}</p>
                  <p><strong>Сума:</strong> {formData.loanAmount || '___'} грн</p>
                  <p><strong>Відсоток:</strong> {formData.interestRate || '0'}% річних</p>
                  <p><strong>Повернення:</strong> {formData.returnDate || 'згідно домовленості'}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
