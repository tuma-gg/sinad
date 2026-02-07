import { Language } from '@/Lib/translations';
import RegisterForm from './RegisterForm';

export default async function RegisterPage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  return <RegisterForm lang={lang} />;
}
