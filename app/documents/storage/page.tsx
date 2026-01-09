"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Package, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function StorageGenerator() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    warehouseName: "",
    warehouseCode: "",
    customerName: "",
    customerCode: "",
    goodsDescription: "",
    quantity: "",
    storageFee: "",
    contractNumber: "",
    contractDate: new Date().toISOString().split('T')[0],
    duration: "1",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePDF = async () => {
    if (!formData.warehouseName || !formData.customerName || !formData.goodsDescription || !formData.storageFee) {
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

      const content = `<!DOCTYPE html><html><head><meta name="color-scheme" content="light only"><style>body{font-family:'Times New Roman',Times,serif;background:#fff;color:#000;margin:0;padding:10mm 15mm;width:210mm;font-size:10pt;line-height:1.3}.branding{position:absolute;top:10mm;right:15mm;font-size:8pt;color:#666}.header{text-align:center;font-weight:bold;font-size:13pt;margin-bottom:8px;text-transform:uppercase}.date-city{text-align:right;margin-bottom:12px;font-size:10pt}.intro{text-align:justify;margin-bottom:10px;text-indent:10mm}.section-title{font-weight:bold;margin-top:10px;margin-bottom:4px;text-transform:uppercase;font-size:10pt}.item{margin-bottom:3px;display:flex}.item-number{min-width:10mm}.item-text{flex:1}.signatures{display:flex;justify-content:space-between;margin-top:25px}.col{width:45%}.sign-line{border-top:1px solid #000;margin-top:20px;width:100%}</style></head><body><div class="branding">ФОП Помічник<br>fop-help.com</div><div class="header">ДОГОВІР ЗБЕРІГАННЯ № ${formData.contractNumber || '___'}</div><div class="date-city">м. Київ ${formData.contractDate}</div><div class="intro"><strong>${formData.warehouseName}</strong> (Зберігач) та <strong>${formData.customerName}</strong> (Поклажодавець) уклали цей договір.</div><div class="section-title">1. ПРЕДМЕТ</div><div class="item"><span class="item-number">1.1.</span><span class="item-text">Зберігач приймає на зберігання товар: <strong>${formData.goodsDescription}</strong>.</span></div><div class="section-title">2. ОПЛАТА</div><div class="item"><span class="item-number">2.1.</span><span class="item-text">Плата за зберігання: <strong>${formData.storageFee} грн/місяць</strong>.</span></div><div class="signatures"><div class="col"><strong>ЗБЕРІГАЧ:</strong><br>${formData.warehouseName}<div class="sign-line"></div></div><div class="col"><strong>ПОКЛАЖОДАВЕЦЬ:</strong><br>${formData.customerName}<div class="sign-line"></div></div></div></body></html>`;

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
      pdf.save(`Договір_зберігання_${formData.contractNumber || 'б/н'}_${formData.contractDate}.pdf`);
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
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Договір зберігання</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Складські послуги</p>
        <Card className="dark:bg-gray-900">
          <CardHeader><CardTitle className="flex items-center gap-2"><Package className="h-5 w-5 text-gray-600 dark:text-gray-400" />Заповніть дані</CardTitle></CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div><Label htmlFor="warehouseName">Зберігач *</Label><Input id="warehouseName" name="warehouseName" value={formData.warehouseName} onChange={handleChange} /></div>
              <div><Label htmlFor="customerName">Поклажодавець *</Label><Input id="customerName" name="customerName" value={formData.customerName} onChange={handleChange} /></div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="goodsDescription">Опис товару *</Label>
              <Input id="goodsDescription" name="goodsDescription" value={formData.goodsDescription} onChange={handleChange} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><Label>Плата за зберігання, грн/міс *</Label><Input name="storageFee" type="number" value={formData.storageFee} onChange={handleChange} /></div>
              <div><Label>Термін, міс</Label><Input name="duration" type="number" value={formData.duration} onChange={handleChange} /></div>
            </div>
            <Button onClick={generatePDF} className="w-full" size="lg"><Download className="mr-2 h-5 w-5" />Завантажити PDF</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
