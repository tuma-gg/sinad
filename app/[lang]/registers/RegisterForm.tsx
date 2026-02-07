'use client';

import { Language, translations } from '@/Lib/translations';
import { useState } from 'react';
import Link from 'next/link';
import { FiEye, FiEyeOff, FiCheck, FiX } from 'react-icons/fi';

export default function RegisterForm({ lang }: { lang: Language }) {
  const t = translations[lang];
  const isRTL = lang === 'ar';

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
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
    if (formData.password !== formData.confirmPassword) {
      alert(isRTL ? 'كلمات المرور غير متطابقة' : 'Passwords do not match');
      return;
    }
    alert(isRTL ? 'تم إنشاء الحساب بنجاح!' : 'Account created successfully!');
  };

  const getPasswordStrength = () => {
    const password = formData.password;
    if (password.length === 0) return { level: 0, text: '', color: '' };
    if (password.length < 6) return { level: 1, text: isRTL ? 'ضعيف' : 'Weak', color: 'text-red-500' };
    if (password.length < 10) return { level: 2, text: isRTL ? 'متوسط' : 'Medium', color: 'text-yellow-600' };
    return { level: 3, text: isRTL ? 'قوي' : 'Strong', color: 'text-green-600' };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <div className="min-h-[100dvh] sm:min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-bg to-accent-tan texture-overlay py-6 px-4 sm:py-12 safe-area-padding">
      <div className="w-full max-w-md">
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brown-dark rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <span className="text-2xl sm:text-3xl text-primary-cream font-bold">سِناد</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-brown-dark">
            {isRTL ? 'إنشاء حساب جديد' : 'Create New Account'}
          </h1>
          <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
            {isRTL ? 'انضم إلى عائلة سِناد اليوم' : 'Join SINAD family today'}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-xl border-2 border-accent-tan">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                {isRTL ? 'الاسم الكامل' : 'Full Name'} *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 min-h-[44px] text-base"
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                {isRTL ? 'البريد الإلكتروني' : 'Email'} *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 min-h-[44px] text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                {isRTL ? 'رقم الهاتف' : 'Phone Number'} *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+968"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 min-h-[44px] text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                {isRTL ? 'كلمة المرور' : 'Password'} *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  minLength={6}
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 min-h-[44px] text-base"
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
              {formData.password && (
                <p className={`text-sm mt-1 ${passwordStrength.color}`}>
                  {isRTL ? 'القوة: ' : 'Strength: '}{passwordStrength.text}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                {isRTL ? 'تأكيد كلمة المرور' : 'Confirm Password'} *
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 min-h-[44px] text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-brown-primary touch-manipulation"
                  aria-label={showConfirmPassword ? (isRTL ? 'إخفاء' : 'Hide') : (isRTL ? 'إظهار' : 'Show')}
                >
                  {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
              {formData.confirmPassword && (
                <div className="flex items-center gap-2 mt-1">
                  {formData.password === formData.confirmPassword ? (
                    <>
                      <FiCheck className="text-green-500 flex-shrink-0" />
                      <span className="text-sm text-green-600">
                        {isRTL ? 'كلمات المرور متطابقة' : 'Passwords match'}
                      </span>
                    </>
                  ) : (
                    <>
                      <FiX className="text-red-500 flex-shrink-0" />
                      <span className="text-sm text-red-600">
                        {isRTL ? 'كلمات المرور غير متطابقة' : 'Passwords do not match'}
                      </span>
                    </>
                  )}
                </div>
              )}
            </div>

            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-5 h-5 rounded text-brown-primary focus:ring-gold flex-shrink-0"
                />
                <span className="text-sm text-gray-600">
                  {isRTL ? (
                    <>
                      أوافق على{' '}
                      <Link href={`/${lang}/terms`} className="text-gold hover:underline">
                        الشروط والأحكام
                      </Link>{' '}
                      و{' '}
                      <Link href={`/${lang}/privacy`} className="text-gold hover:underline">
                        سياسة الخصوصية
                      </Link>
                    </>
                  ) : (
                    <>
                      I agree to the{' '}
                      <Link href={`/${lang}/terms`} className="text-gold hover:underline">
                        Terms & Conditions
                      </Link>{' '}
                      and{' '}
                      <Link href={`/${lang}/privacy`} className="text-gold hover:underline">
                        Privacy Policy
                      </Link>
                    </>
                  )}
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full btn-primary min-h-[48px] rounded-xl text-base font-semibold touch-manipulation"
            >
              {isRTL ? 'إنشاء حساب' : 'Create Account'}
            </button>
          </form>

          <div className="mt-5 sm:mt-6 text-center">
            <p className="text-gray-600 text-sm sm:text-base">
              {isRTL ? 'لديك حساب؟' : 'Already have an account?'}{' '}
              <Link href={`/${lang}/login`} className="text-gold font-medium hover:underline">
                {isRTL ? 'سجّل دخول' : 'Login'}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
