import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { WelcomeSection } from '@/components/investor/WelcomeSection';
import { WhyChooseSection } from '@/components/investor/WhyChooseSection';
import { LanguageToggle } from '@/components/LanguageToggle';

const InvestorOnboarding = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={() => navigate('/get-started')} 
            className="flex items-center text-primary hover:text-accent"
          >
            <ArrowLeft className="mr-2" size={20} />
            {t('investor.back')}
          </button>
          <LanguageToggle />
        </div>
        <WelcomeSection />
        <WhyChooseSection />
      </div>
    </div>
  );
};

export default InvestorOnboarding;