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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Services Section */}
          <div>
            <h2 className="section-title">{t('services.title')}</h2>
            <p className="section-subtitle mb-8">
              {t('services.subtitle')}
            </p>
            
            <div className="grid grid-cols-1 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <service.icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-primary-light">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Focus Section */}
          <div>
            <h2 className="section-title">Our Focus</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-primary-light mb-6">
                All our financing solutions are centered around asset-backed lending, ensuring security, transparency, and sustainable outcomes. By leveraging tangible assets such as accounts receivable, real assets (including real estate), and equity holdings (such as company shares), we provide businesses with the capital they need while mitigating risk for all stakeholders.
              </p>
              
              <h3 className="text-lg font-semibold mb-4 text-primary">This approach allows us to:</h3>
              <ul className="space-y-3 text-primary-light">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-accent rounded-full flex-shrink-0"></span>
                  <span>Deliver flexible and tailored funding solutions aligned with business objectives.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-accent rounded-full flex-shrink-0"></span>
                  <span>Ensure reduced risk exposure for investors and companies alike.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-accent rounded-full flex-shrink-0"></span>
                  <span>Unlock value from existing assets to drive sustainable growth and expansion.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};