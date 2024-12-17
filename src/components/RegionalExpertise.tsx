import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

type RegionDisplay = {
  name: string;
  flag?: string;
}

const regions: RegionDisplay[] = [
  { name: "Mexico", flag: "/lovable-uploads/c3ec3ddd-b1f0-40bf-a418-834f1da77a0e.png" },
  { name: "Ecuador", flag: "/lovable-uploads/d01a65a1-36c7-4540-a288-a255538ce384.png" },
  { name: "Colombia", flag: "/lovable-uploads/2a7a0716-69b4-461d-a925-26518ec851a6.png" },
  { name: "Bolivia", flag: "/lovable-uploads/eb1bc241-be25-43c9-aab1-41946f66970d.png" },
  { name: "Peru", flag: "/lovable-uploads/fe57848d-868d-4153-8903-4df3414fac43.png" },
  { name: "Argentina", flag: "/lovable-uploads/848d6057-2af9-4a10-bca1-14a621010324.png" }
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
                <div key={index} className="flex items-center justify-between p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  {region.flag ? (
                    <>
                      <span className="font-medium">{region.name}</span>
                      <img 
                        src={region.flag} 
                        alt={`${region.name} flag`}
                        className="w-12 h-8 object-cover rounded shadow-sm ml-2"
                      />
                    </>
                  ) : (
                    <>
                      <CheckCircle className="text-success" size={20} />
                      <span>{region.name}</span>
                    </>
                  )}
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