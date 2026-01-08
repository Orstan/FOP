"use client"

import { useState } from "react";
import Link from "next/link";
import { Home, ArrowLeft, Download, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";

export default function RentGenerator() {
  const [formData, setFormData] = useState({
    landlordName: "",
    landlordCode: "",
    landlordAddress: "",
    tenantName: "",
    tenantCode: "",
    apartmentAddress: "",
    rentAmount: "",
    utilityAmount: "",
    contractDate: new Date().toISOString().split('T')[0],
    startDate: "",
    duration: "12",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generatePDF = async () => {
    if (!formData.landlordName || !formData.tenantName || !formData.apartmentAddress || !formData.rentAmount) {
      alert("Заповніть обов'язкові поля");
      return;
    }

    const html2pdf = (await import('html2pdf.js')).default;
    const element = document.getElementById('rent-preview');
    
    if (!element) {
      alert("Помилка: не знайдено елемент для генерації PDF");
      return;
    }
    
    const opt = {
      margin: 15,
      filename: `Договір_оренди_${formData.contractDate}.pdf`,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        logging: false,
        allowTaint: true,
        foreignObjectRendering: false,
        letterRendering: true
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
    };

    html2pdf().set(opt).from(element).save();
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
            Договір оренди житла
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Створіть договір найму житлового приміщення між орендодавцем та орендарем
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="dark:bg-gray-900 print:hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                Заповніть дані
              </CardTitle>
              <CardDescription>
                Договір має бути зареєстрований у відділі реєстрації місця проживання
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Дати договору</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="contractDate">Дата укладення *</Label>
                  <Input
                    id="contractDate"
                    name="contractDate"
                    type="date"
                    value={formData.contractDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="startDate">Дата початку оренди</Label>
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Термін оренди (місяців)</Label>
                  <Input
                    id="duration"
                    name="duration"
                    type="number"
                    placeholder="12"
                    value={formData.duration}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Орендодавець (власник)</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="landlordName">ПІБ орендодавця *</Label>
                  <Input
                    id="landlordName"
                    name="landlordName"
                    placeholder="Іваненко Іван Іванович"
                    value={formData.landlordName}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="landlordCode">ІПН орендодавця</Label>
                  <Input
                    id="landlordCode"
                    name="landlordCode"
                    placeholder="1234567890"
                    value={formData.landlordCode}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="landlordAddress">Адреса реєстрації</Label>
                  <Input
                    id="landlordAddress"
                    name="landlordAddress"
                    placeholder="м. Київ, вул. Хрещатик, 1"
                    value={formData.landlordAddress}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Орендар (наймач)</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="tenantName">ПІБ орендаря *</Label>
                  <Input
                    id="tenantName"
                    name="tenantName"
                    placeholder="Петренко Петро Петрович"
                    value={formData.tenantName}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tenantCode">ІПН орендаря</Label>
                  <Input
                    id="tenantCode"
                    name="tenantCode"
                    placeholder="0987654321"
                    value={formData.tenantCode}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Об'єкт оренди</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="apartmentAddress">Адреса квартири *</Label>
                  <Input
                    id="apartmentAddress"
                    name="apartmentAddress"
                    placeholder="м. Київ, вул. Шевченка, 10, кв. 25"
                    value={formData.apartmentAddress}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rentAmount">Орендна плата (грн/міс) *</Label>
                  <Input
                    id="rentAmount"
                    name="rentAmount"
                    type="number"
                    placeholder="15000"
                    value={formData.rentAmount}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="utilityAmount">Комунальні послуги (грн/міс)</Label>
                  <Input
                    id="utilityAmount"
                    name="utilityAmount"
                    type="number"
                    placeholder="3000"
                    value={formData.utilityAmount}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <Button onClick={generatePDF} className="w-full" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Завантажити PDF
              </Button>

              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                <div className="flex gap-2">
                  <Info className="h-5 w-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-orange-900 dark:text-orange-200">
                    <p className="font-semibold mb-1">Важливо!</p>
                    <p>Договір оренди термін більше 1 року підлягає нотаріальному посвідченню та державній реєстрації.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900 print:shadow-none print:border-0">
            <CardHeader className="print:hidden">
              <CardTitle>Попередній перегляд</CardTitle>
              <CardDescription>
                Так виглядатиме договір оренди
              </CardDescription>
            </CardHeader>
            <CardContent id="rent-preview" className="prose dark:prose-invert max-w-none text-sm">
              <div className="space-y-4">
                <div className="text-center font-bold text-lg print:text-base">
                  ДОГОВІР НАЙМУ ЖИТЛА
                </div>
                
                <div className="text-right">
                  м. _______________ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {formData.contractDate || "__.__.____"}
                </div>

                <p>
                  <strong>{formData.landlordName || "[ПІБ Орендодавця]"}</strong>
                  {formData.landlordCode && <>, ІПН {formData.landlordCode}</>}
                  {formData.landlordAddress && <>, зареєстрований за адресою: {formData.landlordAddress}</>}, 
                  надалі іменований "Орендодавець", з однієї сторони, та
                </p>

                <p>
                  <strong>{formData.tenantName || "[ПІБ Орендаря]"}</strong>
                  {formData.tenantCode && <>, ІПН {formData.tenantCode}</>}, 
                  надалі іменований "Орендар", з другої сторони, 
                  разом іменовані "Сторони", уклали цей Договір про наступне:
                </p>

                <div>
                  <p className="font-bold">1. ПРЕДМЕТ ДОГОВОРУ</p>
                  <p>
                    1.1. Орендодавець передає, а Орендар приймає в тимчасове платне користування 
                    житлове приміщення (квартиру), що знаходиться за адресою:{" "}
                    <strong>{formData.apartmentAddress || "[Адреса квартири]"}</strong>.
                  </p>
                  <p>
                    1.2. Житло передається в користування разом з меблями та побутовою технікою, 
                    що знаходиться в ньому на момент підписання цього Договору.
                  </p>
                </div>

                <div>
                  <p className="font-bold">2. ТЕРМІН ДІЇ ДОГОВОРУ</p>
                  <p>
                    2.1. Договір укладено на строк <strong>{formData.duration || "___"} місяців</strong>
                    {formData.startDate && <> з {formData.startDate}</>}.
                  </p>
                  <p>
                    2.2. Договір може бути продовжений за згодою Сторін шляхом укладення додаткової угоди.
                  </p>
                </div>

                <div>
                  <p className="font-bold">3. ОРЕНДНА ПЛАТА</p>
                  <p>
                    3.1. Розмір орендної плати становить <strong>{formData.rentAmount || "[___]"} грн</strong> на місяць.
                  </p>
                  {formData.utilityAmount && (
                    <p>
                      3.2. Оплата комунальних послуг становить додатково <strong>{formData.utilityAmount} грн</strong> на місяць, 
                      або згідно фактичного споживання за показниками лічильників.
                    </p>
                  )}
                  <p>
                    3.3. Орендна плата вноситься Орендарем щомісяця до 5 числа поточного місяця.
                  </p>
                  <p>
                    3.4. Оплата здійснюється шляхом перерахування коштів на банківський рахунок Орендодавця 
                    або готівкою за розпискою.
                  </p>
                </div>

                <div>
                  <p className="font-bold">4. ПРАВА ТА ОБОВ'ЯЗКИ СТОРІН</p>
                  <p>4.1. Орендодавець зобов'язується:</p>
                  <p className="pl-4">4.1.1. Передати Орендарю житло у стані, придатному для проживання.</p>
                  <p className="pl-4">4.1.2. Забезпечити можливість користування комунальними послугами.</p>
                  
                  <p>4.2. Орендар зобов'язується:</p>
                  <p className="pl-4">4.2.1. Використовувати житло виключно для проживання.</p>
                  <p className="pl-4">4.2.2. Своєчасно вносити орендну плату.</p>
                  <p className="pl-4">4.2.3. Підтримувати житло у належному стані.</p>
                  <p className="pl-4">4.2.4. Повернути житло у такому ж стані при закінченні Договору.</p>
                </div>

                <div>
                  <p className="font-bold">5. ВІДПОВІДАЛЬНІСТЬ СТОРІН</p>
                  <p>
                    5.1. За несвоєчасну сплату орендної плати Орендар сплачує пеню у розмірі 0,1% 
                    від суми заборгованості за кожний день прострочення.
                  </p>
                  <p>
                    5.2. У разі пошкодження майна Орендар відшкодовує збитки у повному обсязі.
                  </p>
                </div>

                <div>
                  <p className="font-bold">6. РОЗІРВАННЯ ДОГОВОРУ</p>
                  <p>
                    6.1. Договір може бути розірваний достроково за взаємною згодою Сторін.
                  </p>
                  <p>
                    6.2. Кожна Сторона має право розірвати Договір в односторонньому порядку, 
                    попередивши іншу Сторону не пізніше ніж за 30 днів.
                  </p>
                </div>

                <div>
                  <p className="font-bold">7. ПІДПИСИ СТОРІН</p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="font-semibold">ОРЕНДОДАВЕЦЬ:</p>
                      <p className="text-sm">
                        {formData.landlordName || "[ПІБ]"}<br />
                        {formData.landlordCode && <>ІПН: {formData.landlordCode}<br /></>}
                        {formData.landlordAddress && <>Адреса: {formData.landlordAddress}<br /></>}
                      </p>
                      <p className="mt-8">_____________ / {formData.landlordName?.split(' ')[1] || "_______"} /</p>
                    </div>
                    <div>
                      <p className="font-semibold">ОРЕНДАР:</p>
                      <p className="text-sm">
                        {formData.tenantName || "[ПІБ]"}<br />
                        {formData.tenantCode && <>ІПН: {formData.tenantCode}<br /></>}
                      </p>
                      <p className="mt-8">_____________ / {formData.tenantName?.split(' ')[1] || "_______"} /</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
