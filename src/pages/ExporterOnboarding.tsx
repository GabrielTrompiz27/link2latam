import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { CompanyInfoStep } from '@/components/exporter/CompanyInfoStep';
import { FinancingDetailsStep } from '@/components/exporter/FinancingDetailsStep';
import { AccessToCreditStep } from '@/components/exporter/AccessToCreditStep';

const formSchema = z.object({
  // Step 1
  companyName: z.string(),
  industry: z.string(),
  exportProducts: z.string(),
  monthlyVolumes: z.number(),
  employees: z.string(),
  
  // Step 2
  financingTypes: z.array(z.string()),
  interestRates: z.record(z.string(), z.number()).optional(),
  financingPeriods: z.record(z.string(), z.number()).optional(),
  totalFinancing: z.number(),

  // Step 3
  creditRating: z.string(),
  creditChallenges: z.string(),
  collateralTypes: z.array(z.string()),
  otherCollateral: z.string().optional(),
  creditEnhancement: z.string(),
  creditEnhancementDetails: z.string().optional(),
});

const ExporterOnboardingContent = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: '',
      industry: '',
      exportProducts: '',
      monthlyVolumes: 0,
      employees: '',
      financingTypes: [],
      interestRates: {},
      financingPeriods: {},
      totalFinancing: 0,
      creditRating: '',
      creditChallenges: '',
      collateralTypes: [], // Initialize as empty array
      otherCollateral: '',
      creditEnhancement: '',
      creditEnhancementDetails: '',
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={() => navigate('/get-started')} 
            className="flex items-center text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            {t('exporter.back')}
          </button>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-primary mb-6">
            {t('exporter.welcome.title')}
          </h1>
          <p className="text-xl text-primary-light mb-8">
            {t('exporter.welcome.subtitle')}
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {currentStep === 1 && <CompanyInfoStep form={form} />}
                {currentStep === 2 && <FinancingDetailsStep form={form} />}
                {currentStep === 3 && <AccessToCreditStep form={form} />}

                {/* Navigation buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                  >
                    {t('exporter.questionnaire.previous')}
                  </Button>
                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
                    >
                      {t('exporter.questionnaire.next')}
                    </Button>
                  ) : (
                    <Button type="submit">
                      {t('exporter.questionnaire.submit')}
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Split into a separate component to reduce file size
const ExporterOnboarding = () => {
  return <ExporterOnboardingContent />;
};

export default ExporterOnboarding;