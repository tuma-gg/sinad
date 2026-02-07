import { Language } from '@/Lib/translations';
import Link from 'next/link';

export default async function TermsPage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  const isRTL = lang === 'ar';

  const sections = isRTL
    ? [
        { title: '١. القبول بالشروط', content: 'باستخدامك موقع سِناد وخدماتها فإنك توافق على الالتزام بهذه الشروط والأحكام. إن كنت لا توافق عليها، يرجى عدم استخدام الموقع أو الخدمات.' },
        { title: '٢. الخدمات والمنتجات', content: 'نقدم معلومات عن منتجات البناء المستدامة، مبيعات، برنامج النقاط الخضراء، وخدمات ذات صلة. نحتفظ بالحق في تعديل أو إيقاف أي خدمة دون إشعار مسبق عند الاقتضاء.' },
        { title: '٣. الطلبات والدفع', content: 'الطلبات خاضعة للتوفّر والقبول. الأسعار المعروضة قابلة للتغيير. أنت مسؤول عن دقة معلومات الطلب والدفع. نلتزم بمعايير آمنة لمعالجة الدفع.' },
        { title: '٤. الشحن والتسليم', content: 'أوقات التسليم تقديرية وليست ملزمة. لا نتحمل مسؤولية التأخير الناتج عن ظروف خارجة عن إرادتنا. المخاطر تنتقل إليك عند التسليم وفقاً للشروط المتفق عليها.' },
        { title: '٥. الإرجاع والاسترداد', content: 'تخضع إجراءات الإرجاع والاسترداد لسياسة الإرجاع المنشورة. يجب إرجاع المنتجات بحالتها الأصلية ضمن المدة المحددة. الاسترداد قد يكون نقداً أو رصيداً حسب السياسة.' },
        { title: '٦. الاستخدام المقبول', content: 'تتعهد بعدم استخدام الموقع أو الخدمات لأغراض غير قانونية أو مخالفة لهذه الشروط، أو لإلحاق ضرر بأنظمتنا أو مستخدمين آخرين. يحق لنا تعليق أو إنهاء الوصول عند المخالفة.' },
        { title: '٧. الملكية الفكرية', content: 'جميع المحتويات (نصوص، شعارات، صور، تصاميم) مملوكة لسِناد أو مرخّصة لها. لا يجوز نسخها أو استخدامها دون إذن كتابي مسبق.' },
        { title: '٨. إعفاء المسؤولية', content: 'المعلومات على الموقع لأغراض عامة ولا تشكل مشورة مهنية. نقدم المنتجات «كما هي» ضمن الضمانات المعبر عنها. لا نتحمل مسؤولية الأضرار غير المباشرة أو التبعية إلا في الحدود التي يسمح بها القانون.' },
        { title: '٩. تحديد المسؤولية', content: 'في أقصى حد يسمح به القانون، لا تتجاوز مسؤوليتنا إزاء أي مطالبة مبلغ الطلب المعني أو المبلغ الذي دفعته لنا خلال الاثني عشر شهراً السابقة، أيهما أقل.' },
        { title: '١٠. الروابط الخارجية', content: 'الروابط إلى مواقع أخرى لا تعني تأييدنا لها. نحن غير مسؤولين عن محتوى أو ممارسات تلك المواقع.' },
        { title: '١١. القانون الحاكم والنزاعات', content: 'تخضع هذه الشروط لقوانين سلطنة عُمان. أي نزاع يُحل ودياً عند الإمكان، وإلا يُرفع إلى المحاكم المختصة في سلطنة عُمان.' },
        { title: '١٢. التعديلات', content: 'قد نعدّل هذه الشروط من وقت لآخر. التعديلات سارية من تاريخ النشر على الموقع. استمرارك في الاستخدام بعد التعديل يعني موافقتك على النسخة المحدّثة.' },
        { title: '١٣. التواصل', content: 'للاستفسارات حول الشروط والأحكام: sinadco.om@gmail.com أو عبر صفحة «تواصل معنا».' },
      ]
    : [
        { title: '1. Acceptance of Terms', content: 'By using the SINAD website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the site or services.' },
        { title: '2. Services and Products', content: 'We provide information on sustainable building products, sales, the Green Points programme, and related services. We reserve the right to modify or discontinue any service without prior notice where appropriate.' },
        { title: '3. Orders and Payment', content: 'Orders are subject to availability and acceptance. Prices displayed are subject to change. You are responsible for the accuracy of order and payment details. We use secure payment processing standards.' },
        { title: '4. Shipping and Delivery', content: 'Delivery times are estimates and not binding. We are not liable for delay due to circumstances beyond our control. Risk passes to you on delivery in accordance with agreed terms.' },
        { title: '5. Returns and Refunds', content: 'Return and refund procedures are subject to our published returns policy. Products must be returned in original condition within the specified period. Refunds may be in cash or credit as per policy.' },
        { title: '6. Acceptable Use', content: 'You agree not to use the site or services for unlawful purposes or in breach of these terms, or to harm our systems or other users. We may suspend or terminate access in case of breach.' },
        { title: '7. Intellectual Property', content: 'All content (text, logos, images, designs) is owned by or licensed to SINAD. It may not be copied or used without prior written permission.' },
        { title: '8. Disclaimer', content: 'Information on the site is for general purposes and does not constitute professional advice. We supply products «as is» subject to expressed warranties. We are not liable for indirect or consequential damages except to the extent permitted by law.' },
        { title: '9. Limitation of Liability', content: 'To the maximum extent permitted by law, our liability for any claim shall not exceed the amount of the order in question or the amount you paid to us in the twelve months prior, whichever is less.' },
        { title: '10. External Links', content: 'Links to third-party sites do not imply endorsement. We are not responsible for the content or practices of those sites.' },
        { title: '11. Governing Law and Disputes', content: 'These terms are governed by the laws of the Sultanate of Oman. Any dispute shall be resolved amicably where possible, otherwise before the competent courts in the Sultanate of Oman.' },
        { title: '12. Amendments', content: 'We may amend these terms from time to time. Amendments are effective from the date of publication on the site. Your continued use after amendment constitutes acceptance of the updated version.' },
        { title: '13. Contact', content: 'For enquiries about these Terms and Conditions: sinadco.om@gmail.com or via our Contact page.' },
      ];

  const lastUpdated = isRTL ? 'آخر تحديث: فبراير ٢٠٢٦' : 'Last updated: February 2026';

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-brown-dark mb-2 text-center">
        {isRTL ? 'الشروط والأحكام' : 'Terms & Conditions'}
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
