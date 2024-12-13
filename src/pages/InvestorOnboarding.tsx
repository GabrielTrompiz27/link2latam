import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { WelcomeSection } from '@/components/investor/WelcomeSection';
import { WhyChooseSection } from '@/components/investor/WhyChooseSection';
import { LanguageToggle } from '@/components/LanguageToggle';
import { Navbar } from '@/components/Navbar';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';
import { toast } from 'sonner';

const InvestorOnboarding = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleFormSubmit = async (formData: any) => {
    try {
      // Add a timestamp to the data
      const submissionData = {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        contact_method: formData.contactMethod,
        message: formData.message,
        created_at: new Date().toISOString()
      };

      const { error } = await supabase
        .from('investor_submissions')
        .insert([submissionData]);

      if (error) {
        console.error('Error details:', error);
        throw error;
      }

      toast.success("Your consultation request has been submitted successfully. We'll be in touch soon.");
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("There was a problem submitting your form. Please try again.");
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