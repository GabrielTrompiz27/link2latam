import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
          {t('hero.title')}
        </h1>
        <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto animate-fade-in">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button 
            className="btn-primary inline-flex items-center"
            onClick={() => navigate('/get-started')}
          >
            {t('hero.getStarted')} <ArrowRight className="ml-2" size={20} />
          </button>
          <button className="btn-secondary">{t('hero.learnMore')}</button>
        </div>
      </div>
    </div>
  );
};