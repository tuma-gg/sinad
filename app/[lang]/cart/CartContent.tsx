'use client';

import { Language, translations } from '@/Lib/translations';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiTrash2, FiMinus, FiPlus, FiPackage, FiShoppingBag } from 'react-icons/fi';

// Mock: could come from context/API later
const MOCK_PAST_ORDERS = [
  {
    id: 'ORD-2025-001',
    date: '2025-01-15',
    dateAr: '١٥ يناير ٢٠٢٥',
    items: [{ name: 'SINAD Powder', nameAr: 'مسحوق سِناد', qty: 2 }, { name: 'SINAD Liquid', nameAr: 'سائل سِناد', qty: 1 }],
    total: 80,
    status: 'delivered',
    statusAr: 'تم التوصيل',
    statusEn: 'Delivered',
  },
  {
    id: 'ORD-2024-012',
    date: '2024-12-01',
    dateAr: '١ ديسمبر ٢٠٢٤',
    items: [{ name: 'SINAD Paste', nameAr: 'معجون سِناد', qty: 1 }],
    total: 35,
    status: 'delivered',
    statusAr: 'تم التوصيل',
    statusEn: 'Delivered',
  },
];

export default function CartContent({ lang }: { lang: Language }) {
  const t = translations[lang];
  const isRTL = lang === 'ar';

  const [cartItems, setCartItems] = useState<Array<{
    id: string;
    name: string;
    nameAr: string;
    price: number;
    quantity: number;
    image: string;
  }>>([
    {
      id: 'powder',
      name: 'SINAD Powder',
      nameAr: 'مسحوق سِناد',
      price: 25,
      quantity: 2,
      image: '/images/powder.png.jpeg',
    },
    {
      id: 'liquid',
      name: 'SINAD Liquid',
      nameAr: 'سائل سِناد',
      price: 30,
      quantity: 1,
      image: '/images/lequid.png.jpeg',
    },
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5;
  const total = subtotal + shipping;
  const hasCurrentItems = cartItems.length > 0;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-brown-dark mb-8">{t.shoppingCart}</h1>

      {/* Current order */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-brown-dark mb-4 flex items-center gap-2">
          <FiShoppingBag className="text-gold" />
          {isRTL ? 'طلبك الحالي' : 'Current order'}
        </h2>

        {!hasCurrentItems ? (
          <div className="bg-white rounded-xl p-8 border-2 border-accent-tan text-center">
            <p className="text-xl text-gray-500 mb-6">
              {isRTL ? 'السلة فارغة. لم تضف أي منتجات بعد.' : 'Your cart is empty. You have not added any products yet.'}
            </p>
            <Link href={`/${lang}/products`} className="btn-primary inline-block">
              {isRTL ? 'تصفح المنتجات' : 'Browse Products'}
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-6 border border-gray-200 flex gap-4"
                >
                  <div className="relative w-24 h-24 bg-primary-bg rounded-lg flex-shrink-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={isRTL ? item.nameAr : item.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-brown-dark mb-2">
                      {isRTL ? item.nameAr : item.name}
                    </h3>
                    <div className="text-gold font-bold mb-3">
                      {item.price} {t.omr}
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 flex items-center justify-center"
                      >
                        <FiMinus />
                      </button>
                      <span className="font-bold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 flex items-center justify-center"
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>
                  <div className="text-right flex flex-col justify-between items-end">
                    <div className="text-xl font-bold text-brown-dark">
                      {item.price * item.quantity} {t.omr}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 p-2"
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-primary-bg rounded-xl p-6 border-2 border-accent-tan sticky top-24">
                <h3 className="text-xl font-bold text-brown-dark mb-6">
                  {isRTL ? 'ملخص الطلب' : 'Order Summary'}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>{isRTL ? 'المجموع الفرعي:' : 'Subtotal:'}</span>
                    <span className="font-bold">{subtotal} {t.omr}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isRTL ? 'الشحن:' : 'Shipping:'}</span>
                    <span className="font-bold">{shipping} {t.omr}</span>
                  </div>
                  <div className="border-t border-gray-300 pt-3 flex justify-between text-xl">
                    <span className="font-bold">{isRTL ? 'المجموع:' : 'Total:'}</span>
                    <span className="font-bold text-gold">{total} {t.omr}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder={isRTL ? 'رمز الخصم' : 'Promo Code'}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-gold"
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                  <button className="w-full py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
                    {isRTL ? 'تطبيق' : 'Apply'}
                  </button>
                </div>
                <Link href={`/${lang}/checkout`} className="block w-full btn-primary text-center mb-3">
                  {t.checkout}
                </Link>
                <Link href={`/${lang}/products`} className="block w-full btn-secondary text-center">
                  {t.continueShopping}
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Past orders */}
      <section>
        <h2 className="text-2xl font-bold text-brown-dark mb-4 flex items-center gap-2">
          <FiPackage className="text-gold" />
          {isRTL ? 'طلباتك السابقة' : 'Past orders'}
        </h2>

        {MOCK_PAST_ORDERS.length === 0 ? (
          <div className="bg-white rounded-xl p-6 border-2 border-accent-tan">
            <p className="text-gray-500 text-center">
              {isRTL ? 'لا توجد طلبات سابقة.' : 'You have no past orders.'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {MOCK_PAST_ORDERS.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-xl p-6 border border-gray-200 flex flex-wrap items-center justify-between gap-4"
              >
                <div>
                  <p className="font-bold text-brown-dark">{order.id}</p>
                  <p className="text-sm text-gray-500" dir={isRTL ? 'rtl' : 'ltr'}>
                    {isRTL ? order.dateAr : order.date}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {order.items.map((i) => (isRTL ? i.nameAr : i.name)).join('، ')} — {isRTL ? 'تم التوصيل' : order.statusEn}
                  </p>
                </div>
                <div className="text-left">
                  <span className="font-bold text-gold">{order.total} {t.omr}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
