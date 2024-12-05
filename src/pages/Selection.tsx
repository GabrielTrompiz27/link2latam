import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import ExporterForm from '@/components/ExporterForm';
import { useState } from 'react';

const Selection = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [selectedType, setSelectedType] = useState<string | null>(null);

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
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              {selectedType === 'investor' 
                ? t('selection.investor.formTitle')
                : t('selection.exporter.formTitle')}
            </h2>
            {selectedType === 'exporter' && <ExporterForm />}
            {/* Add InvestorForm component when needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Selection;