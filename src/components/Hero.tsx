import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/341c313f-fa86-4246-8173-8a64a6e5c50a.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen p-8 md:p-16">
        {/* Top centered text */}
        <div className="w-full text-center pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {t('hero.title')}
          </h1>
        </div>

        {/* Bottom left text and button */}
        <div className="max-w-2xl">
          <p className="text-xl text-white/90 mb-8 animate-fade-in">
            {t('hero.subtitle')}
          </p>
          <div className="animate-fade-in">
            <button 
              className="btn-primary inline-flex items-center"
              onClick={() => navigate('/get-started')}
            >
              {t('hero.getStarted')} <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};