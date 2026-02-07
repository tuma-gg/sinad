'use client';

import { useParams } from 'next/navigation';
import { Language, translations } from '@/Lib/translations';
import { useState } from 'react';
import Link from 'next/link';
import { FiMail, FiPhone, FiInstagram, FiLinkedin } from 'react-icons/fi';

const MEDIA_TYPES_AR = [
  { value: 'company', label: 'شركة' },
  { value: 'university', label: 'جامعة / مؤسسة تعليمية' },
  { value: 'media', label: 'جهة إعلامية / صحافة' },
  { value: 'influencer', label: 'مؤثر / صانع محتوى' },
  { value: 'other', label: 'أخرى' },
];

const MEDIA_TYPES_EN = [
  { value: 'company', label: 'Company' },
  { value: 'university', label: 'University / Educational institution' },
  { value: 'media', label: 'Media outlet / Press' },
  { value: 'influencer', label: 'Influencer / Content creator' },
  { value: 'other', label: 'Other' },
];

const CONTACT_PREF_AR = [
  { value: 'email', label: 'البريد الإلكتروني' },
  { value: 'phone', label: 'الهاتف' },
  { value: 'instagram', label: 'إنستغرام' },
  { value: 'linkedin', label: 'لينكد إن' },
  { value: 'tiktok', label: 'تيك توك' },
  { value: 'other_social', label: 'منصة أخرى' },
];

const CONTACT_PREF_EN = [
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'tiktok', label: 'TikTok' },
  { value: 'other_social', label: 'Other platform' },
];

export default function MediaPage() {
  const params = useParams();
  const lang = (params.lang as Language) || 'en';
  const t = translations[lang];
  const isRTL = lang === 'ar';

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    type: '',
    nameOrOrg: '',
    email: '',
    phone: '',
    preferredContact: '',
    instagram: '',
    tiktok: '',
    linkedin: '',
    twitter: '',
    otherSocial: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        type: '',
        nameOrOrg: '',
        email: '',
        phone: '',
        preferredContact: '',
        instagram: '',
        tiktok: '',
        linkedin: '',
        twitter: '',
        otherSocial: '',
        message: '',
      });
    }, 4000);
  };

  const mediaTypes = isRTL ? MEDIA_TYPES_AR : MEDIA_TYPES_EN;
  const contactPref = isRTL ? CONTACT_PREF_AR : CONTACT_PREF_EN;

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-brown-dark mb-4 text-center">
        {t.mediaTitle}
      </h1>
      <p className="text-center text-gray-700 mb-10">
        {isRTL
          ? 'أخبرنا من أنتم وكيف نتواصل معكم — بريد إلكتروني، هاتف، أو حسابات التواصل الاجتماعي (إنستغرام، تيك توك، لينكد إن، إلخ).'
          : 'Tell us who you are and how to contact you back — email, phone, or social media (Instagram, TikTok, LinkedIn, etc.).'}
      </p>

      <div className="bg-white rounded-xl p-8 border-2 border-accent-tan">
        {submitted && (
          <div className="bg-green-light border border-green-dark text-green-dark px-4 py-3 rounded-lg mb-6">
            {isRTL
              ? '✓ تم إرسال معلوماتكم. سنتواصل معكم عبر الطريقة التي اخترتموها.'
              : '✓ Your details have been submitted. We will contact you via your preferred method.'}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isRTL ? 'أنتم من' : 'I am / We are'} *
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
            >
              <option value="">{isRTL ? 'اختر' : 'Select'}</option>
              {mediaTypes.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isRTL ? 'الاسم أو اسم المؤسسة / الشركة' : 'Name or Organization / Company name'} *
            </label>
            <input
              type="text"
              name="nameOrOrg"
              value={formData.nameOrOrg}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
              dir={isRTL ? 'rtl' : 'ltr'}
              placeholder={isRTL ? 'مثال: جامعة السلطان قابوس، أو قناة X، أو الاسم الفني' : 'e.g. Sultan Qaboos University, Channel X, or your brand name'}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isRTL ? 'البريد الإلكتروني' : 'Email'} *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isRTL ? 'رقم الهاتف' : 'Phone number'}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                placeholder="+968"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isRTL ? 'تفضيل التواصل معكم عبر' : 'Preferred way to contact you back'}
            </label>
            <select
              name="preferredContact"
              value={formData.preferredContact}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
            >
              <option value="">{isRTL ? 'اختر (اختياري)' : 'Select (optional)'}</option>
              {contactPref.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="border-t border-accent-tan pt-5">
            <p className="text-sm font-medium text-brown-dark mb-3">
              {isRTL ? 'حسابات التواصل الاجتماعي (اختياري) — لنتواصل معكم عبرها' : 'Social media accounts (optional) — so we can reach you'}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FiInstagram className="text-brown-primary flex-shrink-0" />
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="Instagram @username or link"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold text-sm"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 text-center text-sm">⌘</span>
                <input
                  type="text"
                  name="tiktok"
                  value={formData.tiktok}
                  onChange={handleChange}
                  placeholder="TikTok @username or link"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold text-sm"
                />
              </div>
              <div className="flex items-center gap-2">
                <FiLinkedin className="text-brown-primary flex-shrink-0" />
                <input
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="LinkedIn profile or link"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold text-sm"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 text-center text-sm">𝕏</span>
                <input
                  type="text"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  placeholder="X (Twitter) @username or link"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="otherSocial"
                  value={formData.otherSocial}
                  onChange={handleChange}
                  placeholder={isRTL ? 'منصة أخرى (رابط أو @)' : 'Other platform (link or @)'}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold text-sm"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isRTL ? 'رسالة أو طلب (اختياري)' : 'Message or request (optional)'}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold resize-none"
              dir={isRTL ? 'rtl' : 'ltr'}
              placeholder={isRTL ? 'مثال: طلب مقابلة، تغطية إعلامية، تعاون مع الجامعة، إلخ.' : 'e.g. Interview request, media coverage, university collaboration, etc.'}
            />
          </div>

          <button type="submit" className="w-full btn-primary">
            {isRTL ? 'إرسال' : 'Submit'}
          </button>
        </form>
      </div>

      <p className="mt-6 text-center text-sm text-gray-600">
        {isRTL ? 'يمكنكم أيضاً التواصل مباشرة: ' : 'You can also reach us directly: '}
        <a href="mailto:sinadco.om@gmail.com" className="text-gold hover:underline">sinadco.om@gmail.com</a>
      </p>

      <div className="mt-8 text-center">
        <Link href={`/${lang}`} className="text-brown-primary hover:text-gold font-medium">
          {isRTL ? '← الرئيسية' : '← Home'}
        </Link>
      </div>
    </div>
  );
}
