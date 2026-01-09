"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Truck, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function TransportationGenerator() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    carrierName: "",
    carrierCode: "",
    customerName: "",
    customerCode: "",
    cargoDescription: "",
    from: "",
    to: "",
    distance: "",
    price: "",
    contractNumber: "",
    contractDate: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePDF = async () => {
    if (!formData.carrierName || !formData.customerName || !formData.cargoDescription || !formData.price) {
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

      const content = `<!DOCTYPE html><html><head><meta name="color-scheme" content="light only"><style>body{font-family:'Times New Roman',Times,serif;background:#fff;color:#000;margin:0;padding:10mm 15mm;width:210mm;font-size:10pt;line-height:1.3}.branding{position:absolute;top:10mm;right:15mm;font-size:8pt;color:#666}.header{text-align:center;font-weight:bold;font-size:13pt;margin-bottom:8px;text-transform:uppercase}.date-city{text-align:right;margin-bottom:12px;font-size:10pt}.intro{text-align:justify;margin-bottom:10px;text-indent:10mm}.section-title{font-weight:bold;margin-top:10px;margin-bottom:4px;text-transform:uppercase;font-size:10pt}.item{margin-bottom:3px;display:flex}.item-number{min-width:10mm}.item-text{flex:1}.signatures{display:flex;justify-content:space-between;margin-top:25px}.col{width:45%}.sign-line{border-top:1px solid #000;margin-top:20px;width:100%}</style></head><body><div class="branding">ФОП Помічник<br>fop-help.com</div><div class="header">ДОГОВІР ПЕРЕВЕЗЕННЯ ВАНТАЖУ № ${formData.contractNumber || '___'}</div><div class="date-city">м. Київ ${formData.contractDate}</div><div class="intro"><strong>${formData.carrierName}</strong> (Перевізник) та <strong>${formData.customerName}</strong> (Замовник) уклали цей договір.</div><div class="section-title">1. ПРЕДМЕТ</div><div class="item"><span class="item-number">1.1.</span><span class="item-text">Перевізник зобов'язується доставити вантаж: <strong>${formData.cargoDescription}</strong> з ${formData.from} до ${formData.to}.</span></div><div class="section-title">2. ЦІНА</div><div class="item"><span class="item-number">2.1.</span><span class="item-text">Вартість перевезення: <strong>${formData.price} грн</strong>.</span></div><div class="signatures"><div class="col"><strong>ПЕРЕВІЗНИК:</strong><br>${formData.carrierName}<div class="sign-line"></div></div><div class="col"><strong>ЗАМОВНИК:</strong><br>${formData.customerName}<div class="sign-line"></div></div></div></body></html>`;

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
      pdf.save(`Договір_перевезення_${formData.contractNumber || 'б/н'}_${formData.contractDate}.pdf`);
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
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Договір перевезення</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Доставка вантажу</p>
        <Card className="dark:bg-gray-900">
          <CardHeader><CardTitle className="flex items-center gap-2"><Truck className="h-5 w-5 text-blue-600 dark:text-blue-400" />Заповніть дані</CardTitle></CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div><Label>Перевізник *</Label><Input name="carrierName" value={formData.carrierName} onChange={handleChange} /></div>
              <div><Label>Замовник *</Label><Input name="customerName" value={formData.customerName} onChange={handleChange} /></div>
            </div>
            <div className="space-y-2">
              <Label>Опис вантажу *</Label>
              <Input name="cargoDescription" value={formData.cargoDescription} onChange={handleChange} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><Label>Звідки</Label><Input name="from" value={formData.from} onChange={handleChange} /></div>
              <div><Label>Куди</Label><Input name="to" value={formData.to} onChange={handleChange} /></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><Label>Вартість, грн *</Label><Input name="price" type="number" value={formData.price} onChange={handleChange} /></div>
            </div>
            <Button onClick={generatePDF} className="w-full" size="lg"><Download className="mr-2 h-5 w-5" />Завантажити PDF</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
