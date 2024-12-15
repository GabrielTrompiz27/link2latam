import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { LanguageToggle } from '@/components/LanguageToggle';
import { WelcomeSection } from '@/components/exporter/WelcomeSection';
import { WhyChooseSection } from '@/components/exporter/WhyChooseSection';
import { QuestionnaireSection } from '@/components/exporter/QuestionnaireSection';
import { Navbar } from '@/components/Navbar';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("WlivaL7VCZCUVpj0n");

const formSchema = z.object({
  // Step 1 - all fields required
  companyName: z.string().min(1, { message: ' ' }),
  country: z.string().min(1, { message: ' ' }),
  otherCountry: z.string().optional(),
  industry: z.string().min(1, { message: ' ' }),
  exportProducts: z.string().min(1, { message: ' ' }),
  invoiceCurrency: z.string().min(1, { message: ' ' }),
  monthlyVolumes: z.number().min(1, { message: ' ' }),
  employees: z.string().min(1, { message: ' ' }),

  // Step 2 - all fields required
  financingCurrency: z.string().min(1, { message: ' ' }),
  otherFinancingCurrency: z.string().optional().superRefine((val, ctx) => {
    const data = ctx.path.length > 0 ? (ctx as any).data : undefined;
    if (data?.financingCurrency === 'OTHER' && !val) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: " "
      });
    }
  }),
  financingTypes: z.array(z.string()).min(1, { message: ' ' }),
  interestRates: z.record(z.number().min(0, { message: ' ' })),
  financingPeriods: z.record(z.number().min(1, { message: ' ' })),
  totalFinancing: z.number().min(1, { message: ' ' }),

  // Step 3 - credit rating is required
  creditRating: z.string().min(1, { message: ' ' }),
  creditChallenges: z.string().optional(),
  collateralTypes: z.array(z.string()).optional(),
  otherCollateral: z.string().optional(),
  creditEnhancement: z.string().optional(),
  creditEnhancementDetails: z.string().optional(),

  // Step 4 - most fields required except preferredContact and additionalNotes
  fullName: z.string().min(1, { message: ' ' }),
  position: z.string().min(1, { message: ' ' }),
  email: z.string().email({ message: ' ' }),
  phoneNumber: z.string().min(1, { message: ' ' }),
  preferredContact: z.string().optional(),
  additionalNotes: z.string().optional(),
});

const ExporterOnboarding = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: '',
      country: '',
      otherCountry: '',
      industry: '',
      exportProducts: '',
      invoiceCurrency: '',
      monthlyVolumes: 0,
      employees: '',
      financingTypes: [],
      totalFinancing: 0,
      creditRating: '',
      creditChallenges: '',
      collateralTypes: [],
      otherCollateral: '',
      creditEnhancement: '',
      creditEnhancementDetails: '',
      fullName: '',
      position: '',
      email: '',
      phoneNumber: '',
      preferredContact: 'email',
      additionalNotes: '',
    }
  });

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
        <QuestionnaireSection 
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          form={form}
          onSubmit={handleFormSubmit}
        />
      </div>
    </div>
  );
};

export default ExporterOnboarding;