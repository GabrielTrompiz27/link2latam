import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div 
      className="relative pt-32 pb-20 px-4 min-h-[600px] flex items-center"
      style={{
        backgroundImage: "url('/lovable-uploads/56bbcf22-d12b-416e-8a81-4f20d2359618.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-primary/40"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          {t('hero.title')}
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto animate-fade-in">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button 
            className="btn-primary inline-flex items-center"
            onClick={() => navigate('/get-started')}
          >
            {t('hero.getStarted')} <ArrowRight className="ml-2" size={20} />
          </button>
          <button className="btn-secondary">
            {t('hero.learnMore')}
          </button>
        </div>
      </div>
    </div>
  );
};