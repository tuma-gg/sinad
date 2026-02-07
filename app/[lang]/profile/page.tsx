import { Language, translations } from '@/Lib/translations';
import ProfileContent from './ProfileContent';

export default async function ProfilePage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-primary-bg pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-brown-dark mb-8 text-center">
          {lang === 'ar' ? 'حسابي' : 'My Account'}
        </h1>
        <ProfileContent lang={lang} />
      </div>
    </div>
  );
}