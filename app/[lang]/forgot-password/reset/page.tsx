import { Language } from '@/Lib/translations';
import ResetPasswordForm from './ResetPasswordForm';

export default async function ResetPasswordPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  return <ResetPasswordForm lang={lang} />;
}
