'use client';

import { useParams } from 'next/navigation';
import { Language } from '@/Lib/translations';
import { useState } from 'react';
import { FiGift, FiMapPin, FiTrendingUp } from 'react-icons/fi';

export default function GreenPointsPage() {
  const params = useParams();
  const lang = (params.lang as Language) || 'en';
  const isRTL = lang === 'ar';
  const [isLoggedIn] = useState(false); // Change to true to see logged-in view

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-dark to-green-light text-white py-20 texture-overlay">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {isRTL ? 'برنامج النقاط الخضراء' : 'Green Points Program'} 🌿
          </h1>
          <p className="text-2xl mb-4">
            {isRTL ? 'حوّل مواردك إلى مكافآت' : 'Turn Your Resources into Rewards'}
          </p>
          <p className="text-lg max-w-2xl mx-auto">
            {isRTL 
              ? 'احصل على نقاط مقابل التبرع بنواة التمر أو الأصداف البحرية واستخدمها للحصول على خصومات'
              : 'Earn points by donating date seeds or oyster shells and use them for discounts'
            }
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-primary-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brown-dark text-center mb-12">
            {isRTL ? 'كيف يعمل البرنامج؟' : 'How It Works?'}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-green-light rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                🌱
              </div>
              <h3 className="text-2xl font-bold text-brown-dark mb-3">
                {isRTL ? '١. تبرّع بالمواد' : '1. Donate Materials'}
              </h3>
              <p className="text-gray-600 mb-2">
                {isRTL ? 'نواة التمر أو أصداف المحار' : 'Date seeds or oyster shells'}
              </p>
              <p className="text-gold font-bold">
                {isRTL ? '+10 نقاط لكل كجم' : '+10 points per kg'}
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-green-light rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-brown-dark mb-3">
                {isRTL ? '٢. اكسب النقاط' : '2. Earn Points'}
              </h3>
              <p className="text-gray-600">
                {isRTL 
                  ? 'نحوّل تبرعك إلى نقاط في حسابك فوراً'
                  : 'Donations converted to points instantly'
                }
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-green-light rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                🎁
              </div>
              <h3 className="text-2xl font-bold text-brown-dark mb-3">
                {isRTL ? '٣. استخدم المكافآت' : '3. Redeem Rewards'}
              </h3>
              <p className="text-gray-600">
                {isRTL 
                  ? 'خصومات على منتجاتنا وشركائنا'
                  : 'Discounts on our products & partners'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Dashboard or Login */}
      {isLoggedIn ? (
        <section className="py-20 bg-primary-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-brown-dark mb-8">
                {isRTL ? 'لوحة التحكم' : 'Your Dashboard'}
              </h2>

              {/* Points Balance */}
              <div className="bg-gradient-to-r from-brown-primary to-gold text-white rounded-2xl p-8 mb-8 text-center">
                <p className="text-lg mb-2">{isRTL ? 'رصيدك الحالي' : 'Your Balance'}</p>
                <p className="text-6xl font-bold">250</p>
                <p className="text-xl mt-2">{isRTL ? 'نقطة خضراء' : 'Green Points'}</p>
              </div>

              {/* Donation History */}
              <div className="bg-white rounded-xl p-6 border-2 border-accent-tan mb-8">
                <h3 className="text-xl font-bold text-brown-dark mb-4 flex items-center gap-2">
                  <FiTrendingUp />
                  {isRTL ? 'سجل التبرعات' : 'Donation History'}
                </h3>
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">{isRTL ? 'التاريخ' : 'Date'}</th>
                      <th className="text-left py-2">{isRTL ? 'المادة' : 'Material'}</th>
                      <th className="text-left py-2">{isRTL ? 'الوزن' : 'Weight'}</th>
                      <th className="text-left py-2">{isRTL ? 'النقاط' : 'Points'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">2026-02-01</td>
                      <td>{isRTL ? 'نواة تمر' : 'Date seeds'}</td>
                      <td>5 kg</td>
                      <td className="text-gold font-bold">+50</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">2026-01-15</td>
                      <td>{isRTL ? 'أصداف' : 'Shells'}</td>
                      <td>10 kg</td>
                      <td className="text-gold font-bold">+100</td>
                    </tr>
                    <tr>
                      <td className="py-2">2026-01-05</td>
                      <td>{isRTL ? 'نواة تمر' : 'Date seeds'}</td>
                      <td>10 kg</td>
                      <td className="text-gold font-bold">+100</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Available Rewards */}
              <div className="bg-white rounded-xl p-6 border-2 border-accent-tan">
                <h3 className="text-xl font-bold text-brown-dark mb-4 flex items-center gap-2">
                  <FiGift />
                  {isRTL ? 'المكافآت المتاحة' : 'Available Rewards'}
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:border-gold transition-colors">
                    <div>
                      <p className="font-bold">{isRTL ? '10% خصم' : '10% Discount'}</p>
                      <p className="text-sm text-gray-600">{isRTL ? 'على جميع المنتجات' : 'On all products'}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gold font-bold">100 {isRTL ? 'نقطة' : 'pts'}</p>
                      <button className="text-sm text-brown-primary hover:underline">
                        {isRTL ? 'استبدل' : 'Redeem'}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:border-gold transition-colors">
                    <div>
                      <p className="font-bold">{isRTL ? '20% خصم' : '20% Discount'}</p>
                      <p className="text-sm text-gray-600">{isRTL ? 'على طلبك القادم' : 'On your next order'}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gold font-bold">200 {isRTL ? 'نقطة' : 'pts'}</p>
                      <button className="text-sm text-brown-primary hover:underline">
                        {isRTL ? 'استبدل' : 'Redeem'}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg opacity-50">
                    <div>
                      <p className="font-bold">{isRTL ? 'منتج مجاني' : 'Free Product'}</p>
                      <p className="text-sm text-gray-600">{isRTL ? 'منتج واحد من اختيارك' : 'One product of your choice'}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gold font-bold">500 {isRTL ? 'نقطة' : 'pts'}</p>
                      <p className="text-xs text-gray-500">{isRTL ? 'تحتاج 250 نقطة إضافية' : 'Need 250 more points'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 bg-primary-cream text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-brown-dark mb-6">
              {isRTL ? 'انضم إلى برنامج النقاط الخضراء' : 'Join Green Points Program'}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {isRTL 
                ? 'سجّل حساب جديد أو سجّل دخولك لبدء جمع النقاط'
                : 'Create an account or login to start earning points'
              }
            </p>
            <div className="flex gap-4 justify-center">
              <a href={`/${lang}/registers`} className="btn-primary">
                {isRTL ? 'إنشاء حساب' : 'Create Account'}
              </a>
              <a href={`/${lang}/login`} className="btn-secondary">
                {isRTL ? 'تسجيل دخول' : 'Login'}
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Donation Centers */}
      <section className="py-20 bg-primary-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brown-dark text-center mb-12 flex items-center justify-center gap-3">
            <FiMapPin />
            {isRTL ? 'مراكز التبرع' : 'Donation Centers'}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { city: 'مسقط', cityEn: 'Muscat', address: 'Ruwi Industrial Area', phone: '+968 1234 5678' },
              { city: 'صلالة', cityEn: 'Salalah', address: 'Salalah Port Area', phone: '+968 2345 6789' },
              { city: 'صحار', cityEn: 'Sohar', address: 'Sohar Industrial Area', phone: '+968 3456 7890' },
            ].map((center, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-accent-tan hover:border-gold transition-colors">
                <h3 className="text-xl font-bold text-brown-dark mb-3">
                  📍 {isRTL ? center.city : center.cityEn}
                </h3>
                <p className="text-gray-600 mb-2">{center.address}</p>
                <p className="text-brown-primary font-medium">{center.phone}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="btn-secondary">
              {isRTL ? 'ابحث عن أقرب مركز' : 'Find Nearest Center'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}