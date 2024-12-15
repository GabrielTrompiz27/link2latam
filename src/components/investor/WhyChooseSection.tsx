import { useLanguage } from '@/contexts/LanguageContext';
import { BenefitsGrid } from './BenefitsGrid';
import { ConsultationForm } from './ConsultationForm';

export const WhyChooseSection = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          {t('investor.whyChoose.title')}
        </h2>
        
        <BenefitsGrid />
        <ConsultationForm />
      </div>
    </div>
  );
};