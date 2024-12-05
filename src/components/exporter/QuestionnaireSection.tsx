import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { CompanyInfoStep } from './CompanyInfoStep';
import { FinancingDetailsStep } from './FinancingDetailsStep';
import { AccessToCreditStep } from './AccessToCreditStep';
import { ContactInfoStep } from './ContactInfoStep';

interface QuestionnaireSectionProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  form: any;
}

export const QuestionnaireSection = ({ currentStep, setCurrentStep, form }: QuestionnaireSectionProps) => {
  const { t } = useLanguage();

  return (
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
              <form onSubmit={form.handleSubmit((values: any) => console.log(values))} className="space-y-8">
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
  );
};