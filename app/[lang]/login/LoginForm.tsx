'use client';

import { Language, translations } from '@/Lib/translations';
import { useState } from 'react';
import Link from 'next/link';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function LoginForm({ lang }: { lang: Language }) {
  const t = translations[lang];
  const isRTL = lang === 'ar';

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(isRTL ? 'تم تسجيل الدخول بنجاح!' : 'Login successful!');
  };

  return (
    <div className="min-h-[100dvh] sm:min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-bg to-accent-tan texture-overlay py-6 px-4 sm:py-12 safe-area-padding">
      <div className="w-full max-w-md">
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brown-dark rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <span className="text-2xl sm:text-3xl text-primary-cream font-bold">سِناد</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-brown-dark">
            {t.login}
          </h1>
          <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
            {isRTL ? 'مرحباً بعودتك!' : 'Welcome back!'}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-xl border-2 border-accent-tan">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                {isRTL ? 'البريد الإلكتروني' : 'Email'}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 min-h-[44px] text-base"
                placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                {isRTL ? 'كلمة المرور' : 'Password'}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 min-h-[44px] text-base"
                  placeholder={isRTL ? 'أدخل كلمة المرور' : 'Enter your password'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-brown-primary touch-manipulation"
                  aria-label={showPassword ? (isRTL ? 'إخفاء' : 'Hide') : (isRTL ? 'إظهار' : 'Show')}
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleInputChange}
                  className="w-5 h-5 rounded text-brown-primary focus:ring-gold"
                />
                <span className="text-sm text-gray-600">
                  {isRTL ? 'تذكرني' : 'Remember me'}
                </span>
              </label>

              <Link href={`/${lang}/forgot-password`} className="text-sm text-gold hover:underline py-1 touch-manipulation">
                {isRTL ? 'نسيت كلمة المرور؟' : 'Forgot password?'}
              </Link>
            </div>

            <button type="submit" className="w-full btn-primary min-h-[48px] rounded-xl text-base font-semibold touch-manipulation">
              {t.login}
            </button>
          </form>

          <div className="mt-5 sm:mt-6 text-center">
            <p className="text-gray-600 text-sm sm:text-base">
              {isRTL ? 'ليس لديك حساب؟' : "Don't have an account?"}{' '}
              <Link href={`/${lang}/registers`} className="text-gold font-medium hover:underline">
                {isRTL ? 'سجّل الآن' : 'Register now'}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
