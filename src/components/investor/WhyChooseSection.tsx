import { useLanguage } from '@/contexts/LanguageContext';
import { BenefitsGrid } from './BenefitsGrid';
import { ConsultationForm } from './ConsultationForm';

interface WhyChooseSectionProps {
  onSubmit: (formData: any) => Promise<void>;
}

export const WhyChooseSection = ({ onSubmit }: WhyChooseSectionProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gray-50 py-16">
      <BenefitsGrid />
      
      {/* Consultation Section */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-4">
            Let's Discuss Your Investment Goals
          </h2>
          <p className="text-center text-primary-light mb-8">
            Schedule a one-on-one consultation with our investment experts to explore how Link2Latam can help you achieve your investment objectives. Our team is ready to provide personalized guidance and demonstrate our platform's capabilities.
          </p>
          
          <ConsultationForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};