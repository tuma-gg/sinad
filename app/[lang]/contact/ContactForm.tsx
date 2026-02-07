'use client';

import { Language, translations } from '@/Lib/translations';
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import Link from 'next/link';

const PHONE = '+968 7922 9423';
const PHONE_AR = '٩٦٨ ٧٩٢٢ ٩٤٢٣';

export default function ContactForm({ lang }: { lang: Language }) {
  const t = translations[lang];
  const isRTL = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-brown-dark mb-8 text-center">{t.contactUs}</h1>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-xl p-8 border-2 border-accent-tan">
          <h2 className="text-2xl font-bold text-brown-dark mb-6">
            {isRTL ? 'أرسل لنا رسالة' : 'Send Us a Message'}
          </h2>

          {submitted && (
            <div className="bg-green-100 border border-green-600 text-green-800 px-4 py-3 rounded-lg mb-6">
              {isRTL ? '✓ تم إرسال رسالتك بنجاح!' : '✓ Your message has been sent successfully!'}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isRTL ? 'الاسم' : 'Name'} *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isRTL ? 'رقم الهاتف' : 'Phone'} ({isRTL ? 'اختياري' : 'Optional'})
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+968"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isRTL ? 'الموضوع' : 'Subject'} *
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
              >
                <option value="">{isRTL ? 'اختر الموضوع' : 'Select Subject'}</option>
                <option value="products">{isRTL ? 'استفسار عن المنتجات' : 'Product Inquiry'}</option>
                <option value="partnership">{isRTL ? 'شراكة تجارية' : 'Business Partnership'}</option>
                <option value="greenpoints">{isRTL ? 'برنامج النقاط الخضراء' : 'Green Points Program'}</option>
                <option value="media">{isRTL ? 'استفسار إعلامي' : 'Media Inquiry'}</option>
                <option value="other">{isRTL ? 'أخرى' : 'Other'}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isRTL ? 'الرسالة' : 'Message'} *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold resize-none"
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>

            <button type="submit" className="w-full btn-primary">
              {isRTL ? 'إرسال الرسالة' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-primary-bg rounded-xl p-6 border-2 border-accent-tan">
            <h3 className="text-xl font-bold text-brown-dark mb-4">
              {isRTL ? 'معلومات التواصل' : 'Contact Information'}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiPhone className="text-brown-dark" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brown-dark mb-1">{isRTL ? 'الهاتف' : 'Phone'}</h4>
                  <a href="tel:+96879229423" className="text-gray-700 hover:text-gold" dir="ltr">
                    {PHONE}
                  </a>
                  {isRTL && (
                    <>
                      <br />
                      <span className="text-gray-600" dir="rtl">({PHONE_AR})</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMail className="text-brown-dark" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brown-dark mb-1">{isRTL ? 'البريد الإلكتروني' : 'Email'}</h4>
                  <a href="mailto:sinadco.om@gmail.com" className="text-gray-700 hover:text-gold">sinadco.om@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-brown-dark" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brown-dark mb-1">{isRTL ? 'العنوان' : 'Address'}</h4>
                  <p className="text-gray-700">
                    {isRTL
                      ? 'المنطقة الصناعية، الروي\nمسقط، سلطنة عُمان'
                      : 'Industrial Area, Ruwi\nMuscat, Sultanate of Oman'
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiClock className="text-brown-dark" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brown-dark mb-1">{isRTL ? 'ساعات العمل' : 'Business Hours'}</h4>
                  <p className="text-gray-700">
                    {isRTL ? 'الأحد - الخميس: 8:00 ص - 5:00 م' : 'Sunday - Thursday: 8:00 AM - 5:00 PM'}
                    <br />
                    {isRTL ? 'الجمعة - السبت: مغلق' : 'Friday - Saturday: Closed'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Login / Register info */}
          <div className="bg-white rounded-xl p-6 border-2 border-accent-tan">
            <h3 className="text-xl font-bold text-brown-dark mb-3">
              {isRTL ? 'لديك حساب؟' : 'Have an account?'}
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              {isRTL
                ? 'سجّل الدخول لإدارة طلباتك وتتبع الشحن والاستفادة من برنامج النقاط الخضراء.'
                : 'Log in to manage your orders, track shipping, and use the Green Points program.'
              }
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${lang}/login`}
                className="inline-block px-5 py-2.5 bg-brown-primary text-primary-cream rounded-lg font-medium hover:bg-brown-dark transition-colors"
              >
                {t.login}
              </Link>
              <Link
                href={`/${lang}/registers`}
                className="inline-block px-5 py-2.5 border-2 border-brown-primary text-brown-primary rounded-lg font-medium hover:bg-brown-primary hover:text-primary-cream transition-colors"
              >
                {t.register}
              </Link>
            </div>
          </div>

          <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.254226843059!2d58.42559207503162!3d23.60564888462081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8e040581111111%3A0x3e8e040581111111!2sIndustrial%20Area%2C%20Ruwi%2C%20Muscat%2C%20Sultanate%20of%20Oman!5e0!3m2!1sen!2s!4v1234567890!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
