'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Language, translations } from '@/Lib/translations';
import { FiShoppingCart } from 'react-icons/fi';

interface ProductCardProps {
  lang: Language;
  product: {
    id: string;
    name: string;
    nameAr: string;
    price: number;
    image: string;
    description: string;
    descriptionAr: string;
  };
}

export default function ProductCard({ lang, product }: ProductCardProps) {
  const router = useRouter();
  const t = translations[lang];
  const isRTL = lang === 'ar';

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const cart = JSON.parse(sessionStorage.getItem('sanad_cart') || '[]');
      cart.push({ id: product.id, quantity: 1, name: product.name, nameAr: product.nameAr, price: product.price });
      sessionStorage.setItem('sanad_cart', JSON.stringify(cart));
    } catch (_) {}
    router.push(`/${lang}/checkout`);
  };

  return (
    <motion.div
      className="card group"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      {/* Product Image */}
      <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden bg-primary-cream">
        <Image
          src={product.image}
          alt={isRTL ? product.nameAr : product.name}
          fill
          className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <h3 className="text-xl font-bold text-brown-dark mb-2">
        {isRTL ? product.nameAr : product.name}
      </h3>
      
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {isRTL ? product.descriptionAr : product.description}
      </p>

      {/* Price */}
      <div className="text-2xl font-bold text-gold mb-4">
        {product.price} {t.omr}
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <Link
          href={`/${lang}/products/${product.id}`}
          className="flex-1 text-center px-4 py-2 border-2 border-brown-primary text-brown-primary rounded-lg hover:bg-brown-primary hover:text-white transition-all font-medium"
        >
          {t.viewDetails}
        </Link>
        
        <button
          onClick={handleAddToCart}
          className="px-4 py-2 bg-brown-primary text-white rounded-lg hover:bg-gold hover:text-brown-dark transition-all flex items-center gap-2"
        >
          <FiShoppingCart />
        </button>
      </div>
    </motion.div>
  );
}