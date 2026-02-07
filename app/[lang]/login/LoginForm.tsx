'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUser } from '@/app/contexts/UserContext';
import { Language } from '@/Lib/translations';

interface LoginFormProps {
  lang: Language;
}

export default function LoginForm({ lang }: LoginFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const isRTL = lang === 'ar';
  const returnTo = searchParams.get('returnTo') || `/${lang}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Replace with actual API call
    // For now, simulate login
    const userData = {
      name: formData.email.split('@')[0], // Use email username as name
      email: formData.email,
    };

    login(userData);
    router.push(returnTo);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brown-dark mb-2">
          {isRTL ? 'البريد الإلكتروني' : 'Email'}
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border-2 border-accent-tan rounded-lg focus:outline-none focus:border-gold transition-colors text-brown-dark"
          placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-brown-dark mb-2">
          {isRTL ? 'كلمة المرور' : 'Password'}
        </label>
        <input
          type="password"
          id="password"
          required
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-full px-4 py-3 border-2 border-accent-tan rounded-lg focus:outline-none focus:border-gold transition-colors text-brown-dark"
          placeholder={isRTL ? 'أدخل كلمة المرور' : 'Enter your password'}
        />
      </div>

      <button
        type="submit"
        className="w-full btn-primary"
      >
        {isRTL ? 'تسجيل الدخول' : 'Login'}
      </button>
    </form>
  );
}