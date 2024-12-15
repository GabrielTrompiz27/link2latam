import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { WelcomeSection } from '@/components/exporter/WelcomeSection';
import { WhyChooseSection } from '@/components/exporter/WhyChooseSection';
import { QuestionnaireSection } from '@/components/exporter/QuestionnaireSection';
import { Navbar } from '@/components/Navbar';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

emailjs.init("WlivaL7VCZCUVpj0n");

const ExporterOnboarding = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleFormSubmit = async (formData: any) => {
    try {
      // First save to Supabase
      const { error: supabaseError } = await supabase
        .from('exporter_submissions')
        .insert([formData]);

      if (supabaseError) throw supabaseError;

      // Then send email
      const emailParams = {
        from_name: formData.fullName || 'Not provided',
        from_email: formData.email || 'Not provided',
        phone: formData.phoneNumber || 'Not provided',
        contact_method: formData.preferredContact || 'Not provided',
        message: formData.additionalNotes || 'No additional notes',
        subject: 'New Exporter Registration',
        to_email: 'gabrieltrompiz27@gmail.com'
      };

      const emailResponse = await emailjs.send(
        'default_service',
        'template_uhlfing',
        emailParams
      );

      if (emailResponse.status === 200) {
        toast({
          title: "Success",
          description: "Your form has been submitted successfully. We'll be in touch soon.",
        });
        navigate('/');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
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
        <WhyChooseSection />
        <QuestionnaireSection onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default ExporterOnboarding;