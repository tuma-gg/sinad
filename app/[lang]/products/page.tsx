import { Language, translations } from '@/Lib/translations';
import { products } from '@/Lib/products';
import ProductCard from '@/components/ProductCard';
import { AnimatedItem } from '@/components/AnimatedSection';

export default async function ProductsListPage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  const t = translations[lang];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-brown-dark text-center mb-4">
        {t.ourProducts}
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        {lang === 'ar'
          ? 'اختر المنتج لعرض التفاصيل والسعر وإضافته إلى السلة'
          : 'Choose a product to view details, price, and add to cart'}
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <AnimatedItem key={product.id} index={index}>
            <ProductCard lang={lang} product={product} />
          </AnimatedItem>
        ))}
      </div>
    </div>
  );
}
