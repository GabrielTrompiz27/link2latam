import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-white">{t('about.title')}</h2>
          </div>

          <div className="space-y-12">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:bg-white/95 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-primary mb-4">{t('about.whoWeAre.title')}</h3>
              <p className="text-gray-800 leading-relaxed">{t('about.whoWeAre.description')}</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:bg-white/95 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-primary mb-4">{t('about.ecosystem.title')}</h3>
              <p className="text-gray-800 leading-relaxed">{t('about.ecosystem.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};