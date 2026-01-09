"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NDAGenerator() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    party1Name: "",
    party1Code: "",
    party2Name: "",
    party2Code: "",
    term: "2",
    contractNumber: "",
    contractDate: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePDF = async () => {
    if (!formData.party1Name || !formData.party2Name) {
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
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = 'none';
      document.body.appendChild(iframe);

      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!iframeDoc) throw new Error("Не вдалося створити iframe");

      const content = `<!DOCTYPE html><html><head><meta name="color-scheme" content="light only"><style>body{font-family:'Times New Roman',Times,serif;background:#fff;color:#000;margin:0;padding:10mm 15mm;width:210mm;font-size:10pt;line-height:1.3}.branding{position:absolute;top:10mm;right:15mm;font-size:8pt;color:#666}.header{text-align:center;font-weight:bold;font-size:13pt;margin-bottom:8px;text-transform:uppercase}.date-city{text-align:right;margin-bottom:12px;font-size:10pt}.intro{text-align:justify;margin-bottom:10px;text-indent:10mm}.section-title{font-weight:bold;margin-top:10px;margin-bottom:4px;text-transform:uppercase;font-size:10pt}.item{margin-bottom:3px;display:flex}.item-number{min-width:10mm}.item-text{flex:1}.signatures{display:flex;justify-content:space-between;margin-top:25px}.col{width:45%}.sign-line{border-top:1px solid #000;margin-top:20px;width:100%}</style></head><body><div class="branding">ФОП Помічник<br>fop-help.com</div><div class="header">ДОГОВІР ПРО НЕРОЗГОЛОШЕННЯ (NDA) № ${formData.contractNumber || '___'}</div><div class="date-city">м. Київ ${formData.contractDate}</div><div class="intro"><strong>${formData.party1Name}</strong>, ІПН ${formData.party1Code || '___________'}, надалі "Сторона 1", та</div><div class="intro"><strong>${formData.party2Name}</strong>, ІПН ${formData.party2Code || '___________'}, надалі "Сторона 2", уклали цей Договір про наступне:</div><div class="section-title">1. ПРЕДМЕТ ДОГОВОРУ</div><div class="item"><span class="item-number">1.1.</span><span class="item-text">Сторони зобов'язуються не розголошувати конфіденційну інформацію, отриману в процесі співпраці.</span></div><div class="item"><span class="item-number">1.2.</span><span class="item-text">Конфіденційна інформація включає технічні дані, бізнес-плани, фінансові відомості, клієнтську базу та іншу інформацію.</span></div><div class="section-title">2. ЗОБОВ'ЯЗАННЯ СТОРІН</div><div class="item"><span class="item-number">2.1.</span><span class="item-text">Не розголошувати конфіденційну інформацію третім особам без письмової згоди.</span></div><div class="item"><span class="item-number">2.2.</span><span class="item-text">Використовувати інформацію виключно для цілей співпраці.</span></div><div class="item"><span class="item-number">2.3.</span><span class="item-text">Забезпечити захист інформації від несанкціонованого доступу.</span></div><div class="section-title">3. ТЕРМІН ДІЇ</div><div class="item"><span class="item-number">3.1.</span><span class="item-text">Договір діє протягом <strong>${formData.term} років</strong> з моменту підписання.</span></div><div class="item"><span class="item-number">3.2.</span><span class="item-text">Зобов'язання щодо нерозголошення зберігаються після закінчення терміну дії договору.</span></div><div class="section-title">4. ВІДПОВІДАЛЬНІСТЬ</div><div class="item"><span class="item-number">4.1.</span><span class="item-text">За порушення умов договору Сторона відшкодовує збитки у повному обсязі.</span></div><div class="section-title">5. ПІДПИСИ СТОРІН</div><div class="signatures"><div class="col"><strong>СТОРОНА 1:</strong><br>${formData.party1Name}<div class="sign-line"></div></div><div class="col"><strong>СТОРОНА 2:</strong><br>${formData.party2Name}<div class="sign-line"></div></div></div></body></html>`;

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

      pdf.save(`NDA_${formData.contractNumber || 'б/н'}_${formData.contractDate}.pdf`);
      document.body.removeChild(iframe);
    } catch (error) {
      console.error("Помилка при генерації PDF:", error);
      alert("Не вдалося створити PDF.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Договір NDA</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Договір про нерозголошення конфіденційної інформації</p>

        <Card className="dark:bg-gray-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-red-600 dark:text-red-400" />
              Заповніть дані
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contractNumber">Номер договору</Label>
                <Input id="contractNumber" name="contractNumber" value={formData.contractNumber} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contractDate">Дата</Label>
                <Input id="contractDate" name="contractDate" type="date" value={formData.contractDate} onChange={handleChange} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Сторона 1</h3>
              <div className="space-y-2">
                <Label htmlFor="party1Name">ПІБ / Назва *</Label>
                <Input id="party1Name" name="party1Name" placeholder="ФОП Іваненко Іван" value={formData.party1Name} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="party1Code">ІПН</Label>
                <Input id="party1Code" name="party1Code" placeholder="1234567890" value={formData.party1Code} onChange={handleChange} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Сторона 2</h3>
              <div className="space-y-2">
                <Label htmlFor="party2Name">ПІБ / Назва *</Label>
                <Input id="party2Name" name="party2Name" placeholder="ТОВ Компанія" value={formData.party2Name} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="party2Code">ІПН</Label>
                <Input id="party2Code" name="party2Code" placeholder="0987654321" value={formData.party2Code} onChange={handleChange} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="term">Термін дії, років</Label>
              <Input id="term" name="term" type="number" placeholder="2" value={formData.term} onChange={handleChange} />
            </div>

            <Button onClick={generatePDF} className="w-full" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Завантажити PDF
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
