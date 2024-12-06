import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const regions = [
  "Mexico",
  "Ecuador",
  "Colombia",
  "Bolivia",
  "Peru",
  "Argentina"
];

export const RegionalExpertise = () => {
  const { t } = useLanguage();
  
  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="section-title">{t('expertise.title')}</h2>
            <p className="text-primary-light mb-8">
              {t('expertise.subtitle')}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {regions.map((region, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-success" size={20} />
                  <span>{region}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-[4/3] bg-accent/10 rounded-full absolute inset-0 animate-pulse"></div>
            <div className="relative w-full aspect-[4/3]">
              <div className="absolute inset-0 bg-primary/30 rounded-lg"></div>
              <img
                src="/lovable-uploads/11f1f11c-64f6-4d9f-9855-72dacb1fa7fe.png"
                alt={t('expertise.mapAlt')}
                className="relative rounded-lg shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};