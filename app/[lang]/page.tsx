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
    <div>
      {/* Hero - Responsive heights and text sizes */}
      <AnimatedSection className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center texture-overlay bg-gradient-to-br from-primary-bg to-accent-tan">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brown-dark mb-4 sm:mb-6 leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brown-primary mb-6 sm:mb-8 leading-relaxed">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href={`/${lang}/products`} className="btn-primary text-center">
                {t.discoverProducts}
              </Link>
              <Link href={`/${lang}/green-points`} className="btn-secondary text-center">
                {t.greenPoints}
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* About – من نحن */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20 bg-primary-cream" delay={0.1}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className={isRTL ? 'md:order-2' : ''}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-dark mb-4 sm:mb-6">
                {t.whoWeAre}
                </h2>    </div>
            <div className={isRTL ? 'md:order-1' : ''}>
              <Image src="/about-image.jpg" alt={t.whoWeAre} width={500} height={500} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}