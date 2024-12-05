import { useLanguage } from '@/contexts/LanguageContext';

export const WelcomeSection = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">
          {t('investor.welcome.title')}
        </h1>
        <p className="text-xl text-primary-light mb-8">
          {t('investor.welcome.subtitle')}
        </p>
      </div>
    </div>
  );
};