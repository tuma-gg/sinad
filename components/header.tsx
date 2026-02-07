'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Language, translations } from '@/Lib/translations';
import { FiMenu, FiX, FiShoppingCart, FiGlobe } from 'react-icons/fi';

interface HeaderProps {
  lang: Language;
}

export default function Header({ lang }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];
  const isRTL = lang === 'ar';

  const navigation = [
    { name: t.about, href: `/${lang}#about` },
    { name: t.products, href: `/${lang}/products` },
    { name: t.greenPoints, href: `/${lang}/green-points` },
    { name: t.partners, href: `/${lang}/partners` },
    { name: t.contact, href: `/${lang}/contact` },
  ];

  const switchLanguage = () => {
    const newLang = lang === 'ar' ? 'en' : 'ar';
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000`;
    window.location.href = `/${newLang}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brown-dark text-primary-cream shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="relative w-16 h-16 flex-shrink-0 logo-no-bg">
              <Image src="/logo.png" alt="سِناد Sinad" fill className="object-contain" priority />
            </div>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <div className="font-bold text-xl">SINAD</div>
              <div className="text-sm text-gold">{isRTL ? 'ابتكارات مستدامة' : 'Sustainable Innovation'}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-gold transition-colors border-b-2 border-transparent hover:border-gold pb-1"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={switchLanguage}
              className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg border border-gold text-gold hover:bg-gold hover:text-brown-dark transition-all"
              title={isRTL ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              <FiGlobe />
              <span className="text-sm">{lang === 'ar' ? 'EN' : 'ع'}</span>
            </button>

            {/* Cart */}
            <Link
              href={`/${lang}/cart`}
              className="relative p-2 hover:text-gold transition-colors"
            >
              <FiShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-gold text-brown-dark text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Link>

            {/* Login */}
            <Link
              href={`/${lang}/login`}
              className="hidden md:block px-4 py-2 border-2 border-gold text-gold rounded-lg hover:bg-gold hover:text-brown-dark transition-all font-medium"
            >
              {t.login}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:text-gold transition-colors"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-brown-primary pt-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={switchLanguage}
              className="flex items-center gap-2 py-2 text-gold"
            >
              <FiGlobe />
              <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
            </button>
            <Link
              href={`/${lang}/login`}
              className="block py-2 text-gold font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.login}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}