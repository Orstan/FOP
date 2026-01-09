"use client"

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Download, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme-toggle";

export default function SaleGenerator() {
  const [formData, setFormData] = useState({
    sellerName: "",
    sellerCode: "",
    sellerAddress: "",
    buyerName: "",
    buyerCode: "",
    buyerAddress: "",
    goodsDescription: "",
    quantity: "",
    unit: "шт",
    pricePerUnit: "",
    totalAmount: "",
    contractNumber: "",
    contractDate: new Date().toISOString().split('T')[0],
    deliveryAddress: "",
    deliveryDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updated = { ...prev, [name]: value };
      
      if (name === "quantity" || name === "pricePerUnit") {
        const qty = parseFloat(name === "quantity" ? value : updated.quantity) || 0;
        const price = parseFloat(name === "pricePerUnit" ? value : updated.pricePerUnit) || 0;
        updated.totalAmount = (qty * price).toFixed(2);
      }
      
      return updated;
    });
  };

  const generatePDF = async () => {
    if (!formData.sellerName || !formData.buyerName || !formData.goodsDescription || !formData.totalAmount) {
      alert("Заповніть обов'язкові поля: продавець, покупець, опис товару, сума");
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
              table { width: 100%; border-collapse: collapse; margin: 10px 0; }
              th, td { border: 1px solid #000; padding: 5px; text-align: left; font-size: 9pt; }
              th { background-color: #f0f0f0; font-weight: bold; }
              .signatures { display: flex; justify-content: space-between; margin-top: 25px; }
              .col { width: 45%; }
              .sign-line { border-top: 1px solid #000; margin-top: 20px; width: 100%; }
              strong { font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="branding">ФОП Помічник<br>fop-help.com</div>
            
            <div class="header">
              ДОГОВІР КУПІВЛІ-ПРОДАЖУ № ${formData.contractNumber || '___'}
            </div>
            
            <div class="date-city">
               м. Київ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${formData.contractDate}
            </div>

            <div class="intro">
              <strong>${formData.sellerName}</strong>, ІПН ${formData.sellerCode || '___________'}, надалі "Продавець", з однієї сторони, та
            </div>
            <div class="intro">
              <strong>${formData.buyerName}</strong>, ІПН ${formData.buyerCode || '___________'}, надалі "Покупець", з іншої сторони, уклали цей Договір про наступне:
            </div>

            <div class="section-title">1. ПРЕДМЕТ ДОГОВОРУ</div>
            <div class="section-content">
              <div class="item">
                <span class="item-number">1.1.</span>
                <span class="item-text">Продавець зобов'язується передати у власність Покупцеві, а Покупець зобов'язується прийняти та оплатити товар згідно специфікації:</span>
              </div>
            </div>

            <table>
              <tr>
                <th style="width: 50%;">Найменування товару</th>
                <th style="width: 15%;">Кількість</th>
                <th style="width: 15%;">Ціна за од.</th>
                <th style="width: 20%;">Сума, грн</th>
              </tr>
              <tr>
                <td>${formData.goodsDescription}</td>
                <td>${formData.quantity} ${formData.unit}</td>
                <td>${formData.pricePerUnit} грн</td>
                <td>${formData.totalAmount} грн</td>
              </tr>
              <tr>
                <td colspan="3" style="text-align: right;"><strong>ВСЬОГО:</strong></td>
                <td><strong>${formData.totalAmount} грн</strong></td>
              </tr>
            </table>

            <div class="section-title">2. ЦІНА ТА ПОРЯДОК ОПЛАТИ</div>
            <div class="section-content">
              <div class="item">
                <span class="item-number">2.1.</span>
                <span class="item-text">Загальна вартість товару становить: <strong>${formData.totalAmount} грн</strong></span>
              </div>
              <div class="item">
                <span class="item-number">2.2.</span>
                <span class="item-text">Оплата здійснюється шляхом перерахування коштів на банківський рахунок Продавця або готівкою.</span>
              </div>
            </div>

            <div class="section-title">3. ПОСТАЧАННЯ ТОВАРУ</div>
            <div class="section-content">
              <div class="item">
                <span class="item-number">3.1.</span>
                <span class="item-text">Передача товару здійснюється ${formData.deliveryAddress ? `за адресою: ${formData.deliveryAddress}` : 'за адресою Покупця'}.</span>
              </div>
              ${formData.deliveryDate ? `<div class="item">
                <span class="item-number">3.2.</span>
                <span class="item-text">Термін постачання: ${formData.deliveryDate}</span>
              </div>` : ''}
            </div>

            <div class="section-title">4. ПІДПИСИ СТОРІН</div>
            <div class="signatures">
              <div class="col">
                <strong>ПРОДАВЕЦЬ:</strong><br>
                ${formData.sellerName}<br>
                ІПН: ${formData.sellerCode || '___________'}
                <div class="sign-line"></div>
                (підпис)
              </div>
              <div class="col">
                <strong>ПОКУПЕЦЬ:</strong><br>
                ${formData.buyerName}<br>
                ІПН: ${formData.buyerCode || '___________'}
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

      pdf.save(`Договір_купівлі-продажу_${formData.contractNumber || 'б/н'}_${formData.contractDate}.pdf`);

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
            Договір купівлі-продажу
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Створіть договір купівлі-продажу товарів між ФОП та клієнтом
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="dark:bg-gray-900 print:hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                Заповніть дані
              </CardTitle>
              <CardDescription>
                Договір регулює продаж товарів та їх оплату
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
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Продавець</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="sellerName">ПІБ / Назва продавця *</Label>
                  <Input
                    id="sellerName"
                    name="sellerName"
                    placeholder="ФОП Іваненко Іван Іванович"
                    value={formData.sellerName}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="sellerCode">ІПН продавця</Label>
                    <Input
                      id="sellerCode"
                      name="sellerCode"
                      placeholder="1234567890"
                      value={formData.sellerCode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sellerAddress">Адреса</Label>
                    <Input
                      id="sellerAddress"
                      name="sellerAddress"
                      placeholder="м. Київ"
                      value={formData.sellerAddress}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Покупець</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="buyerName">ПІБ / Назва покупця *</Label>
                  <Input
                    id="buyerName"
                    name="buyerName"
                    placeholder="Петренко Петро Петрович"
                    value={formData.buyerName}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="buyerCode">ІПН покупця</Label>
                    <Input
                      id="buyerCode"
                      name="buyerCode"
                      placeholder="0987654321"
                      value={formData.buyerCode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="buyerAddress">Адреса</Label>
                    <Input
                      id="buyerAddress"
                      name="buyerAddress"
                      placeholder="м. Львів"
                      value={formData.buyerAddress}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Товар та ціна</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="goodsDescription">Опис товару *</Label>
                  <Textarea
                    id="goodsDescription"
                    name="goodsDescription"
                    placeholder="Ноутбук Lenovo ThinkPad X1 Carbon"
                    value={formData.goodsDescription}
                    onChange={handleChange}
                    rows={2}
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Кількість *</Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      type="number"
                      placeholder="1"
                      value={formData.quantity}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="unit">Од. вим.</Label>
                    <select
                      id="unit"
                      name="unit"
                      value={formData.unit}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
                    >
                      <option value="шт">шт</option>
                      <option value="кг">кг</option>
                      <option value="л">л</option>
                      <option value="м">м</option>
                      <option value="м²">м²</option>
                      <option value="комплект">комплект</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pricePerUnit">Ціна за од. *</Label>
                    <Input
                      id="pricePerUnit"
                      name="pricePerUnit"
                      type="number"
                      placeholder="25000"
                      value={formData.pricePerUnit}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="totalAmount">Загальна сума, грн *</Label>
                  <Input
                    id="totalAmount"
                    name="totalAmount"
                    type="number"
                    placeholder="Розрахується автоматично"
                    value={formData.totalAmount}
                    onChange={handleChange}
                    className="font-bold"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Додаткові дані</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="deliveryAddress">Адреса доставки</Label>
                  <Input
                    id="deliveryAddress"
                    name="deliveryAddress"
                    placeholder="м. Київ, вул. Хрещатик, 1"
                    value={formData.deliveryAddress}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deliveryDate">Дата доставки</Label>
                  <Input
                    id="deliveryDate"
                    name="deliveryDate"
                    type="date"
                    value={formData.deliveryDate}
                    onChange={handleChange}
                  />
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
                  ДОГОВІР КУПІВЛІ-ПРОДАЖУ № {formData.contractNumber || '___'}
                </div>
                <div className="text-right text-xs">
                  м. Київ {formData.contractDate}
                </div>
                <div className="space-y-2 text-xs">
                  <p><strong>Продавець:</strong> {formData.sellerName || '_________________'}</p>
                  <p><strong>Покупець:</strong> {formData.buyerName || '_________________'}</p>
                  <p><strong>Товар:</strong> {formData.goodsDescription || '_________________'}</p>
                  <p><strong>Кількість:</strong> {formData.quantity || '___'} {formData.unit}</p>
                  <p><strong>Загальна сума:</strong> {formData.totalAmount || '___'} грн</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
