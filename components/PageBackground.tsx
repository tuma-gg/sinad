'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const PAGE_BG_COLORS: Record<string, string> = {
  default: '#fcf1e9',       // primary-bg
  contact: '#fcfcfc',       // primary-cream
  media: '#fcfcfc',
  registers: '#fcfcfc',
  login: '#fcfcfc',
  checkout: '#fcf1e9',
  cart: '#fcf1e9',
  'green-points': '#fcfcfc',
  partners: '#fcf1e9',
  products: '#fcf1e9',
};

export default function PageBackground() {
  const pathname = usePathname();

  useEffect(() => {
    const segment = pathname.split('/').filter(Boolean);
    const page = segment[1] ?? 'default'; // [lang, page] -> use page
    const color = PAGE_BG_COLORS[page] ?? PAGE_BG_COLORS.default;
    document.documentElement.style.setProperty('--page-bg', color);
  }, [pathname]);

  return null;
}
