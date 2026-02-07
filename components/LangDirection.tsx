'use client';

import { useEffect } from 'react';
import type { Language } from '@/Lib/translations';

interface LangDirectionProps {
  lang: Language;
}

export default function LangDirection({ lang }: LangDirectionProps) {
  useEffect(() => {
    const isRTL = lang === 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.body.className = isRTL ? 'font-arabic' : 'font-english';
  }, [lang]);
  return null;
}
