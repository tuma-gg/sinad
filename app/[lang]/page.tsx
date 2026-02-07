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
      icon: <FiCheckCircle className="text-4xl text-green-dark" />,
      title: isRTL ? 'الاقتصاد الدائري' : 'Circular Economy',
      description: isRTL ? 'تحويل النفايات إلى موارد قيّمة' : 'Transforming waste into valuable resources',
    },
    {
      icon: <FiAward className="text-4xl text-green-dark" />,
      title: isRTL ? 'مواد عُمانية محلية' : 'Local Omani Materials',
      description: isRTL ? 'أصداف بحرية ونواة تمر عُمانية' : 'Omani oyster shells and date seeds',
    },
    {
      icon: <FiCheckCircle className="text-4xl text-green-dark" />,
      title: isRTL ? 'صديق للبيئة' : 'Eco-Friendly',
      description: isRTL ? '100% قابل للتدوير ومستدام' : '100% recyclable and sustainable',
    },
    {
      icon: <FiDollarSign className="text-4xl text-green-dark" />,
      title: isRTL ? 'اقتصادي ومتين' : 'Cost-Effective & Durable',
      description: isRTL ? 'يطيل عمر المباني بتكلفة أقل' : 'Extends building life at lower cost',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <AnimatedSection className="relative min-h-[600px] flex items-center texture-overlay bg-gradient-to-br from-primary-bg to-accent-tan">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-brown-dark mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-xl text-brown-primary mb-8">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/${lang}/products`} className="btn-primary">
                {t.discoverProducts}
              </Link>
              <Link href={`/${lang}/green-points`} className="btn-secondary">
                {t.greenPoints}
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* About – من نحن */}
      <AnimatedSection className="py-20 bg-primary-cream" delay={0.1}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={isRTL ? 'md:order-2' : ''}>
              <h2 className="text-4xl font-bold text-brown-dark mb-6">{t.whoWeAre}</h2>
              <h3 className="text-xl font-semibold text-brown-primary mb-4">{t.aboutTitle}</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {t.aboutText}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.aboutText2}
              </p>
            </div>
            <div className={`${isRTL ? 'md:order-1' : ''} relative h-80 sm:h-96 bg-accent-tan rounded-2xl overflow-hidden`}>
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
      <AnimatedSection className="py-20 texture-overlay bg-primary-bg" delay={0.05}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brown-dark text-center mb-12">
            {t.ourProducts}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <AnimatedItem key={product.id} index={index}>
                <ProductCard lang={lang} product={product} />
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why we're different */}
      <AnimatedSection className="py-20 bg-green-light" delay={0.05}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brown-dark text-center mb-12">
            {t.whyDifferent}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedItem key={index} index={index}>
                <div className="text-center p-6 bg-white rounded-xl hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-brown-dark mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 1. Green Points – برنامج النقاط الخضراء */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-green-dark to-green-light text-white texture-overlay" delay={0.05}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t.greenPointsTitle} 🌿
          </h2>
          <p className="text-xl mb-4">{t.earnPoints}</p>
          <p className="text-lg mb-8">{t.redeemRewards}</p>
          <Link href={`/${lang}/green-points`} className="inline-block px-8 py-4 bg-gold text-brown-dark rounded-lg font-bold text-lg hover:scale-105 transition-transform duration-300">
            {isRTL ? 'سجّل الآن' : 'Register Now'}
          </Link>
        </div>
      </AnimatedSection>

      {/* 2. Partners – شركاؤنا */}
      <AnimatedSection className="py-20 bg-primary-cream" delay={0.05}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brown-dark mb-12">
            {isRTL ? 'شركاؤنا وحلفاؤنا' : 'Our Partners & Alliances'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-24 bg-white rounded-lg flex items-center justify-center border border-gray-200 transition-shadow hover:shadow-lg duration-300">
                <span className="text-gray-400 text-sm">{isRTL ? 'شعار الشريك' : 'Partner Logo'}</span>
              </div>
            ))}
          </div>
          <Link href={`/${lang}/partners`} className="btn-secondary">
            {isRTL ? 'عرض جميع الشركاء' : 'View All Partners'}
          </Link>
        </div>
      </AnimatedSection>

      {/* 4. How products work */}
      <AnimatedSection className="py-20 bg-primary-bg" delay={0.05}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brown-dark text-center mb-12">
            {isRTL ? 'كيف تعمل المنتجات؟' : 'How Do The Products Work?'}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', titleAr: 'التحضير', titleEn: 'Preparation', textAr: 'جمع الأصداف ونواة التمر', textEn: 'Collect shells and date seeds' },
              { num: '2', titleAr: 'المعالجة', titleEn: 'Processing', textAr: 'طحن وخلط المواد الطبيعية', textEn: 'Grind and mix natural materials' },
              { num: '3', titleAr: 'التركيب', titleEn: 'Composition', textAr: 'إنتاج الخليط المركّب', textEn: 'Produce composite mixture' },
              { num: '4', titleAr: 'التطبيق', titleEn: 'Application', textAr: 'استخدام سهل في البناء', textEn: 'Easy use in construction' },
            ].map((step, index) => (
              <AnimatedItem key={step.num} index={index}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-brown-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark mb-2">
                    {isRTL ? step.titleAr : step.titleEn}
                  </h3>
                  <p className="text-gray-600">
                    {isRTL ? step.textAr : step.textEn}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 5. Quality – الجودة */}
      <AnimatedSection id="quality" className="py-20 texture-overlay bg-primary-cream" delay={0.05}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brown-dark text-center mb-12">
            {isRTL ? 'الجودة' : 'Quality'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { iconRTL: '✓', textAr: 'اختبارات معملية معتمدة', textEn: 'Certified laboratory tests' },
              { iconRTL: '✓', textAr: 'شهادات الجودة الدولية', textEn: 'International quality certificates' },
              { iconRTL: '✓', textAr: 'ضمان طويل الأمد', textEn: 'Long-term warranty' },
              { iconRTL: '✓', textAr: 'مطابقة للمواصفات العُمانية', textEn: 'Omani specifications compliant' },
            ].map((item, index) => (
              <AnimatedItem key={index} index={index}>
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                  <span className="text-2xl text-green-dark">{item.iconRTL}</span>
                  <p className="text-gray-700">{isRTL ? item.textAr : item.textEn}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 6. Media – للاعلام و التواصل و التغطيه */}
      <AnimatedSection className="py-20 texture-overlay bg-primary-bg" delay={0.05}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brown-dark mb-6">
            {t.mediaTitle}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            {t.mediaText}
          </p>
          <Link href={`/${lang}/media`} className="btn-primary">
            {isRTL ? 'للإعلام والتواصل والتغطية' : 'Media, Communication & Coverage'}
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
