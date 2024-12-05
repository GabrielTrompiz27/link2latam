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
import { ContactInfoStep } from '@/components/exporter/ContactInfoStep';
import { LanguageToggle } from '@/components/LanguageToggle';

const formSchema = z.object({
  // Step 1 - all fields required
  companyName: z.string().min(1, "Company name is required"),
  country: z.string().min(1, "Country is required"),
  otherCountry: z.string().optional().superRefine((val, ctx) => {
    if (ctx.parent.country === 'Other' && !val) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please specify your country"
      });
    }
  }),
  industry: z.string().min(1, "Industry is required"),
  exportProducts: z.string().min(1, "Export products are required"),
  invoiceCurrency: z.string().min(1, "Currency is required"),
  monthlyVolumes: z.number().min(1, "Monthly volumes are required"),
  employees: z.string().min(1, "Number of employees is required"),

  // Step 2
  financingTypes: z.array(z.string()),
  totalFinancing: z.number(),

  // Step 3
  creditRating: z.string(),
  creditChallenges: z.string(),
  collateralTypes: z.array(z.string()),
  otherCollateral: z.string().optional(),
  creditEnhancement: z.string(),
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

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // Handle form submission
  };

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

      {/* Why Choose Link2Latam Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            {t('exporter.whyChoose.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Fast Funding */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('exporter.whyChoose.fast.title')}</h3>
              <p className="text-primary-light">{t('exporter.whyChoose.fast.description')}</p>
            </div>

            {/* Expert Support */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('exporter.whyChoose.expert.title')}</h3>
              <p className="text-primary-light">{t('exporter.whyChoose.expert.description')}</p>
            </div>

            {/* Global Network */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 002 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('exporter.whyChoose.global.title')}</h3>
              <p className="text-primary-light">{t('exporter.whyChoose.global.description')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Questionnaire Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-4">
              {t('exporter.questionnaire.title')}
            </h2>
            <p className="text-center text-primary-light mb-12">
              {t('exporter.questionnaire.subtitle')}
            </p>
            
            {/* Multi-step form container */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* Step indicator */}
              <div className="mb-8">
                <div className="flex justify-between items-center">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step === currentStep 
                          ? 'bg-accent text-white' 
                          : step < currentStep 
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-200 text-gray-600'
                      }`}>
                        {step < currentStep ? '✓' : step}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {currentStep === 1 && <CompanyInfoStep form={form} />}
                  {currentStep === 2 && <FinancingDetailsStep form={form} />}
                  {currentStep === 3 && <AccessToCreditStep form={form} />}
                  {currentStep === 4 && <ContactInfoStep form={form} />}

                  {/* Navigation buttons */}
                  <div className="flex justify-between mt-8">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                      disabled={currentStep === 1}
                      className="font-medium"
                    >
                      {t('exporter.questionnaire.previous')}
                    </Button>
                    {currentStep < 4 ? (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                        className="font-medium"
                      >
                        {t('exporter.questionnaire.next')}
                      </Button>
                    ) : (
                      <Button type="submit" variant="outline" className="font-medium">
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
    </div>
  );
};

export default ExporterOnboarding;
