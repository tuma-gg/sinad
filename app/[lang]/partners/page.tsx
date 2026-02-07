import { Language } from '@/Lib/translations';
import PartnerForm from './PartnerForm';

export default async function PartnersPage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  const isRTL = lang === 'ar';

  const partnerCategories = [
    {
      titleAr: 'الجهات الحكومية',
      titleEn: 'Government Entities',
      partners: [
        { nameAr: 'وزارة البيئة والشؤون المناخية', nameEn: 'Ministry of Environment & Climate Affairs', type: 'Certification Partner' },
        { nameAr: 'بلدية مسقط', nameEn: 'Muscat Municipality', type: 'Infrastructure Partner' },
        { nameAr: 'الهيئة العامة للصناعات الحرفية', nameEn: 'Public Authority for Craft Industries', type: 'Development Partner' },
      ],
    },
    {
      titleAr: 'شركات البناء',
      titleEn: 'Construction Companies',
      partners: [
        { nameAr: 'شركة البناء العُمانية', nameEn: 'Omani Construction Company', type: 'Major Client' },
        { nameAr: 'مجموعة التطوير العقاري', nameEn: 'Real Estate Development Group', type: 'Strategic Partner' },
        { nameAr: 'شركة المقاولات الساحلية', nameEn: 'Coastal Contractors LLC', type: 'Distribution Partner' },
      ],
    },
    {
      titleAr: 'منظمات الاستدامة',
      titleEn: 'Sustainability Organizations',
      partners: [
        { nameAr: 'جمعية البيئة العُمانية', nameEn: 'Environment Society of Oman', type: 'Environmental Partner' },
        { nameAr: 'مركز الاقتصاد الدائري', nameEn: 'Circular Economy Center', type: 'Research Partner' },
        { nameAr: 'شبكة المباني الخضراء', nameEn: 'Green Building Network', type: 'Certification Body' },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-bg to-accent-tan py-20 texture-overlay">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-brown-dark mb-6">
            {isRTL ? 'شركاؤنا وحلفاؤنا' : 'Our Partners & Alliances'}
          </h1>
          <p className="text-xl text-brown-primary max-w-2xl mx-auto">
            {isRTL 
              ? 'نفخر بالتعاون مع أفضل المؤسسات الحكومية والخاصة لتحقيق مستقبل مستدام'
              : 'Proud to collaborate with leading government and private institutions for a sustainable future'
            }
          </p>
        </div>
      </section>

      {/* Partners by Category */}
      {partnerCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={categoryIndex % 2 === 0 ? 'bg-primary-cream py-16' : 'bg-primary-bg py-16'}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-brown-dark mb-10">
              {isRTL ? category.titleAr : category.titleEn}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {category.partners.map((partner, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border-2 border-accent-tan hover:border-gold hover:shadow-xl transition-all group">
                  {/* Logo Placeholder */}
                  <div className="w-full h-32 bg-primary-bg rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                    <span className="text-4xl text-brown-primary">🏢</span>
                  </div>

                  {/* Partner Info */}
                  <h3 className="text-lg font-bold text-brown-dark mb-2">
                    {isRTL ? partner.nameAr : partner.nameEn}
                  </h3>
                  <p className="text-sm text-gold font-medium mb-3">{partner.type}</p>
                  <p className="text-sm text-gray-600">
                    {isRTL 
                      ? 'شريك استراتيجي في تطوير حلول البناء المستدام'
                      : 'Strategic partner in developing sustainable building solutions'
                    }
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Become a Partner CTA */}
      <section className="py-20 bg-gradient-to-r from-brown-primary to-brown-dark text-white texture-overlay">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {isRTL ? 'هل تريد أن تكون شريكاً؟' : 'Want to Become a Partner?'}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {isRTL
              ? 'انضم إلى شبكتنا من الشركاء الملتزمين بالاستدامة والابتكار. استخدم النموذج أدناه أو تواصل معنا مباشرة.'
              : 'Join our network of partners committed to sustainability and innovation. Use the form below or contact us directly.'}
          </p>
          <a
            href="#partner-form"
            className="inline-block px-8 py-4 bg-gold text-brown-dark rounded-lg font-bold text-lg hover:scale-105 transition-transform"
          >
            {isRTL ? 'املأ نموذج الشراكة' : 'Fill partnership form'}
          </a>
          <a
            href={`/${lang}/contact`}
            className="inline-block ms-4 mt-4 sm:mt-0 px-8 py-4 border-2 border-gold text-gold rounded-lg font-bold text-lg hover:bg-gold hover:text-brown-dark transition-all"
          >
            {isRTL ? 'تواصل معنا' : 'Contact Us'}
          </a>
        </div>
      </section>

      <PartnerForm lang={lang} />
    </div>
  );
}