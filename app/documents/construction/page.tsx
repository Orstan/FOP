"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Hammer, Download, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme-toggle";

export default function ConstructionGenerator() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    contractorName: "",
    contractorCode: "",
    contractorAddress: "",
    customerName: "",
    customerCode: "",
    customerAddress: "",
    workDescription: "",
    workAddress: "",
    amount: "",
    deadline: "",
    contractNumber: "",
    contractDate: new Date().toISOString().split('T')[0],
    prepayment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generatePDF = async () => {
    if (!formData.contractorName || !formData.customerName || !formData.workDescription || !formData.amount) {
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
              ДОГОВІР ПІДРЯДУ № ${formData.contractNumber || '___'}
            </div>
            
            <div class="date-city">
               м. Київ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${formData.contractDate}
            </div>

            <div class="intro">
              <strong>${formData.contractorName}</strong>, ІПН ${formData.contractorCode || '___________'}, надалі "Підрядник", з однієї сторони, та
            </div>
            <div class="intro">
              <strong>${formData.customerName}</strong>, ІПН ${formData.customerCode || '___________'}, надалі "Замовник", з іншої сторони, уклали цей Договір про наступне:
            </div>

            <div class="section-title">1. ПРЕДМЕТ ДОГОВОРУ</div>
            <div class="section-content">
              <div class="item">
                <span class="item-number">1.1.</span>
                <span class="item-text">Підрядник зобов'язується виконати будівельні (ремонтні) роботи: <strong>${formData.workDescription}</strong></span>
              </div>
              <div class="item">
                <span class="item-number">1.2.</span>
                <span class="item-text">Місце виконання робіт: ${formData.workAddress || 'за адресою Замовника'}</span>
              </div>
              <div class="item">
                <span class="item-number">1.3.</span>
                <span class="item-text">Замовник зобов'язується прийняти виконані роботи та оплатити їх вартість.</span>
              </div>
            </div>

            <div class="section-title">2. ВАРТІСТЬ РОБІТ ТА ПОРЯДОК ОПЛАТИ</div>
            <div class="section-content">
              <div class="item">
                <span class="item-number">2.1.</span>
                <span class="item-text">Загальна вартість робіт становить: <strong>${formData.amount} грн</strong></span>
              </div>
              ${formData.prepayment ? `<div class="item">
                <span class="item-number">2.2.</span>
                <span class="item-text">Замовник сплачує аванс у розмірі <strong>${formData.prepayment} грн</strong> протягом 3 днів після підписання договору.</span>
              </div>` : ''}
              <div class="item">
                <span class="item-number">2.${formData.prepayment ? '3' : '2'}.</span>
                <span class="item-text">Остаточний розрахунок здійснюється після підписання Акту приймання-передачі виконаних робіт.</span>
              </div>
            </div>

            <div class="section-title">3. ТЕРМІНИ ВИКОНАННЯ РОБІТ</div>
            <div class="section-content">
              <div class="item">
                <span class="item-number">3.1.</span>
                <span class="item-text">Підрядник зобов'язується завершити роботи ${formData.deadline ? `до ${formData.deadline}` : 'у встановлений термін'}.</span>
              </div>
              <div class="item">
                <span class="item-number">3.2.</span>
                <span class="item-text">Здача робіт оформляється актом приймання-передачі, який підписується обома Сторонами.</span>
              </div>
            </div>

            <div class="section-title">4. ОБОВ'ЯЗКИ СТОРІН</div>
            <div class="section-content">
              <div class="item">
                <span class="item-number">4.1.</span>
                <span class="item-text">Підрядник зобов'язується виконати роботи якісно, у встановлений термін, із дотриманням будівельних норм.</span>
              </div>
              <div class="item">
                <span class="item-number">4.2.</span>
                <span class="item-text">Замовник зобов'язується забезпечити доступ до об'єкта та своєчасну оплату.</span>
              </div>
            </div>

            <div class="section-title">5. ПІДПИСИ СТОРІН</div>
            <div class="signatures">
              <div class="col">
                <strong>ПІДРЯДНИК:</strong><br>
                ${formData.contractorName}<br>
                ІПН: ${formData.contractorCode || '___________'}
                <div class="sign-line"></div>
                (підпис)
              </div>
              <div class="col">
                <strong>ЗАМОВНИК:</strong><br>
                ${formData.customerName}<br>
                ІПН: ${formData.customerCode || '___________'}
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

      pdf.save(`Договір_підряду_${formData.contractNumber || 'б/н'}_${formData.contractDate}.pdf`);

      document.body.removeChild(iframe);

      router.push('/documents/success');
      
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
            Договір підряду
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Створіть договір на виконання будівельних або ремонтних робіт
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="dark:bg-gray-900 print:hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hammer className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                Заповніть дані
              </CardTitle>
              <CardDescription>
                Договір регулює виконання будівельних робіт та їх оплату
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
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Підрядник</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="contractorName">ПІБ підрядника *</Label>
                  <Input
                    id="contractorName"
                    name="contractorName"
                    placeholder="ФОП Будівельник Іван"
                    value={formData.contractorName}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="contractorCode">ІПН підрядника</Label>
                    <Input
                      id="contractorCode"
                      name="contractorCode"
                      placeholder="1234567890"
                      value={formData.contractorCode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contractorAddress">Адреса</Label>
                    <Input
                      id="contractorAddress"
                      name="contractorAddress"
                      placeholder="м. Київ"
                      value={formData.contractorAddress}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Замовник</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="customerName">ПІБ замовника *</Label>
                  <Input
                    id="customerName"
                    name="customerName"
                    placeholder="Петренко Петро Петрович"
                    value={formData.customerName}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="customerCode">ІПН замовника</Label>
                    <Input
                      id="customerCode"
                      name="customerCode"
                      placeholder="0987654321"
                      value={formData.customerCode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customerAddress">Адреса</Label>
                    <Input
                      id="customerAddress"
                      name="customerAddress"
                      placeholder="м. Львів"
                      value={formData.customerAddress}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Деталі робіт</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="workDescription">Опис робіт *</Label>
                  <Textarea
                    id="workDescription"
                    name="workDescription"
                    placeholder="Ремонт квартири: шпаклювання стін, поклейка шпалер, укладка ламінату"
                    value={formData.workDescription}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workAddress">Адреса об'єкта</Label>
                  <Input
                    id="workAddress"
                    name="workAddress"
                    placeholder="м. Київ, вул. Хрещатик, 1, кв. 10"
                    value={formData.workAddress}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Вартість робіт, грн *</Label>
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
                    <Label htmlFor="prepayment">Аванс, грн</Label>
                    <Input
                      id="prepayment"
                      name="prepayment"
                      type="number"
                      placeholder="15000"
                      value={formData.prepayment}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deadline">Термін завершення</Label>
                  <Input
                    id="deadline"
                    name="deadline"
                    type="date"
                    value={formData.deadline}
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
                  ДОГОВІР ПІДРЯДУ № {formData.contractNumber || '___'}
                </div>
                <div className="text-right text-xs">
                  м. Київ {formData.contractDate}
                </div>
                <div className="space-y-2 text-xs">
                  <p><strong>Підрядник:</strong> {formData.contractorName || '_________________'}</p>
                  <p><strong>Замовник:</strong> {formData.customerName || '_________________'}</p>
                  <p><strong>Роботи:</strong> {formData.workDescription || '_________________'}</p>
                  <p><strong>Вартість:</strong> {formData.amount || '___'} грн</p>
                  {formData.prepayment && <p><strong>Аванс:</strong> {formData.prepayment} грн</p>}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
