import { Language } from '@/Lib/translations';
import ContactForm from './ContactForm';

export default async function ContactPage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  return <ContactForm lang={lang} />;
}
