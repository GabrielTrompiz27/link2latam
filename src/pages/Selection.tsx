import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';

const Selection = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          {t('selection.title')}
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">{t('selection.investor.title')}</h2>
            <p className="text-gray-600 mb-6">
              {t('selection.investor.description')}
            </p>
            <button 
              className="btn-primary w-full"
              onClick={() => navigate('/investor')}
            >
              {t('nav.getStarted')}
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">{t('selection.exporter.title')}</h2>
            <p className="text-gray-600 mb-6">
              {t('selection.exporter.description')}
            </p>
            <button 
              className="btn-primary w-full"
              onClick={() => navigate('/exporter')}
            >
              {t('nav.getStarted')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;