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
        />
      </div>
    </div>
  );
};

export default ExporterOnboarding;
