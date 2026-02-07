'use client';

import { Language, translations } from '@/Lib/translations';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useUser } from '@/app/contexts/UserContext';

export default function LoginForm({ lang }: { lang: Language }) {
  const t = translations[lang];
  const isRTL = lang === 'ar';
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useUser();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
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
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Real API authentication
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: formData.email, 
          password: formData.password 
        }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();

      // Log the user in using UserContext with real API data
      login({
        name: data.user.name,
        email: data.user.email,
        phone: data.user.phone,
      });

      // Get the return path from URL params, or default to home page
      const returnTo = searchParams.get('returnTo') || `/${lang}`;
      
      // Redirect to home page or return path
      router.push(returnTo);
      
    } catch (err) {
      setError(isRTL ? 'فشل تسجيل الدخول. تحقق من بياناتك.' : 'Login failed. Please check your credentials.');
      setIsLoading(false);
    }
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
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

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
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 min-h-[44px] text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                  disabled={isLoading}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 min-h-[44px] text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder={isRTL ? 'أدخل كلمة المرور' : 'Enter your password'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-brown-primary touch-manipulation disabled:opacity-50"
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
                  disabled={isLoading}
                  className="w-5 h-5 rounded text-brown-primary focus:ring-gold disabled:cursor-not-allowed"
                />
                <span className="text-sm text-gray-600">
                  {isRTL ? 'تذكرني' : 'Remember me'}
                </span>
              </label>

              <Link href={`/${lang}/forgot-password`} className="text-sm text-gold hover:underline py-1 touch-manipulation">
                {isRTL ? 'نسيت كلمة المرور؟' : 'Forgot password?'}
              </Link>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full btn-primary min-h-[48px] rounded-xl text-base font-semibold touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {isRTL ? 'جارٍ تسجيل الدخول...' : 'Logging in...'}
                </>
              ) : (
                t.login
              )}
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