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
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Responsive sizing */}
          <Link href={`/${lang}`} className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 logo-no-bg">
              <Image src="/logo.png" alt="سِناد Sinad" fill className="object-contain" priority />
            </div>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <div className="font-bold text-lg sm:text-xl">Sinad</div>
              <div className="text-xs sm:text-sm text-gold">{isRTL ? 'ابتكارات مستدامة' : 'Sustainable Innovation'}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
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
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Switcher - Desktop only */}
            <button
              onClick={switchLanguage}
              className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg border border-gold text-gold hover:bg-gold hover:text-brown-dark transition-all"
              title={isRTL ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              <FiGlobe />
              <span className="text-sm">{lang === 'ar' ? 'EN' : 'ع'}</span>
            </button>

            {/* Cart - Better mobile sizing */}
            <Link
              href={`/${lang}/cart`}
              className="relative p-2 hover:text-gold transition-colors"
              aria-label="Shopping cart"
            >
              <FiShoppingCart size={20} className="sm:w-6 sm:h-6" />
              <span className="absolute -top-1 -right-1 bg-gold text-brown-dark text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Link>

            {/* Login - Hidden on mobile */}
            <Link
              href={`/${lang}/login`}
              className="hidden lg:block px-4 py-2 border-2 border-gold text-gold rounded-lg hover:bg-gold hover:text-brown-dark transition-all font-medium text-sm"
            >
              {t.login}
            </Link>

            {/* Mobile Menu Button - Better touch target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:text-gold transition-colors touch-manipulation"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Better spacing and touch targets */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-brown-primary pt-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 px-2 hover:text-gold hover:bg-brown-primary/30 rounded transition-colors text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={switchLanguage}
              className="flex items-center gap-2 py-3 px-2 text-gold w-full hover:bg-brown-primary/30 rounded transition-colors"
            >
              <FiGlobe />
              <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
            </button>
            <Link
              href={`/${lang}/login`}
              className="block py-3 px-2 text-gold font-medium hover:bg-brown-primary/30 rounded transition-colors"
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