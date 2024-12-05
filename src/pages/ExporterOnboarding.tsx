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

const formSchema = z.object({
  // Step 1 - all fields required
  companyName: z.string().min(1, "Company name is required"),
  country: z.string().min(1, "Country is required"),
  otherCountry: z.string().optional(),
  industry: z.string().min(1, "Industry is required"),
  exportProducts: z.string().min(1, "Export products are required"),
  invoiceCurrency: z.string().min(1, "Currency is required"),
  monthlyVolumes: z.number().min(1, "Monthly volumes are required"),
  employees: z.string().min(1, "Number of employees is required"),

  // Step 2 - all fields required
  financingCurrency: z.string().min(1, "Currency is required"),
  otherFinancingCurrency: z.string().optional().superRefine((val, ctx) => {
    const data = ctx.path.length > 0 ? (ctx as any).data : undefined;
    if (data?.financingCurrency === 'OTHER' && !val) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please specify the currency"
      });
    }
  }),
  financingTypes: z.array(z.string()).min(1, "At least one financing type is required"),
  interestRates: z.record(z.number().min(0, "Interest rate must be positive")),
  financingPeriods: z.record(z.number().min(1, "Financing period must be at least 1 day")),
  totalFinancing: z.number().min(1, "Total financing amount is required"),

  // Step 3 - only credit rating is required
  creditRating: z.string().min(1, "Credit rating is required"),
  creditChallenges: z.string().optional(),
  collateralTypes: z.array(z.string()).optional(),
  otherCollateral: z.string().optional(),
  creditEnhancement: z.string().optional(),
  creditEnhancementDetails: z.string().optional(),

  // Step 4 - all fields optional
  fullName: z.string().optional(),
  position: z.string().optional(),
  email: z.string().email().optional(),
  phoneNumber: z.string().optional(),
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
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => navigate('/get-started')} 
              className="flex items-center text-primary hover:text-accent transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              {t('exporter.back')}
            </button>
            <LanguageToggle />
          </div>
        </div>
      </div>

      <WelcomeSection />
      <WhyChooseSection />
      <QuestionnaireSection 
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        form={form}
      />
    </div>
  );
};

export default ExporterOnboarding;