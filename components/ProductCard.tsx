'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
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
  const [weight, setWeight] = useState(1); // Default 1kg

  // Weight options in kg
  const weightOptions = [1, 2, 5, 10, 25];

  // Calculate total price based on weight
  const totalPrice = product.price * weight;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const cart = JSON.parse(sessionStorage.getItem('sanad_cart') || '[]');
      cart.push({ 
        id: product.id, 
        quantity: weight, // Using weight as quantity
        name: product.name, 
        nameAr: product.nameAr, 
        price: product.price,
        totalPrice: totalPrice
      });
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

      {/* Price per kg */}
      <div className="text-lg text-gray-700 mb-2">
        {product.price} {t.omr} {isRTL ? '/ كجم' : '/ kg'}
      </div>

      {/* Weight Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {isRTL ? 'الوزن (كجم)' : 'Weight (kg)'}
        </label>
        <select
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-primary"
        >
          {weightOptions.map((w) => (
            <option key={w} value={w}>
              {w} {isRTL ? 'كجم' : 'kg'}
            </option>
          ))}
        </select>
      </div>

      {/* Total Price */}
      <div className="text-2xl font-bold text-gold mb-4">
        {isRTL ? 'المجموع:' : 'Total:'} {totalPrice} {t.omr}
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