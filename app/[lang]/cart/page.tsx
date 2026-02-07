import { Language } from '@/Lib/translations';
import CartContent from './CartContent';

export default async function CartPage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  return <CartContent lang={lang} />;
}
