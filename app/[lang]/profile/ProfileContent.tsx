'use client';

import { useUser } from '@/app/contexts/UserContext';
import { Language } from '@/Lib/translations';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProfileContent({ lang }: { lang: Language }) {
  const { user } = useUser();
  const router = useRouter();
  const isRTL = lang === 'ar';

  useEffect(() => {
    if (!user) {
      router.push(`/${lang}/login`);
    }
  }, [user, router, lang]);

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            {isRTL ? 'الاسم' : 'Name'}
          </label>
          <p className="text-lg text-brown-dark font-semibold">{user.name}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            {isRTL ? 'البريد الإلكتروني' : 'Email'}
          </label>
          <p className="text-lg text-brown-dark">{user.email}</p>
        </div>

        {user.phone && (
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              {isRTL ? 'رقم الهاتف' : 'Phone Number'}
            </label>
            <p className="text-lg text-brown-dark">{user.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}