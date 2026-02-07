import { Language, translations } from '@/Lib/translations';
import { products } from '@/Lib/products';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import Image from 'next/image';
import { FiCheckCircle, FiAward, FiDollarSign } from 'react-icons/fi';
import { AnimatedSection, AnimatedItem } from '@/components/AnimatedSection';

export default async function HomePage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  const t = translations[lang];
  const isRTL = lang === 'ar';

  const features = [
    {
      icon: <FiCheckCircle className="text-3xl sm:text-4xl text-green-dark" />,
      title: isRTL ? 'الاقتصاد الدائري' : 'Circular Economy',
      description: isRTL ? 'تحويل النفايات إلى موارد قيّمة' : 'Transforming waste into valuable resources',
    },
    {
      icon: <FiAward className="text-3xl sm:text-4xl text-green-dark" />,
      title: isRTL ? 'مواد عُمانية محلية' : 'Local Omani Materials',
      description: isRTL ? 'أصداف بحرية ونواة تمر عُمانية' : 'Omani oyster shells and date seeds',
    },
    {
      icon: <FiCheckCircle className="text-3xl sm:text-4xl text-green-dark" />,
      title: isRTL ? 'صديق للبيئة' : 'Eco-Friendly',
      description: isRTL ? '100% قابل للتدوير ومستدام' : '100% recyclable and sustainable',
    },
    {
      icon: <FiDollarSign className="text-3xl sm:text-4xl text-green-dark" />,
      title: isRTL ? 'اقتصادي ومتين' : 'Cost-Effective & Durable',
      description: isRTL ? 'يطيل عمر المباني بتكلفة أقل' : 'Extends building life at lower cost',
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero - Fully centered on mobile */}
      <AnimatedSection className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center justify-center texture-overlay bg-gradient-to-br from-primary-bg to-accent-tan">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="w-full max-w-3xl mx-auto text-center lg:mx-0 lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brown-dark mb-4 sm:mb-6 leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brown-primary mb-6 sm:mb-8 leading-relaxed">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-center justify-center lg:justify-start">
              <Link href={`/${lang}/products`} className="btn-primary w-full sm:w-auto text-center">
                {t.discoverProducts}
              </Link>
              <Link href={`/${lang}/green-points`} className="btn-secondary w-full sm:w-auto text-center">
                {t.greenPoints}
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* About – من نحن - Centered on mobile */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20 bg-primary-cream" delay={0.1}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className={`text-center md:text-left ${isRTL ? 'md:order-2 md:text-right' : ''}`}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-dark mb-4 sm:mb-6">
                {t.whoWeAre}
              </h2>
              <h3 className="text-lg sm:text-xl font-semibold text-brown-primary mb-3 sm:mb-4">
                {t.aboutTitle}
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                {t.aboutText}
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {t.aboutText2}
              </p>
            </div>
            <div className={`${isRTL ? 'md:order-1' : ''} relative h-64 sm:h-80 lg:h-96 bg-accent-tan rounded-2xl overflow-hidden w-full max-w-md mx-auto md:max-w-none md:mx-0`}>
              <Image
                src="/images/about-materials.png"
                alt={isRTL ? 'أصداف بحرية ومواد طبيعية عُمانية' : 'Omani seashells and natural materials'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* What we offer – Products */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20 texture-overlay bg-primary-bg" delay={0.05}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-dark text-center mb-8 sm:mb-12">
            {t.ourProducts}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-sm sm:max-w-none mx-auto">
            {products.map((product, index) => (
              <AnimatedItem key={product.id} index={index}>
                <ProductCard lang={lang} product={product} />
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why we're different */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20 bg-green-light" delay={0.05}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-dark text-center mb-8 sm:mb-12">
            {t.whyDifferent}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-sm sm:max-w-none mx-auto">
            {features.map((feature, index) => (
              <AnimatedItem key={index} index={index}>
                <div className="text-center p-5 sm:p-6 bg-white rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-3 sm:mb-4">{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-brown-dark mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Green Points – برنامج النقاط الخضراء */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-green-dark to-green-light text-white texture-overlay" delay={0.05}>
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            {t.greenPointsTitle} 🌿
          </h2>
          <p className="text-lg sm:text-xl mb-3 sm:mb-4">{t.earnPoints}</p>
          <p className="text-base sm:text-lg mb-6 sm:mb-8">{t.redeemRewards}</p>
          <Link href={`/${lang}/green-points`} className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gold text-brown-dark rounded-lg font-bold text-base sm:text-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto max-w-xs sm:max-w-none">
            {isRTL ? 'سجّل الآن' : 'Register Now'}
          </Link>
        </div>
      </AnimatedSection>

      {/* Partners – شركاؤنا */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20 bg-primary-cream" delay={0.05}>
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-dark mb-8 sm:mb-12">
            {isRTL ? 'شركاؤنا وحلفاؤنا' : 'Our Partners & Alliances'}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 max-w-xs sm:max-w-none mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-20 sm:h-24 bg-white rounded-lg flex items-center justify-center border border-gray-200 transition-shadow hover:shadow-lg duration-300">
                <span className="text-gray-400 text-xs sm:text-sm">{isRTL ? 'شعار الشريك' : 'Partner Logo'}</span>
              </div>
            ))}
          </div>
          <Link href={`/${lang}/partners`} className="btn-secondary inline-block w-full sm:w-auto max-w-xs sm:max-w-none">
            {isRTL ? 'عرض جميع الشركاء' : 'View All Partners'}
          </Link>
        </div>
      </AnimatedSection>

      {/* How products work */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20 bg-primary-bg" delay={0.05}>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-dark text-center mb-8 sm:mb-12">
            {isRTL ? 'كيف تعمل المنتجات؟' : 'How Do The Products Work?'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-sm sm:max-w-none mx-auto">
            {[
              { num: '1', titleAr: 'التحضير', titleEn: 'Preparation', textAr: 'جمع الأصداف ونواة التمر', textEn: 'Collect shells and date seeds' },
              { num: '2', titleAr: 'المعالجة', titleEn: 'Processing', textAr: 'طحن وخلط المواد الطبيعية', textEn: 'Grind and mix natural materials' },
              { num: '3', titleAr: 'التركيب', titleEn: 'Composition', textAr: 'إنتاج الخليط المركّب', textEn: 'Produce composite mixture' },
              { num: '4', titleAr: 'التطبيق', titleEn: 'Application', textAr: 'استخدام سهل في البناء', textEn: 'Easy use in construction' },
            ].map((step, index) => (
              <AnimatedItem key={step.num} index={index}>
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brown-primary text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-3 sm:mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-brown-dark mb-2">
                    {isRTL ? step.titleAr : step.titleEn}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {isRTL ? step.textAr : step.textEn}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Quality – الجودة */}
      <AnimatedSection id="quality" className="py-12 sm:py-16 lg:py-20 texture-overlay bg-primary-cream" delay={0.05}>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-dark text-center mb-8 sm:mb-12">
            {isRTL ? 'الجودة' : 'Quality'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-sm sm:max-w-none mx-auto">
            {[
              { iconRTL: '✓', textAr: 'اختبارات معملية معتمدة', textEn: 'Certified laboratory tests' },
              { iconRTL: '✓', textAr: 'شهادات الجودة الدولية', textEn: 'International quality certificates' },
              { iconRTL: '✓', textAr: 'ضمان طويل الأمد', textEn: 'Long-term warranty' },
              { iconRTL: '✓', textAr: 'مطابقة للمواصفات العُمانية', textEn: 'Omani specifications compliant' },
            ].map((item, index) => (
              <AnimatedItem key={index} index={index}>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-4 sm:p-5 bg-white rounded-lg text-center sm:text-left">
                  <span className="text-xl sm:text-2xl text-green-dark flex-shrink-0">{item.iconRTL}</span>
                  <p className="text-sm sm:text-base text-gray-700">{isRTL ? item.textAr : item.textEn}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Media – للاعلام و التواصل و التغطيه */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20 texture-overlay bg-primary-bg" delay={0.05}>
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-dark mb-4 sm:mb-6">
            {t.mediaTitle}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            {t.mediaText}
          </p>
          <Link href={`/${lang}/media`} className="btn-primary inline-block w-full sm:w-auto max-w-xs sm:max-w-none">
            {isRTL ? 'للإعلام والتواصل والتغطية' : 'Media, Communication & Coverage'}
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}