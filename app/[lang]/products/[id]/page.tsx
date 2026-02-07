'use client';

import { useParams, useRouter } from 'next/navigation';
import { Language, translations } from '@/Lib/translations';
import { products } from '@/Lib/products';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart, FiMinus, FiPlus } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const lang = (params.lang as Language) || 'en';
  const t = translations[lang];
  const isRTL = lang === 'ar';
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-xl text-gray-600">{isRTL ? 'المنتج غير موجود' : 'Product not found'}</p>
        <Link href={`/${lang}/products`} className="btn-primary mt-4 inline-block">
          {t.products}
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    try {
      const cart = JSON.parse(sessionStorage.getItem('sanad_cart') || '[]');
      cart.push({ id: product.id, quantity, name: product.name, nameAr: product.nameAr, price: product.price });
      sessionStorage.setItem('sanad_cart', JSON.stringify(cart));
    } catch (_) {}
    router.push(`/${lang}/checkout`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="container mx-auto px-4 py-12"
    >
      <div className="mb-8 text-sm text-gray-600">
        <Link href={`/${lang}`} className="hover:text-gold transition-colors">{t.home}</Link>
        <span className="mx-2">/</span>
        <Link href={`/${lang}/products`} className="hover:text-gold transition-colors">{t.products}</Link>
        <span className="mx-2">/</span>
        <span className="text-brown-dark font-medium">{isRTL ? product.nameAr : product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-96 bg-primary-cream rounded-2xl overflow-hidden mb-4">
            <Image
              src={product.image}
              alt={isRTL ? product.nameAr : product.name}
              fill
              className="object-contain p-8"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-4xl font-bold text-brown-dark mb-4">
            {isRTL ? product.nameAr : product.name}
          </h1>
          <div className="text-3xl font-bold text-gold mb-6">
            {product.price} {t.omr}
          </div>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {isRTL ? product.descriptionFullAr : product.descriptionFull}
          </p>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isRTL ? 'الكمية' : 'Quantity'}
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 flex items-center justify-center transition-colors"
              >
                <FiMinus />
              </button>
              <span className="text-xl font-bold w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 flex items-center justify-center transition-colors"
              >
                <FiPlus />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full btn-primary flex items-center justify-center gap-2 text-lg"
          >
            <FiShoppingCart />
            {t.addToCart}
          </button>

          <div className="mt-12 space-y-6">
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-brown-dark mb-3">
                {isRTL ? 'المكونات الطبيعية' : 'Natural Ingredients'}
              </h3>
              <ul className="space-y-2">
                {(isRTL ? product.ingredientsAr : product.ingredients).map((ingredient: string, index: number) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-green-dark">🌿</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-brown-dark mb-3">
                {isRTL ? 'طريقة الاستخدام' : 'How to Use'}
              </h3>
              <p className="text-gray-700">
                {isRTL ? product.howToUseAr : product.howToUse}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-brown-dark mb-3">
                {isRTL ? 'المواصفات الفنية' : 'Technical Specifications'}
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">{isRTL ? 'التغطية:' : 'Coverage:'}</span>
                  <span className="ml-2">10-15 m²</span>
                </div>
                <div>
                  <span className="font-medium">{isRTL ? 'وقت الجفاف:' : 'Drying time:'}</span>
                  <span className="ml-2">{product.id === 'liquid' ? '6h' : product.id === 'paste' ? '12h' : '24h'}</span>
                </div>
                <div>
                  <span className="font-medium">{isRTL ? 'الضمان:' : 'Warranty:'}</span>
                  <span className="ml-2">{isRTL ? '5 سنوات' : '5 years'}</span>
                </div>
                <div>
                  <span className="font-medium">{isRTL ? 'قابل للتدوير:' : 'Recyclable:'}</span>
                  <span className="ml-2">100%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
