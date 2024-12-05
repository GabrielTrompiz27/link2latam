import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const ExporterOnboarding = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={() => navigate('/get-started')} 
            className="flex items-center text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            {t('exporter.back')}
          </button>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-primary mb-6 animate-fade-in">
            {t('exporter.welcome.title')}
          </h1>
          <p className="text-xl text-primary-light mb-8 animate-fade-in">
            {t('exporter.welcome.subtitle')}
          </p>
        </div>
      </div>

      {/* Why Choose Link2Latam Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            {t('exporter.whyChoose.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Fast Funding */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('exporter.whyChoose.fast.title')}</h3>
              <p className="text-primary-light">{t('exporter.whyChoose.fast.description')}</p>
            </div>

            {/* Expert Support */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('exporter.whyChoose.expert.title')}</h3>
              <p className="text-primary-light">{t('exporter.whyChoose.expert.description')}</p>
            </div>

            {/* Global Network */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('exporter.whyChoose.global.title')}</h3>
              <p className="text-primary-light">{t('exporter.whyChoose.global.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExporterOnboarding;