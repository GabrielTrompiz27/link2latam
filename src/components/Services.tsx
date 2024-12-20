import { Banknote, Landmark } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Banknote,
      title: t('services.invoiceFactoring.title'),
      description: t('services.invoiceFactoring.description')
    },
    {
      icon: Landmark,
      title: t('services.directLending.title'),
      description: t('services.directLending.description')
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">{t('services.title')}</h2>
        <p className="section-subtitle text-center">
          {t('services.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <service.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-primary-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};