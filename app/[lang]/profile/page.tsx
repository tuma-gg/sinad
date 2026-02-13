'use client';

import { Language, translations } from '@/Lib/translations';
import { useUser } from '@/app/contexts/UserContext';
import { useState } from 'react';
import { FiEdit2, FiSave, FiX } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function ProfilePage({ params: { lang } }: { params: { lang: Language } }) {
  const t = translations[lang];
  const isRTL = lang === 'ar';
  const router = useRouter();
  const { user, login, logout } = useUser();

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
  });

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-bg to-accent-tan">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-brown-dark mb-4">
            {isRTL ? 'الوصول مرفوع' : 'Access Denied'}
          </h1>
          <p className="text-gray-600 mb-6">
            {isRTL ? 'يجب عليك تسجيل الدخول لعرض ملفك الشخصي' : 'You must be logged in to view your profile'}
          </p>
          <button
            onClick={() => router.push(`/${lang}/login`)}
            className="btn-primary px-6 py-3 rounded-xl"
          >
            {t.login}
          </button>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Call API to update user profile
      const response = await fetch('/api/auth/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      // Update local user context
      login({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });

      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      alert(isRTL ? 'فشل تحديث الملف الشخصي' : 'Failed to update profile');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone || '',
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-primary-bg to-accent-tan">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-brown-dark mb-2">
            {isRTL ? 'ملفك الشخصي' : 'Your Profile'}
          </h1>
          <p className="text-gray-600">
            {isRTL ? 'إدارة بيانات حسابك الشخصية' : 'Manage your account information'}
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-accent-tan">
          {/* Avatar Section */}
          <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-200">
            <div className="w-20 h-20 bg-gradient-to-br from-gold to-accent-tan rounded-full flex items-center justify-center text-brown-dark font-bold text-3xl flex-shrink-0">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brown-dark">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              {user.phone && <p className="text-gray-600">📱 {user.phone}</p>}
            </div>
          </div>

          {/* Form Section */}
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isRTL ? 'الاسم الكامل' : 'Full Name'}
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-accent-tan rounded-xl focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-base"
                  placeholder={isRTL ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-xl text-brown-dark font-medium">
                  {user.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isRTL ? 'البريد الإلكتروني' : 'Email Address'}
              </label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-accent-tan rounded-xl focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-base"
                  placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-xl text-brown-dark font-medium">
                  {user.email}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isRTL ? 'رقم الهاتف' : 'Phone Number'}
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-accent-tan rounded-xl focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-base"
                  placeholder={isRTL ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-xl text-brown-dark font-medium">
                  {user.phone || (isRTL ? 'لم يتم تقديم رقم هاتف' : 'No phone number provided')}
                </p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-8 border-t border-gray-200 flex gap-4">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="flex-1 btn-primary rounded-xl py-3 font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FiSave />
                  {isSaving ? (isRTL ? 'جارٍ الحفظ...' : 'Saving...') : (isRTL ? 'حفظ التغييرات' : 'Save Changes')}
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-xl py-3 font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <FiX />
                  {isRTL ? 'إلغاء' : 'Cancel'}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex-1 btn-primary rounded-xl py-3 font-semibold flex items-center justify-center gap-2"
                >
                  <FiEdit2 />
                  {isRTL ? 'تحرير الملف الشخصي' : 'Edit Profile'}
                </button>
              </>
            )}
          </div>

          {/* Logout Button */}
          <button
            onClick={() => {
              logout();
              router.push(`/${lang}`);
            }}
            className="w-full mt-4 py-3 border-2 border-red-500 text-red-500 rounded-xl font-semibold hover:bg-red-50 transition-colors"
          >
            {isRTL ? 'تسجيل الخروج' : 'Logout'}
          </button>
        </div>
      </div>
    </div>
  );
}
