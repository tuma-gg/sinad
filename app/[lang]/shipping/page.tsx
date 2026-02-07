import { Language } from '@/Lib/translations';
import Link from 'next/link';

export default async function ShippingPage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  const isRTL = lang === 'ar';

  const sections = isRTL
    ? [
        { title: '١. نطاق السياسة', content: 'تنطبق سياسة الشحن هذه على جميع الطلبات المُقدمة عبر موقع سِناد الإلكتروني داخل سلطنة عُمان. نحن نلتزم بتسليم منتجاتك بأمان وفي الوقت المناسب.' },
        { title: '٢. مناطق التوصيل', content: 'نقدم التوصيل داخل سلطنة عُمان (مسقط والمناطق الأخرى). قد تختلف تكلفة الشحن حسب المنطقة والحجم. يمكن الاطلاع على تفاصيل الشحن عند إتمام الطلب.' },
        { title: '٣. أوقات التسليم', content: 'أوقات التسليم تقديرية وتتراوح عادةً بين ٣ إلى ٧ أيام عمل حسب المنطقة. سنحاول إبلاغك بأي تأخير متوقع. لا نتحمل مسؤولية التأخير الناتج عن ظروف خارجة عن إرادتنا.' },
        { title: '٤. تكلفة الشحن', content: 'تُحسب تكلفة الشحن عند إتمام الطلب وفقاً للعنوان والوزن/الحجم. قد نقدم شحناً مجانياً للطلبات التي تتجاوز حداً معيناً وفقاً لعروضنا الحالية.' },
        { title: '٥. تتبع الشحنة', content: 'بعد شحن الطلب، سنزودك برقم تتبع (إن أمكن) عبر البريد الإلكتروني أو الرسائل النصية لتتبع حالة توصيلك.' },
        { title: '٦. استلام الطلب', content: 'يجب أن يكون شخص بالغ قادر على استلام الطلب في العنوان المحدد. في حال عدم التوفر، قد يتم إعادة المحاولة أو ترك الطلب وفقاً لسياسة شركة الشحن.' },
        { title: '٧. الأضرار أو الفقدان', content: 'في حال وصول المنتج تالفاً أو مفقوداً، يرجى إبلاغنا خلال ٤٨ ساعة من الاستلام مع إرفاق صور إن أمكن. سنتعاون معك ومع شركة الشحن لحل الأمر.' },
        { title: '٨. التعديلات', content: 'قد نعدّل سياسة الشحن من وقت لآخر. التعديلات سارية من تاريخ النشر على الموقع. للاستفسارات: sinadco.om@gmail.com أو صفحة «تواصل معنا».' },
      ]
    : [
        { title: '1. Scope', content: 'This Shipping Policy applies to all orders placed through the SINAD website within the Sultanate of Oman. We are committed to delivering your products safely and on time.' },
        { title: '2. Delivery Areas', content: 'We deliver within the Sultanate of Oman (Muscat and other regions). Shipping costs may vary by area and size. Shipping details are shown at checkout.' },
        { title: '3. Delivery Times', content: 'Delivery times are estimates, typically 3 to 7 business days depending on the region. We will try to notify you of any expected delay. We are not liable for delay due to circumstances beyond our control.' },
        { title: '4. Shipping Cost', content: 'Shipping cost is calculated at checkout based on address and weight/size. We may offer free shipping for orders above a certain threshold as per current offers.' },
        { title: '5. Shipment Tracking', content: 'After your order is shipped, we will provide a tracking number (where available) by email or SMS so you can track your delivery.' },
        { title: '6. Receiving the Order', content: 'An adult must be available to receive the order at the specified address. If unavailable, a second attempt or leave-at-door may apply as per the carrier\'s policy.' },
        { title: '7. Damage or Loss', content: 'If the product arrives damaged or is lost, please notify us within 48 hours of receipt with photos if possible. We will work with you and the carrier to resolve the matter.' },
        { title: '8. Amendments', content: 'We may amend this Shipping Policy from time to time. Amendments are effective from the date of publication on the site. For enquiries: sinadco.om@gmail.com or our Contact page.' },
      ];

  const lastUpdated = isRTL ? 'آخر تحديث: فبراير ٢٠٢٦' : 'Last updated: February 2026';

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-brown-dark mb-2 text-center">
        {isRTL ? 'سياسة الشحن' : 'Shipping Policy'}
      </h1>
      <p className="text-center text-gray-600 mb-10">{lastUpdated}</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        {sections.map((section, index) => (
          <section key={index} className="bg-white/80 rounded-xl p-6 border border-accent-tan/50">
            <h2 className="text-xl font-bold text-brown-dark mb-3">{section.title}</h2>
            <p className={isRTL ? 'text-right' : 'text-left'} dir={isRTL ? 'rtl' : 'ltr'}>
              {section.content}
            </p>
          </section>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href={`/${lang}/contact`} className="btn-primary inline-block">
          {isRTL ? 'تواصل معنا' : 'Contact Us'}
        </Link>
        <Link
          href={`/${lang}`}
          className="ml-4 inline-block px-6 py-3 border-2 border-brown-primary text-brown-primary rounded-lg font-semibold hover:bg-brown-primary hover:text-primary-cream transition-all"
        >
          {isRTL ? 'الرئيسية' : 'Home'}
        </Link>
      </div>
    </div>
  );
}
