import { Language } from '@/Lib/translations';
import LoginForm from './LoginForm';

export default async function LoginPage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  return <LoginForm lang={lang} />;
}
