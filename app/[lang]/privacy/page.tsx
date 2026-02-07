import { Language } from '@/Lib/translations';
import Link from 'next/link';

export default async function PrivacyPage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  const isRTL = lang === 'ar';

  const sections = isRTL
    ? [
        { title: '١. المقدمة', content: 'شركة سِناد («نحن»، «لنا»، «التابع لنا») تحترم خصوصيتك وتلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية والأمان هذه كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك عند استخدام موقعنا وخدماتنا.' },
        { title: '٢. المعلومات التي نجمعها', content: 'قد نجمع: الاسم، عنوان البريد الإلكتروني، رقم الهاتف، العنوان، ومعلومات الطلب أو التبرع؛ بيانات تقنية (عنوان IP، نوع المتصفح، الجهاز)؛ وملفات تعريف الارتباط (كوكيز) وبيانات استخدام الموقع. نجمّع فقط ما هو ضروري لتقديم الخدمة وتحسين تجربتك.' },
        { title: '٣. كيف نستخدم معلوماتك', content: 'نستخدم البيانات لتقديم المنتجات والطلبات وبرنامج النقاط الخضراء؛ للرد على استفساراتك؛ لتحسين الموقع والأمان؛ لإرسال تحديثات أو عروض (بموافقتك)؛ وللوفاء بالالتزامات القانونية.' },
        { title: '٤. الأساس القانوني', content: 'نعالج بياناتك على أساس تنفيذ العقد، الموافقة، الالتزام القانوني، والمصالح المشروعة (تشغيل الموقع، الأمان، التحسين).' },
        { title: '٥. مشاركة البيانات والإفصاح', content: 'لا نبيع بياناتك الشخصية. قد نشارك البيانات مع مقدمي خدمات موثوقين (استضافة، دفع، شحن) فقط بقدر ما يلزم لتنفيذ الخدمة، ونلزمهم بمعايير الخصوصية والأمان. قد نكشف عن البيانات عند طلب القانون أو السلطات المختصة.' },
        { title: '٦. الاحتفاظ بالبيانات', content: 'نحتفظ ببياناتك طالما كان حسابك نشطاً أو كما يتطلب القانون. يمكن حذف أو إخفاء البيانات بعد انتهاء الحاجة أو عند طلبك وفقاً لحقوقك.' },
        { title: '٧. الأمان والحماية', content: 'نطبق تدابير فنية وتنظيمية مناسبة: تشفير النقل (HTTPS)، حماية الوصول، مراجعات أمنية، وتقييد الوصول إلى البيانات الشخصية. نطلب من شركائنا الالتزام بممارسات أمنية مناسبة.' },
        { title: '٨. حقوقك', content: 'لديك الحق في: الوصول إلى بياناتك؛ تصحيحها؛ حذفها («الحق في النسيان»)؛ نقل البيانات؛ الاعتراض على معالجة معينة؛ سحب الموافقة؛ والتقدم بشكوى إلى الجهة الرقابية. للاستفادة من هذه الحقوق، تواصل معنا على sinadco.om@gmail.com.' },
        { title: '٩. ملفات تعريف الارتباط (الكوكيز)', content: 'نستخدم كوكيز ضرورية لتشغيل الموقع (مثل تذكر اللغة)، وتحليلية لتحسين الخدمة. يمكنك ضبط إعدادات المتصفح لرفض أو حذف الكوكيز، مع العلم أن بعض الميزات قد لا تعمل بشكل كامل.' },
        { title: '١٠. روابط الطرف الثالث', content: 'قد يحتوي الموقع على روابط لمواقع أخرى (مثل وسائل التواصل الاجتماعي). نحن لسنا مسؤولين عن ممارسات الخصوصية لتلك المواقع. ننصح بقراءة سياساتهم قبل مشاركة أي بيانات.' },
        { title: '١١. خصوصية القاصرين', content: 'خدماتنا غير موجهة لمن تقل أعمارهم عن السن القانوني. لا نجمع بيانات قاصرين عن قصد. إن علمنا بجمع بيانات قاصر دون موافقة ولي الأمر، سنتخذ خطوات لحذفها.' },
        { title: '١٢. التحديثات على السياسة', content: 'قد نحدّث سياسة الخصوصية والأمان من وقت لآخر. سننشر أي تغيير على هذه الصفحة ونحدّث تاريخ «آخر تحديث». ننصح بمراجعة هذه الصفحة دورياً.' },
        { title: '١٣. تواصل معنا', content: 'لأي استفسار حول الخصوصية أو الأمان أو لممارسة حقوقك، راسلنا على: sinadco.om@gmail.com أو عبر صفحة «تواصل معنا». سنرد في غضون فترة زمنية معقولة.' },
      ]
    : [
        { title: '1. Introduction', content: 'SINAD («we», «us», «our») respects your privacy and is committed to protecting your personal data. This Privacy and Security Policy explains how we collect, use, and protect your information when you use our website and services.' },
        { title: '2. Information We Collect', content: 'We may collect: name, email address, phone number, address, and order or donation details; technical data (IP address, browser type, device); and cookies and usage data. We only collect what is necessary to provide the service and improve your experience.' },
        { title: '3. How We Use Your Information', content: 'We use data to provide products, orders, and the Green Points programme; to respond to your enquiries; to improve the website and security; to send updates or offers (with your consent); and to comply with legal obligations.' },
        { title: '4. Legal Basis', content: 'We process your data on the basis of contract performance, consent, legal obligation, and legitimate interests (running the website, security, improvement).' },
        { title: '5. Data Sharing and Disclosure', content: 'We do not sell your personal data. We may share data with trusted service providers (hosting, payment, shipping) only as necessary to perform the service, and we require them to meet privacy and security standards. We may disclose data when required by law or competent authorities.' },
        { title: '6. Data Retention', content: 'We retain your data for as long as your account is active or as required by law. Data may be deleted or anonymised after it is no longer needed or upon your request in line with your rights.' },
        { title: '7. Security and Protection', content: 'We implement appropriate technical and organisational measures: encryption in transit (HTTPS), access controls, security reviews, and restricted access to personal data. We require our partners to follow appropriate security practices.' },
        { title: '8. Your Rights', content: 'You have the right to: access your data; have it corrected; have it deleted («right to be forgotten»); data portability; object to certain processing; withdraw consent; and lodge a complaint with a supervisory authority. To exercise these rights, contact us at sinadco.om@gmail.com.' },
        { title: '9. Cookies', content: 'We use essential cookies to run the site (e.g. language preference) and analytics cookies to improve the service. You can adjust your browser settings to refuse or delete cookies; note that some features may not work fully.' },
        { title: '10. Third-Party Links', content: 'The website may contain links to other sites (e.g. social media). We are not responsible for their privacy practices. We advise reading their policies before sharing any data.' },
        { title: '11. Children\'s Privacy', content: 'Our services are not directed at anyone below the legal age of majority. We do not knowingly collect data from minors. If we become aware that we have collected data from a minor without parental consent, we will take steps to delete it.' },
        { title: '12. Updates to This Policy', content: 'We may update this Privacy and Security Policy from time to time. We will post any changes on this page and update the «Last updated» date. We encourage you to review this page periodically.' },
        { title: '13. Contact Us', content: 'For any questions about privacy or security, or to exercise your rights, email us at sinadco.om@gmail.com or use our Contact page. We will respond within a reasonable time.' },
      ];

  const lastUpdated = isRTL ? 'آخر تحديث: فبراير ٢٠٢٦' : 'Last updated: February 2026';

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-brown-dark mb-2 text-center">
        {isRTL ? 'سياسة الخصوصية والأمان' : 'Privacy and Security Policy'}
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
        <Link
          href={`/${lang}/contact`}
          className="btn-primary inline-block"
        >
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
