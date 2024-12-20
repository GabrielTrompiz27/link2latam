import { Shield, Lightbulb, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const OurFocus = () => {
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: Target,
      text: t('focus.benefits.target')
    },
    {
      icon: Shield,
      text: t('focus.benefits.shield')
    },
    {
      icon: Lightbulb,
      text: t('focus.benefits.lightbulb')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">{t('focus.title')}</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">
            {t('focus.description')}
          </p>
          
          <h3 className="text-xl font-semibold mb-6 text-primary">{t('focus.approach')}</h3>
          
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <benefit.icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};