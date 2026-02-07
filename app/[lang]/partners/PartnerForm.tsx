'use client';

import { Language } from '@/Lib/translations';
import { useState } from 'react';

export default function PartnerForm({ lang }: { lang: Language }) {
  const isRTL = lang === 'ar';

  const [formData, setFormData] = useState({
    organizationType: '',
    organizationName: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        organizationType: '',
        organizationName: '',
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 3000);
  };

  const orgTypeOptions = isRTL
    ? [
        { value: '', label: 'اختر نوع المؤسسة' },
        { value: 'company', label: 'شركة' },
        { value: 'university', label: 'جامعة' },
        { value: 'institution', label: 'مؤسسة / هيئة' },
        { value: 'other', label: 'أخرى' },
      ]
    : [
        { value: '', label: 'Select organization type' },
        { value: 'company', label: 'Company' },
        { value: 'university', label: 'University' },
        { value: 'institution', label: 'Institution' },
        { value: 'other', label: 'Other' },
      ];

  return (
    <section id="partner-form" className="py-16 bg-primary-bg">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-brown-dark mb-2 text-center">
          {isRTL ? 'تواصل معنا كشريك' : 'Contact Us as a Partner'}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          {isRTL
            ? 'أدخل بيانات مؤسستك ومعلوماتك وسنتواصل معك.'
            : 'Enter your organization and contact details and we will get in touch.'}
        </p>

        {submitted && (
          <div className="bg-green-100 border border-green-600 text-green-800 px-4 py-3 rounded-lg mb-6 text-center">
            {isRTL ? '✓ تم إرسال رسالتك بنجاح!' : '✓ Your message has been sent successfully!'}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border-2 border-accent-tan space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isRTL ? 'نوع المؤسسة' : 'Organization type'} *
            </label>
            <select
              name="organizationType"
              value={formData.organizationType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
            >
              {orgTypeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isRTL ? 'اسم الشركة / الجامعة / المؤسسة' : 'Company / University / Institution name'} *
            </label>
            <input
              type="text"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              required
              placeholder={isRTL ? 'مثال: جامعة السلطان قابوس' : 'e.g. Sultan Qaboos University'}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
              dir={isRTL ? 'rtl' : 'ltr'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isRTL ? 'اسمك الكامل' : 'Your full name'} *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
              dir={isRTL ? 'rtl' : 'ltr'}
            />
          </div>

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
              {isRTL ? 'رقم الهاتف' : 'Phone number'} *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+968"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isRTL ? 'رسالتك أو طلب الشراكة' : 'Your message or partnership request'}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold resize-none"
              dir={isRTL ? 'rtl' : 'ltr'}
            />
          </div>

          <button type="submit" className="w-full btn-primary">
            {isRTL ? 'إرسال طلب الشراكة' : 'Send partnership request'}
          </button>
        </form>
      </div>
    </section>
  );
}
