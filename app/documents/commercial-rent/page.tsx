"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Building2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";

export default function CommercialRentGenerator() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    landlordName: "",
    landlordCode: "",
    tenantName: "",
    tenantCode: "",
    premisesAddress: "",
    premisesArea: "",
    rentAmount: "",
    utilityAmount: "",
    purpose: "офіс",
    duration: "12",
    contractNumber: "",
    contractDate: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePDF = async () => {
    if (!formData.landlordName || !formData.tenantName || !formData.premisesAddress || !formData.rentAmount) {
      alert("Заповніть обов'язкові поля");
      return;
    }

    try {
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).default;
      const iframe = document.createElement('iframe');
      iframe.style.cssText = 'visibility:hidden;position:fixed;left:-10000px;width:0;height:0;border:none';
      document.body.appendChild(iframe);
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!iframeDoc) throw new Error("Не вдалося створити iframe");

      const content = `<!DOCTYPE html><html><head><meta name="color-scheme" content="light only"><style>body{font-family:'Times New Roman',Times,serif;background:#fff;color:#000;margin:0;padding:10mm 15mm;width:210mm;font-size:10pt;line-height:1.3}.branding{position:absolute;top:10mm;right:15mm;font-size:8pt;color:#666}.header{text-align:center;font-weight:bold;font-size:13pt;margin-bottom:8px;text-transform:uppercase}.date-city{text-align:right;margin-bottom:12px;font-size:10pt}.intro{text-align:justify;margin-bottom:10px;text-indent:10mm}.section-title{font-weight:bold;margin-top:10px;margin-bottom:4px;text-transform:uppercase;font-size:10pt}.item{margin-bottom:3px;display:flex}.item-number{min-width:10mm}.item-text{flex:1}.signatures{display:flex;justify-content:space-between;margin-top:25px}.col{width:45%}.sign-line{border-top:1px solid #000;margin-top:20px;width:100%}</style></head><body><div class="branding">ФОП Помічник<br>fop-help.com</div><div class="header">ДОГОВІР ОРЕНДИ НЕЖИТЛОВОГО ПРИМІЩЕННЯ № ${formData.contractNumber || '___'}</div><div class="date-city">м. Київ ${formData.contractDate}</div><div class="intro"><strong>${formData.landlordName}</strong>, ІПН ${formData.landlordCode || '___________'}, надалі "Орендодавець", та</div><div class="intro"><strong>${formData.tenantName}</strong>, ІПН ${formData.tenantCode || '___________'}, надалі "Орендар", уклали цей Договір про наступне:</div><div class="section-title">1. ПРЕДМЕТ ДОГОВОРУ</div><div class="item"><span class="item-number">1.1.</span><span class="item-text">Орендодавець передає, а Орендар приймає в тимчасове платне користування нежитлове приміщення за адресою: <strong>${formData.premisesAddress}</strong></span></div><div class="item"><span class="item-number">1.2.</span><span class="item-text">Площа приміщення: <strong>${formData.premisesArea} м²</strong></span></div><div class="item"><span class="item-number">1.3.</span><span class="item-text">Цільове призначення: <strong>${formData.purpose}</strong></span></div><div class="section-title">2. ТЕРМІН ДІЇ</div><div class="item"><span class="item-number">2.1.</span><span class="item-text">Договір укладено на строк <strong>${formData.duration} місяців</strong> з ${formData.contractDate}</span></div><div class="section-title">3. ОРЕНДНА ПЛАТА</div><div class="item"><span class="item-number">3.1.</span><span class="item-text">Розмір орендної плати: <strong>${formData.rentAmount} грн/міс</strong></span></div>${formData.utilityAmount ? `<div class="item"><span class="item-number">3.2.</span><span class="item-text">Комунальні послуги: <strong>${formData.utilityAmount} грн/міс</strong></span></div>` : ''}<div class="item"><span class="item-number">3.${formData.utilityAmount ? '3' : '2'}.</span><span class="item-text">Оплата до 10 числа поточного місяця</span></div><div class="section-title">4. ПІДПИСИ СТОРІН</div><div class="signatures"><div class="col"><strong>ОРЕНДОДАВЕЦЬ:</strong><br>${formData.landlordName}<br>ІПН: ${formData.landlordCode || '___________'}<div class="sign-line"></div>(підпис)</div><div class="col"><strong>ОРЕНДАР:</strong><br>${formData.tenantName}<br>ІПН: ${formData.tenantCode || '___________'}<div class="sign-line"></div>(підпис)</div></div></body></html>`;

      iframeDoc.open();
      iframeDoc.write(content);
      iframeDoc.close();
      await new Promise(resolve => setTimeout(resolve, 500));
      const canvas = await html2canvas(iframeDoc.body, { scale: 2, backgroundColor: '#ffffff', logging: false, useCORS: true });
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgProps = pdf.getImageProperties(imgData);
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
      let heightLeft = imgHeight, position = 0;
      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;
      while (heightLeft >= 0) { position = heightLeft - imgHeight; pdf.addPage(); pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight); heightLeft -= pdfHeight; }
      pdf.save(`Оренда_нежитлового_${formData.contractNumber || 'б/н'}_${formData.contractDate}.pdf`);
      document.body.removeChild(iframe);
      router.push('/documents/success');
    } catch (error) {
      console.error("Помилка:", error);
      alert("Не вдалося створити PDF.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Оренда нежитлового приміщення</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Договір оренди офісу, магазину, складу</p>
        <Card className="dark:bg-gray-900">
          <CardHeader><CardTitle className="flex items-center gap-2"><Building2 className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />Заповніть дані</CardTitle></CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div><Label htmlFor="contractNumber">№ договору</Label><Input id="contractNumber" name="contractNumber" value={formData.contractNumber} onChange={handleChange} /></div>
              <div><Label htmlFor="contractDate">Дата</Label><Input id="contractDate" name="contractDate" type="date" value={formData.contractDate} onChange={handleChange} /></div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Орендодавець</h3>
              <div><Label htmlFor="landlordName">ПІБ *</Label><Input id="landlordName" name="landlordName" placeholder="ФОП Власник" value={formData.landlordName} onChange={handleChange} /></div>
              <div><Label htmlFor="landlordCode">ІПН</Label><Input id="landlordCode" name="landlordCode" value={formData.landlordCode} onChange={handleChange} /></div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Орендар</h3>
              <div><Label htmlFor="tenantName">ПІБ *</Label><Input id="tenantName" name="tenantName" placeholder="ТОВ Компанія" value={formData.tenantName} onChange={handleChange} /></div>
              <div><Label htmlFor="tenantCode">ІПН</Label><Input id="tenantCode" name="tenantCode" value={formData.tenantCode} onChange={handleChange} /></div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Приміщення</h3>
              <div><Label htmlFor="premisesAddress">Адреса *</Label><Input id="premisesAddress" name="premisesAddress" placeholder="м. Київ, вул. Хрещатик, 1" value={formData.premisesAddress} onChange={handleChange} /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label htmlFor="premisesArea">Площа, м²</Label><Input id="premisesArea" name="premisesArea" type="number" placeholder="50" value={formData.premisesArea} onChange={handleChange} /></div>
                <div><Label htmlFor="purpose">Призначення</Label><select id="purpose" name="purpose" value={formData.purpose} onChange={handleChange} className="w-full h-10 px-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"><option value="офіс">Офіс</option><option value="магазин">Магазин</option><option value="склад">Склад</option><option value="виробництво">Виробництво</option></select></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div><Label htmlFor="rentAmount">Орендна плата *</Label><Input id="rentAmount" name="rentAmount" type="number" placeholder="10000" value={formData.rentAmount} onChange={handleChange} /></div>
                <div><Label htmlFor="utilityAmount">Комунальні</Label><Input id="utilityAmount" name="utilityAmount" type="number" placeholder="2000" value={formData.utilityAmount} onChange={handleChange} /></div>
                <div><Label htmlFor="duration">Термін, міс</Label><Input id="duration" name="duration" type="number" placeholder="12" value={formData.duration} onChange={handleChange} /></div>
              </div>
            </div>
            <Button onClick={generatePDF} className="w-full" size="lg"><Download className="mr-2 h-5 w-5" />Завантажити PDF</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
