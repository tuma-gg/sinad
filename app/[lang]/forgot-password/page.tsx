import { Language } from '@/Lib/translations';
import ForgotPasswordForm from './ForgotPasswordForm';

export default async function ForgotPasswordPage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  return <ForgotPasswordForm lang={lang} />;
}
