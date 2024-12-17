import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="section-subtitle">{t('about.subtitle')}</p>
          </div>

          <div className="space-y-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-primary mb-4">{t('about.whoWeAre.title')}</h3>
              <p className="text-gray leading-relaxed">{t('about.whoWeAre.description')}</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-primary mb-4">{t('about.ecosystem.title')}</h3>
              <p className="text-gray leading-relaxed">{t('about.ecosystem.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};