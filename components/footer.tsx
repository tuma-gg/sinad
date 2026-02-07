import Link from 'next/link';
import Image from 'next/image';
import { Language, translations } from '@/Lib/translations';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang];
  const isRTL = lang === 'ar';

  const productLinks = [
    { name: t.powder || 'مسحوق سِناد / SINAD Powder', href: `/${lang}/products/powder` },
    { name: t.paste || 'معجون سِناد / SINAD Paste', href: `/${lang}/products/paste` },
    { name: t.liquid || 'سائل سِناد / SINAD Liquid', href: `/${lang}/products/liquid` },
  ];

  const quickLinks = [
    { name: t.about, href: `/${lang}#about` },
    { name: t.quality, href: `/${lang}#quality` },
    { name: t.partners, href: `/${lang}/partners` },
    { name: t.media, href: `/${lang}/media` },
    { name: t.privacy, href: `/${lang}/privacy` },
    { name: t.terms, href: `/${lang}/terms` },
  ];

  return (
    <footer className="bg-brown-dark text-primary-cream mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About Company */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">{t.footerAbout}</h3>
            <div className="mb-4">
              <div className="relative w-20 h-20 mb-3 logo-no-bg">
                <Image src="/logo.png" alt="سِناد Sinad" fill className="object-contain" />
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {isRTL 
                  ? 'شركة عُمانية رائدة في ابتكارات البناء المستدامة من مواد طبيعية'
                  : 'Leading Omani company in sustainable building innovations from natural materials'
                }
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">{t.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">{t.products}</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">{t.contactUs}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <FiPhone className="text-gold" />
                <a href="tel:+96879229423" className="hover:text-gold transition-colors" dir="ltr">
                  +968 7922 9423
                </a>
                {isRTL && <span className="text-gray-400 text-xs">٩٦٨ ٧٩٢٢ ٩٤٢٣</span>}
              </li>
              <li className="flex items-center gap-2 text-sm">
                <FiMail className="text-gold" />
                <a href="mailto:sinadco.om@gmail.com" className="hover:text-gold transition-colors">
                  sinadco.om@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <FiMapPin className="text-gold mt-1" />
                <span>{isRTL ? 'مسقط، سلطنة عُمان' : 'Muscat, Oman'}</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6 flex-wrap">
              <a
                href="https://www.instagram.com/sinad_om?igsh=MWM5azNrMjF5d3Jwbw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold flex items-center justify-center hover:bg-gold hover:text-brown-dark transition-all"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/sinad-سِـــنــاد-5535203a9?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold flex items-center justify-center hover:bg-gold hover:text-brown-dark transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://x.com/sinad_om?s=20"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold flex items-center justify-center hover:bg-gold hover:text-brown-dark transition-all"
                aria-label="X"
              >
                <FiTwitter />
              </a>
              <a
                href="https://www.tiktok.com/@sinad_om?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold flex items-center justify-center hover:bg-gold hover:text-brown-dark transition-all"
                aria-label="TikTok"
              >
                <SiTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brown-primary mt-8 pt-6 text-center text-sm text-gray-400">
          <p>
            © 2026 SINAD. {t.allRightsReserved}
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href={`/${lang}/privacy`} className="hover:text-gold transition-colors">
              {t.privacy}
            </Link>
            <span>|</span>
            <Link href={`/${lang}/terms`} className="hover:text-gold transition-colors">
              {t.terms}
            </Link>
            <span>|</span>
            <Link href={`/${lang}/shipping`} className="hover:text-gold transition-colors">
              {t.shippingPolicy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}