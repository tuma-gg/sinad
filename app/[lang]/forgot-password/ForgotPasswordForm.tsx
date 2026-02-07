'use client';

import { Language } from '@/Lib/translations';
import { useState } from 'react';
import Link from 'next/link';
import { FiMail, FiPhone } from 'react-icons/fi';

type Method = 'email' | 'phone';

export default function ForgotPasswordForm({ lang }: { lang: Language }) {
  const isRTL = lang === 'ar';

  const [method, setMethod] = useState<Method>('email');
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending link/code
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-[100dvh] sm:min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-bg to-accent-tan texture-overlay py-6 px-4 sm:py-12 safe-area-padding">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-accent-tan text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiMail className="text-green-600 w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-brown-dark mb-2">
              {isRTL ? 'تم الإرسال' : 'Check your inbox'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              {method === 'email'
                ? (isRTL
                    ? 'إذا كان هناك حساب مرتبط بهذا البريد، فسنرسل لك رابطاً لتغيير كلمة المرور.'
                    : "If an account exists for this email, we've sent you a link to reset your password.")
                : (isRTL
                    ? 'إذا كان هناك حساب مرتبط بهذا الرقم، فسنرسل لك رسالة تحتوي على رابط لتغيير كلمة المرور.'
                    : "If an account exists for this number, we've sent you a message with a link to reset your password.")}
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mb-6">
              {isRTL ? 'افتح الرابط وأدخل كلمة المرور الجديدة.' : 'Open the link and enter your new password.'}
            </p>
            <Link
              href={`/${lang}/forgot-password/reset`}
              className="block w-full btn-primary min-h-[48px] rounded-xl text-center leading-[48px] font-semibold touch-manipulation mb-3"
            >
              {isRTL ? 'تعيين كلمة مرور جديدة' : 'Set new password'}
            </Link>
            <p className="text-xs text-gray-500 mb-4">
              {isRTL ? 'انقر هنا كما لو فتحت الرابط من بريدك أو رسالتك.' : 'Click here as if you opened the link from your email or message.'}
            </p>
            <Link
              href={`/${lang}/login`}
              className="block w-full border-2 border-brown-primary text-brown-primary rounded-xl min-h-[48px] text-center leading-[48px] font-semibold touch-manipulation hover:bg-brown-primary hover:text-primary-cream transition-colors"
            >
              {isRTL ? 'العودة لتسجيل الدخول' : 'Back to login'}
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              {isRTL ? 'لم تستلم شيئاً؟' : "Didn't receive anything?"}{' '}
              <button
                type="button"
                onClick={() => { setSubmitted(false); setValue(''); }}
                className="text-gold font-medium hover:underline"
              >
                {isRTL ? 'إعادة المحاولة' : 'Try again'}
              </button>
            </p>
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
            {isRTL ? 'استعادة كلمة المرور' : 'Forgot password?'}
          </h1>
          <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
            {isRTL
              ? 'اختر طريقة الاستعادة: سنرسل لك رابطاً عبر البريد أو الهاتف، ومن الرابط يمكنك تأكيد الهوية ثم تعيين كلمة مرور جديدة.'
              : 'Choose how to recover: we\'ll send you a link by email or phone. From that link you can confirm and set a new password.'}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-xl border-2 border-accent-tan">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-3">
                {isRTL ? 'أرسل الرابط إلى' : 'Send link to'}
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setMethod('email')}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 min-h-[48px] touch-manipulation transition-colors ${
                    method === 'email'
                      ? 'border-gold bg-gold/10 text-brown-dark'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <FiMail size={20} />
                  <span className="text-sm font-medium">{isRTL ? 'البريد' : 'Email'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMethod('phone')}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 min-h-[48px] touch-manipulation transition-colors ${
                    method === 'phone'
                      ? 'border-gold bg-gold/10 text-brown-dark'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <FiPhone size={20} />
                  <span className="text-sm font-medium">{isRTL ? 'الهاتف' : 'Phone'}</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                {method === 'email'
                  ? (isRTL ? 'البريد الإلكتروني' : 'Email address')
                  : (isRTL ? 'رقم الهاتف' : 'Phone number')}
              </label>
              <input
                type={method === 'email' ? 'email' : 'tel'}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
                placeholder={method === 'email' ? 'you@example.com' : '+968'}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 min-h-[44px] text-base"
                dir="ltr"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary min-h-[48px] rounded-xl text-base font-semibold touch-manipulation disabled:opacity-70"
            >
              {loading
                ? (isRTL ? 'جاري الإرسال...' : 'Sending...')
                : (isRTL ? 'إرسال الرابط' : 'Send link')}
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
