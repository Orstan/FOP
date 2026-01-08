"use client"

import { useState } from "react";
import Link from "next/link";
import { Briefcase, ArrowLeft, Download, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme-toggle";

export default function EmploymentGenerator() {
  const [formData, setFormData] = useState({
    employerName: "",
    employerCode: "",
    employerAddress: "",
    employeeName: "",
    employeeCode: "",
    employeeAddress: "",
    position: "",
    salary: "",
    workDescription: "",
    startDate: "",
    contractType: "civil", // civil or labor
    contractNumber: "",
    contractDate: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generatePDF = async () => {
    if (!formData.employerName || !formData.employeeName || !formData.position || !formData.salary) {
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

      const isCivil = formData.contractType === 'civil';
      const docTitle = isCivil ? 'ЦИВІЛЬНО-ПРАВОВИЙ ДОГОВІР (ЦПД)' : 'ТРУДОВИЙ ДОГОВІР';

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
              ${docTitle} № ${formData.contractNumber || '___'}
            </div>
            
            <div class="date-city">
               м. Київ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${formData.contractDate}
            </div>

            <div class="intro">
              <strong>${formData.employerName}</strong>, ІПН ${formData.employerCode || '___________'}, надалі "Роботодавець", з однієї сторони, та
            </div>
            <div class="intro">
              <strong>${formData.employeeName}</strong>, ІПН ${formData.employeeCode || '___________'}, надалі "${isCivil ? 'Виконавець' : 'Працівник'}", з іншої сторони, уклали цей Договір про наступне:
            </div>

            <div class="section-title">1. ПРЕДМЕТ ДОГОВОРУ</div>
            <div class="section-content">
              <div class="item">
                <span class="item-number">1.1.</span>
                <span class="item-text">${isCivil ? 'Виконавець' : 'Працівник'} приймається на посаду: <strong>${formData.position}</strong></span>
              </div>
              ${formData.workDescription ? `<div class="item">
                <span class="item-number">1.2.</span>
                <span class="item-text">Обов'язки: ${formData.workDescription}</span>
              </div>` : ''}
              <div class="item">
                <span class="item-number">1.${formData.workDescription ? '3' : '2'}.</span>
                <span class="item-text">Дата початку роботи: ${formData.startDate || 'згідно наказу'}</span>
              </div>
            </div>

            ${isCivil ? `
            <div class="section-title">2. ВИНАГОРОДА</div>
            <div class="section-content">
              <div class="item">
                <span class="item-number">2.1.</span>
                <span class="item-text">Розмір винагороди становить: <strong>${formData.salary} грн</strong> на місяць.</span>
              </div>
              <div class="item">
                <span class="item-number">2.2.</span>
                <span class="item-text">Виплата здійснюється до 10 числа наступного місяця.</span>
              </div>
              <div class="item">
                <span class="item-number">2.3.</span>
                <span class="item-text">Виконавець самостійно сплачує податки та ЄСВ.</span>
              </div>
            </div>
            ` : `
            <div class="section-title">2. ОПЛАТА ПРАЦІ</div>
            <div class="section-content">
              <div class="item">
                <span class="item-number">2.1.</span>
                <span class="item-text">Заробітна плата становить: <strong>${formData.salary} грн</strong> на місяць (після утримання податків).</span>
              </div>
              <div class="item">
                <span class="item-number">2.2.</span>
                <span class="item-text">Виплата здійснюється 2 рази на місяць: аванс та заробітна плата.</span>
              </div>
              <div class="item">
                <span class="item-number">2.3.</span>
                <span class="item-text">Роботодавець утримує ПДФО (18%), військовий збір (1.5%) та сплачує ЄСВ (22%).</span>
              </div>
            </div>
            `}

            ${!isCivil ? `
            <div class="section-title">3. РЕЖИМ РОБОТИ ТА ВІДПОЧИНКУ</div>
            <div class="section-content">
              <div class="item">
                <span class="item-number">3.1.</span>
                <span class="item-text">Тривалість робочого тижня: 40 годин на тиждень.</span>
              </div>
              <div class="item">
                <span class="item-number">3.2.</span>
                <span class="item-text">Щорічна відпустка: 24 календарних дні.</span>
              </div>
            </div>
            ` : ''}

            <div class="section-title">${isCivil ? '3' : '4'}. ВІДПОВІДАЛЬНІСТЬ СТОРІН</div>
            <div class="section-content">
              <div class="item">
                <span class="item-number">${isCivil ? '3' : '4'}.1.</span>
                <span class="item-text">Сторони несуть відповідальність за невиконання умов договору згідно законодавства України.</span>
              </div>
            </div>

            <div class="section-title">${isCivil ? '4' : '5'}. ПІДПИСИ СТОРІН</div>
            <div class="signatures">
              <div class="col">
                <strong>РОБОТОДАВЕЦЬ:</strong><br>
                ${formData.employerName}<br>
                ІПН: ${formData.employerCode || '___________'}
                <div class="sign-line"></div>
                (підпис)
              </div>
              <div class="col">
                <strong>${isCivil ? 'ВИКОНАВЕЦЬ' : 'ПРАЦІВНИК'}:</strong><br>
                ${formData.employeeName}<br>
                ІПН: ${formData.employeeCode || '___________'}
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

      const fileName = isCivil ? 'ЦПД' : 'Трудовий_договір';
      pdf.save(`${fileName}_${formData.contractNumber || 'б/н'}_${formData.contractDate}.pdf`);

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
            Трудовий договір / ЦПД
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Оформіть найм працівника або укладіть цивільно-правовий договір (ГПХ)
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="dark:bg-gray-900 print:hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                Заповніть дані
              </CardTitle>
              <CardDescription>
                Виберіть тип договору та заповніть необхідні поля
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Тип договору</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="contractType">Тип *</Label>
                  <select
                    id="contractType"
                    name="contractType"
                    value={formData.contractType}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
                  >
                    <option value="civil">Цивільно-правовий (ЦПД/ГПХ) - Разові роботи</option>
                    <option value="labor">Трудовий договір - Постійна робота</option>
                  </select>
                  <p className="text-xs text-gray-500">
                    {formData.contractType === 'civil' 
                      ? 'ЦПД: працівник сам платить податки, без відпусток' 
                      : 'Трудовий: з відпустками, лікарняними, податки платить роботодавець'}
                  </p>
                </div>

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
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Роботодавець</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="employerName">ПІБ роботодавця *</Label>
                  <Input
                    id="employerName"
                    name="employerName"
                    placeholder="ФОП Іваненко Іван"
                    value={formData.employerName}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="employerCode">ІПН роботодавця</Label>
                    <Input
                      id="employerCode"
                      name="employerCode"
                      placeholder="1234567890"
                      value={formData.employerCode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employerAddress">Адреса</Label>
                    <Input
                      id="employerAddress"
                      name="employerAddress"
                      placeholder="м. Київ"
                      value={formData.employerAddress}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {formData.contractType === 'civil' ? 'Виконавець' : 'Працівник'}
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="employeeName">ПІБ *</Label>
                  <Input
                    id="employeeName"
                    name="employeeName"
                    placeholder="Петренко Петро Петрович"
                    value={formData.employeeName}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="employeeCode">ІПН</Label>
                    <Input
                      id="employeeCode"
                      name="employeeCode"
                      placeholder="0987654321"
                      value={formData.employeeCode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employeeAddress">Адреса</Label>
                    <Input
                      id="employeeAddress"
                      name="employeeAddress"
                      placeholder="м. Львів"
                      value={formData.employeeAddress}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Умови роботи</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="position">Посада *</Label>
                  <Input
                    id="position"
                    name="position"
                    placeholder="Менеджер з продажу"
                    value={formData.position}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workDescription">Опис обов'язків</Label>
                  <Textarea
                    id="workDescription"
                    name="workDescription"
                    placeholder="Продаж товарів, робота з клієнтами, ведення звітності"
                    value={formData.workDescription}
                    onChange={handleChange}
                    rows={2}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="salary">
                      {formData.contractType === 'civil' ? 'Винагорода, грн *' : 'Зарплата (чиста), грн *'}
                    </Label>
                    <Input
                      id="salary"
                      name="salary"
                      type="number"
                      placeholder="15000"
                      value={formData.salary}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Дата початку</Label>
                    <Input
                      id="startDate"
                      name="startDate"
                      type="date"
                      value={formData.startDate}
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
                  {formData.contractType === 'civil' ? 'ЦИВІЛЬНО-ПРАВОВИЙ ДОГОВІР' : 'ТРУДОВИЙ ДОГОВІР'} № {formData.contractNumber || '___'}
                </div>
                <div className="text-right text-xs">
                  м. Київ {formData.contractDate}
                </div>
                <div className="space-y-2 text-xs">
                  <p><strong>Роботодавець:</strong> {formData.employerName || '_________________'}</p>
                  <p><strong>{formData.contractType === 'civil' ? 'Виконавець' : 'Працівник'}:</strong> {formData.employeeName || '_________________'}</p>
                  <p><strong>Посада:</strong> {formData.position || '_________________'}</p>
                  <p><strong>{formData.contractType === 'civil' ? 'Винагорода' : 'Зарплата'}:</strong> {formData.salary || '___'} грн</p>
                </div>
                {formData.contractType === 'civil' && (
                  <div className="mt-4 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded text-xs">
                    ⚠️ ЦПД: Виконавець сам платить податки та ЄСВ
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
