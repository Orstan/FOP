"use client"

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, ArrowLeft, Download, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme-toggle";

export default function CommissionGenerator() {
  const [formData, setFormData] = useState({
    principalName: "",
    principalCode: "",
    agentName: "",
    agentCode: "",
    goodsDescription: "",
    commissionRate: "10",
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
    if (!formData.principalName || !formData.agentName || !formData.goodsDescription) {
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
              ДОГОВІР КОМІСІЇ № ${formData.contractNumber || '___'}
            </div>
            
            <div class="date-city">
               м. Київ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${formData.contractDate}
            </div>

            <div class="intro">
              <strong>${formData.principalName}</strong>, ІПН ${formData.principalCode || '___________'}, надалі "Комітент", з однієї сторони, та
            </div>
            <div class="intro">
              <strong>${formData.agentName}</strong>, ІПН ${formData.agentCode || '___________'}, надалі "Комісіонер", з іншої сторони, уклали цей Договір про наступне:
            </div>

            <div class="section-title">1. ПРЕДМЕТ ДОГОВОРУ</div>
            <div class="section-content">
              <div class="item">
                <span class="item-number">1.1.</span>
                <span class="item-text">Комітент доручає, а Комісіонер приймає на себе зобов'язання від свого імені, але за рахунок Комітента здійснити продаж товару: <strong>${formData.goodsDescription}</strong></span>
              </div>
              <div class="item">
                <span class="item-number">1.2.</span>
                <span class="item-text">Комісіонер діє від свого імені та набуває прав і обов'язків за угодою, укладеною з третьою особою.</span>
              </div>
            </div>

            <div class="section-title">2. ВИНАГОРОДА КОМІСІОНЕРА</div>
            <div class="section-content">
              <div class="item">
                <span class="item-number">2.1.</span>
                <span class="item-text">За виконання доручення Комісіонер отримує винагороду у розмірі <strong>${formData.commissionRate}%</strong> від вартості проданого товару.</span>
              </div>
              <div class="item">
                <span class="item-number">2.2.</span>
                <span class="item-text">Виплата винагороди здійснюється після отримання коштів від покупця.</span>
              </div>
            </div>

            <div class="section-title">3. ОБОВ'ЯЗКИ КОМІСІОНЕРА</div>
            <div class="section-content">
              <div class="item">
                <span class="item-number">3.1.</span>
                <span class="item-text">Комісіонер зобов'язується вчинити угоду на найвигідніших для Комітента умовах.</span>
              </div>
              <div class="item">
                <span class="item-number">3.2.</span>
                <span class="item-text">Комісіонер зобов'язаний передати Комітенту все одержане за договором комісії.</span>
              </div>
              <div class="item">
                <span class="item-number">3.3.</span>
                <span class="item-text">Комісіонер зобов'язаний надавати Комітенту звіти про виконання доручення.</span>
              </div>
            </div>

            <div class="section-title">4. ПІДПИСИ СТОРІН</div>
            <div class="signatures">
              <div class="col">
                <strong>КОМІТЕНТ:</strong><br>
                ${formData.principalName}<br>
                ІПН: ${formData.principalCode || '___________'}
                <div class="sign-line"></div>
                (підпис)
              </div>
              <div class="col">
                <strong>КОМІСІОНЕР:</strong><br>
                ${formData.agentName}<br>
                ІПН: ${formData.agentCode || '___________'}
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

      pdf.save(`Договір_комісії_${formData.contractNumber || 'б/н'}_${formData.contractDate}.pdf`);

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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Договір комісії
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Оформіть продаж товарів через посередника (для дропшиппінгу та агентів)
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="dark:bg-gray-900 print:hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                Заповніть дані
              </CardTitle>
              <CardDescription>
                Комісіонер продає товар від свого імені за комісію
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
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Комітент (власник товару)</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="principalName">ПІБ комітента *</Label>
                  <Input
                    id="principalName"
                    name="principalName"
                    placeholder="ФОП Постачальник Іван"
                    value={formData.principalName}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="principalCode">ІПН комітента</Label>
                  <Input
                    id="principalCode"
                    name="principalCode"
                    placeholder="1234567890"
                    value={formData.principalCode}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Комісіонер (продавець)</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="agentName">ПІБ комісіонера *</Label>
                  <Input
                    id="agentName"
                    name="agentName"
                    placeholder="ФОП Агент Петро"
                    value={formData.agentName}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="agentCode">ІПН комісіонера</Label>
                  <Input
                    id="agentCode"
                    name="agentCode"
                    placeholder="0987654321"
                    value={formData.agentCode}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Умови комісії</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="goodsDescription">Опис товару *</Label>
                  <Textarea
                    id="goodsDescription"
                    name="goodsDescription"
                    placeholder="Смартфони, ноутбуки, аксесуари"
                    value={formData.goodsDescription}
                    onChange={handleChange}
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="commissionRate">Комісія, % від продажу *</Label>
                  <Input
                    id="commissionRate"
                    name="commissionRate"
                    type="number"
                    placeholder="10"
                    value={formData.commissionRate}
                    onChange={handleChange}
                  />
                  <p className="text-xs text-gray-500">Зазвичай 5-20% від вартості товару</p>
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
                  ДОГОВІР КОМІСІЇ № {formData.contractNumber || '___'}
                </div>
                <div className="text-right text-xs">
                  м. Київ {formData.contractDate}
                </div>
                <div className="space-y-2 text-xs">
                  <p><strong>Комітент:</strong> {formData.principalName || '_________________'}</p>
                  <p><strong>Комісіонер:</strong> {formData.agentName || '_________________'}</p>
                  <p><strong>Товар:</strong> {formData.goodsDescription || '_________________'}</p>
                  <p><strong>Комісія:</strong> {formData.commissionRate}% від продажу</p>
                </div>
                <div className="mt-4 p-2 bg-purple-50 dark:bg-purple-900/20 rounded text-xs">
                  💡 Комісіонер продає від свого імені, але за рахунок Комітента
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
