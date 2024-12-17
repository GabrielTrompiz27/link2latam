import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Users2, Network } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">{t('about.title')}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Who We Are Section */}
            <div className="bg-white rounded-xl shadow-sm p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-primary">
                  {t('about.whoWeAre.title')}
                </h3>
              </div>
              <p className="text-gray leading-relaxed">
                {t('about.whoWeAre.description')}
              </p>
            </div>

            {/* Ecosystem Section */}
            <div className="bg-white rounded-xl shadow-sm p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Network className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-primary">
                  {t('about.ecosystem.title')}
                </h3>
              </div>
              <p className="text-gray leading-relaxed">
                {t('about.ecosystem.description')}
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-gray">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-gray">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-gray">Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500M+</div>
              <div className="text-gray">Transactions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};