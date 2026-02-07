import { Language } from '@/Lib/translations';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ChatBot from '@/components/ChatBot';
import LangDirection from '@/components/LangDirection';

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const language = (lang === 'ar' || lang === 'en' ? lang : 'en') as Language;

  return (
    <>
      <LangDirection lang={language} />
      <Header lang={language} />
      <main className="min-h-screen pt-20 texture-overlay">
        {children}
      </main>
      <Footer lang={language} />
      <ChatBot lang={language} />
    </>
  );
}