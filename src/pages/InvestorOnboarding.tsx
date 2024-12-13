import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { WelcomeSection } from '@/components/investor/WelcomeSection';
import { WhyChooseSection } from '@/components/investor/WhyChooseSection';
import { LanguageToggle } from '@/components/LanguageToggle';
import { Navbar } from '@/components/Navbar';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';

const InvestorOnboarding = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleFormSubmit = async (formData: any) => {
    try {
      const { error } = await supabase
        .from('investor_submissions')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your consultation request has been submitted successfully. We'll be in touch soon.",
      });

      // Optional: redirect to a thank you page or home
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <WelcomeSection />
        <WhyChooseSection onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default InvestorOnboarding;