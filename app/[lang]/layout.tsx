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
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;

  return (
    <>
      <LangDirection lang={lang} />
      <Header lang={lang} />
      <main className="min-h-screen pt-20 texture-overlay">
        {children}
      </main>
      <Footer lang={lang} />
      <ChatBot lang={lang} />
    </>
  );
}