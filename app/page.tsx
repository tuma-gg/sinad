'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function LanguageSelection() {
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState<string | null>(null);

  const handleLanguageSelect = (lang: 'ar' | 'en') => {
    setSelectedLang(lang);
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`;
    setTimeout(() => router.push(`/${lang}`), 350);
  };

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-bg via-primary-cream to-accent-tan texture-overlay overflow-hidden">
      <div className="w-full max-w-2xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <div className="w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto mb-4 relative logo-no-bg">
            <Image src="/logo.png" alt="سِناد Sinad" fill className="object-contain" priority />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-brown-dark mb-2">SINAD</h1>
          <p className="text-base sm:text-lg text-brown-primary">Sustainable Building Innovations</p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl sm:text-2xl font-semibold text-brown-dark mb-6 sm:mb-8"
        >
          اختر اللغة / Choose Language
        </motion.h2>

        <div className="flex flex-row gap-4 justify-center items-center">
          <motion.button
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleLanguageSelect('ar')}
            className={`
              group relative overflow-hidden
              w-40 h-28 rounded-2xl
              bg-brown-primary text-primary-cream
              font-arabic text-xl font-bold
              transition-all duration-300
              hover:shadow-2xl
              touch-manipulation
              flex-shrink-0
              ${selectedLang === 'ar' ? 'ring-4 ring-gold' : ''}
            `}
          >
            <div className="absolute inset-0 bg-gold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">عربي</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleLanguageSelect('en')}
            className={`
              group relative overflow-hidden
              w-40 h-28 rounded-2xl
              bg-brown-primary text-primary-cream
              font-english text-xl font-bold
              transition-all duration-300
              hover:shadow-2xl
              touch-manipulation
              flex-shrink-0
              ${selectedLang === 'en' ? 'ring-4 ring-gold' : ''}
            `}
          >
            <div className="absolute inset-0 bg-gold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">English</span>
          </motion.button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 sm:mt-12 text-sm sm:text-base text-brown-primary font-light"
        >
          <span className="font-arabic block mb-1">من الطبيعة، للبناء المستدام</span>
          <span className="font-english block">From Nature, For Sustainable Building</span>
        </motion.p>
      </div>
    </div>
  );
}