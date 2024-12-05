import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';

const Selection = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[500px] bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/placeholder.svg)' }}
        />
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <button 
            onClick={() => navigate('/')} 
            className="absolute top-8 left-4 flex items-center text-white hover:text-accent-light transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            {t('selection.back')}
          </button>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            {t('selection.title')}
          </h1>
          
          <p className="text-xl text-white/80 max-w-2xl mb-8 animate-fade-in">
            {t('selection.subtitle')}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4">{t('selection.investor.title')}</h2>
            <p className="text-gray-600 mb-6">
              {t('selection.investor.description')}
            </p>
            <button className="btn-primary w-full">
              {t('nav.getStarted')}
            </button>
          </Card>
          
          <Card className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4">{t('selection.exporter.title')}</h2>
            <p className="text-gray-600 mb-6">
              {t('selection.exporter.description')}
            </p>
            <button className="btn-primary w-full">
              {t('nav.getStarted')}
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Selection;