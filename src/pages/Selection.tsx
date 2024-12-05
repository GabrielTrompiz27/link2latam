import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import ExporterForm from '@/components/ExporterForm';
import { useState } from 'react';

const Selection = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [step, setStep] = useState<number>(1);

  const renderExporterContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-6 animate-fade-in">
              {t('exporter.welcome.title')}
            </h1>
            <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto animate-fade-in">
              {t('exporter.welcome.subtitle')}
            </p>
            <button 
              className="btn-primary"
              onClick={() => setStep(2)}
            >
              {t('exporter.welcome.cta')}
            </button>
          </div>
        );
      case 2:
        return (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              {t('exporter.about.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-accent text-4xl mb-4">🤝</div>
                <h3 className="font-semibold mb-2">{t('exporter.about.feature1.title')}</h3>
                <p className="text-primary-light">{t('exporter.about.feature1.description')}</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-accent text-4xl mb-4">💰</div>
                <h3 className="font-semibold mb-2">{t('exporter.about.feature2.title')}</h3>
                <p className="text-primary-light">{t('exporter.about.feature2.description')}</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-accent text-4xl mb-4">🌎</div>
                <h3 className="font-semibold mb-2">{t('exporter.about.feature3.title')}</h3>
                <p className="text-primary-light">{t('exporter.about.feature3.description')}</p>
              </div>
            </div>
            <div className="text-center">
              <button 
                className="btn-primary"
                onClick={() => setStep(3)}
              >
                {t('exporter.about.cta')}
              </button>
            </div>
          </div>
        );
      case 3:
        return <ExporterForm />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center text-primary hover:text-accent mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          {t('selection.back')}
        </button>
        
        {!selectedType ? (
          <>
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
                  onClick={() => setSelectedType('investor')}
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
                  onClick={() => setSelectedType('exporter')}
                >
                  {t('nav.getStarted')}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="max-w-4xl mx-auto">
            {selectedType === 'exporter' ? (
              renderExporterContent()
            ) : (
              <div className="text-center">
                <h2 className="text-3xl font-bold text-primary mb-8">
                  {t('selection.investor.formTitle')}
                </h2>
                <p>{t('selection.investor.comingSoon')}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Selection;