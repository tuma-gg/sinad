'use client';

import { Language, translations } from '@/Lib/translations';
import { useState } from 'react';
import Link from 'next/link';
import { FiEye, FiEyeOff, FiCheck, FiX } from 'react-icons/fi';

export default function ResetPasswordForm({ lang }: { lang: Language }) {
  const t = translations[lang];
  const isRTL = lang === 'ar';

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert(isRTL ? 'كلمات المرور غير متطابقة' : 'Passwords do not match');
      return;
    }
    if (formData.password.length < 6) {
      alert(isRTL ? 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' : 'Password must be at least 6 characters');
      return;
    }
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-[100dvh] sm:min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-bg to-accent-tan texture-overlay py-6 px-4 sm:py-12 safe-area-padding">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-accent-tan text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiCheck className="text-green-600 w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-brown-dark mb-2">
              {isRTL ? 'تم تغيير كلمة المرور' : 'Password updated'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              {isRTL ? 'يمكنك الآن تسجيل الدخول بكلمة المرور الجديدة.' : 'You can now log in with your new password.'}
            </p>
            <Link
              href={`/${lang}/login`}
              className="block w-full btn-primary min-h-[48px] rounded-xl text-center leading-[48px] font-semibold touch-manipulation"
            >
              {t.login}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] sm:min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-bg to-accent-tan texture-overlay py-6 px-4 sm:py-12 safe-area-padding">
      <div className="w-full max-w-md">
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brown-dark rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <span className="text-2xl sm:text-3xl text-primary-cream font-bold">سِناد</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-brown-dark">
            {isRTL ? 'كلمة مرور جديدة' : 'New password'}
          </h1>
          <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
            {isRTL ? 'أدخل كلمة المرور الجديدة وتأكيدها.' : 'Enter and confirm your new password.'}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-xl border-2 border-accent-tan">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                {isRTL ? 'كلمة المرور الجديدة' : 'New password'} *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
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
              <p className="text-xs text-gray-500 mt-1">
                {isRTL ? '6 أحرف على الأقل' : 'At least 6 characters'}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                {isRTL ? 'تأكيد كلمة المرور' : 'Confirm password'} *
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 min-h-[44px] text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-brown-primary touch-manipulation"
                  aria-label={showConfirm ? (isRTL ? 'إخفاء' : 'Hide') : (isRTL ? 'إظهار' : 'Show')}
                >
                  {showConfirm ? <FiEyeOff size={20} /> : <FiEye size={20} />}
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

            <button
              type="submit"
              className="w-full btn-primary min-h-[48px] rounded-xl text-base font-semibold touch-manipulation"
            >
              {isRTL ? 'حفظ كلمة المرور الجديدة' : 'Save new password'}
            </button>
          </form>

          <div className="mt-5 sm:mt-6 text-center">
            <Link
              href={`/${lang}/login`}
              className="text-gold font-medium hover:underline text-sm sm:text-base"
            >
              {isRTL ? '← العودة لتسجيل الدخول' : '← Back to login'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
