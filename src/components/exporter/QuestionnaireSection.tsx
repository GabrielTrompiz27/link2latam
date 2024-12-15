import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { CompanyInfoStep } from './CompanyInfoStep';
import { FinancingDetailsStep } from './FinancingDetailsStep';
import { AccessToCreditStep } from './AccessToCreditStep';
import { ContactInfoStep } from './ContactInfoStep';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

interface QuestionnaireSectionProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  form: any;
}

export const QuestionnaireSection = ({ currentStep, setCurrentStep, form }: QuestionnaireSectionProps) => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const formatKeyValueData = (data: Record<string, any>) => {
    if (!data) return '';
    return Object.entries(data)
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ');
  };

  const onSubmit = async (values: any) => {
    try {
      console.log('Form values:', values);
      
      // Format the interest rates and financing periods
      const formattedInterestRates = values.interestRates ? formatKeyValueData(values.interestRates) : '';
      const formattedFinancingPeriods = values.financingPeriods ? formatKeyValueData(values.financingPeriods) : '';

      const emailData = {
        company_name: values.companyName,
        country: values.country,
        other_country: values.otherCountry,
        industry: values.industry,
        export_products: values.exportProducts,
        invoice_currency: values.invoiceCurrency,
        monthly_volumes: values.monthlyVolumes,
        employees: values.employees,
        financing_currency: values.financingCurrency,
        other_financing_currency: values.otherFinancingCurrency,
        financing_types: values.financingTypes?.join(', '),
        interest_rates: formattedInterestRates,
        financing_periods: formattedFinancingPeriods,
        total_financing: values.totalFinancing,
        credit_rating: values.creditRating,
        credit_challenges: values.creditChallenges,
        collateral_types: values.collateralTypes?.join(', '),
        other_collateral: values.otherCollateral,
        credit_enhancement: values.creditEnhancement,
        credit_enhancement_details: values.creditEnhancementDetails,
        full_name: values.fullName,
        position: values.position,
        email: values.email,
        phone_number: values.phoneNumber,
        preferred_contact: values.preferredContact,
        additional_notes: values.additionalNotes
      };

      console.log('Email data:', emailData);

      await emailjs.send(
        'default_service',
        'template_85fm34j',
        emailData,
        'WlivaL7VCZCUVpj0n'
      );

      toast({
        title: t('form.success'),
        description: t('form.successMessage'),
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: t('form.error'),
        description: t('form.errorMessage'),
        variant: "destructive"
      });
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-4">
            {t('exporter.form.title')}
          </h2>
          <p className="text-center text-primary-light mb-8">
            {t('exporter.form.subtitle')}
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
                    {t('form.previous')}
                  </Button>
                  {currentStep < 4 ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                      className="font-medium"
                    >
                      {t('form.next')}
                    </Button>
                  ) : (
                    <Button type="submit" variant="outline" className="font-medium">
                      {t('form.submit')}
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
