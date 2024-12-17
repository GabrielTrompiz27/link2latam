import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Network, Eye, LayoutDashboard } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('about.title')}</h2>
          </div>

          <div className="space-y-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-primary mb-4">{t('about.whoWeAre.title')}</h3>
              <p className="text-gray leading-relaxed">{t('about.whoWeAre.description')}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {/* Transparency Pillar */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary text-center mb-3">
                  {t('about.pillars.transparency.title')}
                </h3>
                <p className="text-gray text-center">
                  {t('about.pillars.transparency.description')}
                </p>
              </div>

              {/* Network Pillar */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-accent">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Network className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary text-center mb-3">
                  {t('about.pillars.network.title')}
                </h3>
                <p className="text-gray text-center">
                  {t('about.pillars.network.description')}
                </p>
              </div>

              {/* Platform Pillar */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-success">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-success/10 rounded-full">
                    <LayoutDashboard className="w-8 h-8 text-success" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary text-center mb-3">
                  {t('about.pillars.platform.title')}
                </h3>
                <p className="text-gray text-center">
                  {t('about.pillars.platform.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};