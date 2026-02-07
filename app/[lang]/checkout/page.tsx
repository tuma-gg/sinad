'use client';

import { useParams } from 'next/navigation';
import { Language, translations } from '@/Lib/translations';
import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function CheckoutPage() {
  const params = useParams();
  const lang = (params.lang as Language) || 'en';
  const t = translations[lang];
  const isRTL = lang === 'ar';

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    governorate: '',
    city: '',
    address: '',
    postalCode: '',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      alert(isRTL ? 'تم إتمام الطلب بنجاح!' : 'Order placed successfully!');
    }
  };

  const steps = [
    { num: 1, titleAr: 'المعلومات الشخصية', titleEn: 'Personal Information' },
    { num: 2, titleAr: 'عنوان التوصيل', titleEn: 'Delivery Address' },
    { num: 3, titleAr: 'طريقة الدفع / Visa', titleEn: 'Payment / Visa Info' },
    { num: 4, titleAr: 'مراجعة الطلب', titleEn: 'Review Order' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-4xl font-bold text-brown-dark mb-8">{t.checkout}</h1>

      <div className="mb-12">
        <div className="flex justify-between items-center">
          {steps.map((s, index) => (
            <div key={s.num} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    step >= s.num ? 'bg-brown-primary text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step > s.num ? <FiCheck /> : s.num}
                </div>
                <span className={`text-sm mt-2 ${step >= s.num ? 'text-brown-primary font-medium' : 'text-gray-500'}`}>
                  {isRTL ? s.titleAr : s.titleEn}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`h-1 flex-1 transition-colors duration-300 ${step > s.num ? 'bg-brown-primary' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isRTL ? 'الاسم الكامل' : 'Full Name'} *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold transition-colors"
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isRTL ? 'رقم الهاتف' : 'Phone Number'} *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+968"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isRTL ? 'المحافظة' : 'Governorate'} *
                </label>
                <select
                  name="governorate"
                  value={formData.governorate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="">{isRTL ? 'اختر المحافظة' : 'Select Governorate'}</option>
                  <option value="muscat">{isRTL ? 'مسقط' : 'Muscat'}</option>
                  <option value="dhofar">{isRTL ? 'ظفار' : 'Dhofar'}</option>
                  <option value="batinah">{isRTL ? 'الباطنة' : 'Al Batinah'}</option>
                  <option value="sharqiyah">{isRTL ? 'الشرقية' : 'Ash Sharqiyah'}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isRTL ? 'المدينة' : 'City'} *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold transition-colors"
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isRTL ? 'العنوان التفصيلي' : 'Location / Address'} *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold transition-colors"
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isRTL ? 'رمز بريدي (اختياري)' : 'Postal Code (Optional)'}
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  {isRTL ? 'اختر طريقة الدفع' : 'Select Payment Method'}
                </label>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-gold transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <span>{isRTL ? 'بطاقة ائتمان / Visa' : 'Credit Card / Visa'}</span>
                  </label>
                  <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-gold transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <span>{isRTL ? 'الدفع عند الاستلام' : 'Cash on Delivery'}</span>
                  </label>
                  <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-gold transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={formData.paymentMethod === 'bank'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <span>{isRTL ? 'تحويل بنكي' : 'Bank Transfer'}</span>
                  </label>
                </div>
              </div>
              {formData.paymentMethod === 'card' && (
                <div className="space-y-4 mt-6 p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-brown-dark">{isRTL ? 'معلومات البطاقة / Visa' : 'Card / Visa Info'}</h4>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {isRTL ? 'رقم البطاقة' : 'Card Number'} *
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      required={formData.paymentMethod === 'card'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {isRTL ? 'تاريخ الانتهاء' : 'Expiry Date'} *
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required={formData.paymentMethod === 'card'}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CVV *</label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        required={formData.paymentMethod === 'card'}
                        maxLength={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-primary-bg rounded-xl p-6 border-2 border-accent-tan">
                <h3 className="text-xl font-bold text-brown-dark mb-4">
                  {isRTL ? 'ملخص الطلب' : 'Order Summary'}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">{isRTL ? 'الاسم:' : 'Name:'}</span>
                    <span>{formData.fullName}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">{isRTL ? 'الهاتف:' : 'Phone:'}</span>
                    <span>{formData.phone}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">{isRTL ? 'البريد:' : 'Email:'}</span>
                    <span>{formData.email}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">{isRTL ? 'العنوان:' : 'Address:'}</span>
                    <span>{formData.address}, {formData.city}, {formData.governorate}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">{isRTL ? 'الدفع:' : 'Payment:'}</span>
                    <span>
                      {formData.paymentMethod === 'card' && (isRTL ? 'بطاقة ائتمان / Visa' : 'Credit Card / Visa')}
                      {formData.paymentMethod === 'cod' && (isRTL ? 'الدفع عند الاستلام' : 'Cash on Delivery')}
                      {formData.paymentMethod === 'bank' && (isRTL ? 'تحويل بنكي' : 'Bank Transfer')}
                    </span>
                  </div>
                </div>
                <div className="border-t border-gray-300 mt-4 pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>{isRTL ? 'المجموع:' : 'Total:'}</span>
                    <span className="text-gold">85 {t.omr}</span>
                  </div>
                </div>
              </div>
              <label className="flex items-start gap-3">
                <input type="checkbox" required className="mt-1" />
                <span className="text-sm text-gray-600">
                  {isRTL ? 'أوافق على الشروط والأحكام وسياسة الخصوصية' : 'I agree to the Terms & Conditions and Privacy Policy'}
                </span>
              </label>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-6 py-3 border-2 border-brown-primary text-brown-primary rounded-lg hover:bg-brown-primary hover:text-white transition-all duration-300"
            >
              {isRTL ? 'السابق' : 'Previous'}
            </button>
          )}
          <button
            type="submit"
            className="px-6 py-3 bg-brown-primary text-white rounded-lg hover:bg-gold hover:text-brown-dark transition-all duration-300 ml-auto"
          >
            {step < 4 ? (isRTL ? 'التالي' : 'Next') : (isRTL ? 'إتمام الطلب' : 'Place Order')}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
