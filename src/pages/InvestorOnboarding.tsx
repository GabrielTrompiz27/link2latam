import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { WelcomeSection } from '@/components/investor/WelcomeSection';
import { WhyChooseSection } from '@/components/investor/WhyChooseSection';
import { LanguageToggle } from '@/components/LanguageToggle';
import { Navbar } from '@/components/Navbar';

const InvestorOnboarding = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <WelcomeSection />
        <WhyChooseSection />
      </div>
    </div>
  );
};

export default InvestorOnboarding;