import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { CompanyInfoStep } from './CompanyInfoStep';
import { FinancingDetailsStep } from './FinancingDetailsStep';
import { AccessToCreditStep } from './AccessToCreditStep';
import { ContactInfoStep } from './ContactInfoStep';
import { useLanguage } from '@/contexts/LanguageContext';

const formSchema = z.object({
  companyName: z.string().min(1, { message: ' ' }),
  country: z.string().min(1, { message: ' ' }),
  otherCountry: z.string().optional(),
  industry: z.string().min(1, { message: ' ' }),
  exportProducts: z.string().min(1, { message: ' ' }),
  invoiceCurrency: z.string().min(1, { message: ' ' }),
  monthlyVolumes: z.number().min(1, { message: ' ' }),
  employees: z.string().min(1, { message: ' ' }),
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
  creditRating: z.string().min(1, { message: ' ' }),
  creditChallenges: z.string().optional(),
  collateralTypes: z.array(z.string()).optional(),
  otherCollateral: z.string().optional(),
  creditEnhancement: z.string().optional(),
  creditEnhancementDetails: z.string().optional(),
  fullName: z.string().min(1, { message: ' ' }),
  position: z.string().min(1, { message: ' ' }),
  email: z.string().email({ message: ' ' }),
  phoneNumber: z.string().min(1, { message: ' ' }),
  preferredContact: z.string().optional(),
  additionalNotes: z.string().optional(),
});

interface QuestionnaireSectionProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  form: any;
  onSubmit: (data: any) => Promise<void>;
}

export const QuestionnaireSection = ({ currentStep, setCurrentStep, form, onSubmit }: QuestionnaireSectionProps) => {
  const { t } = useLanguage();

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      await onSubmit(data);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {currentStep === 1 && <CompanyInfoStep form={form} />}
          {currentStep === 2 && <FinancingDetailsStep form={form} />}
          {currentStep === 3 && <AccessToCreditStep form={form} />}
          {currentStep === 4 && <ContactInfoStep form={form} />}
          
          <div className="flex justify-between">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                {t('form.previous')}
              </Button>
            )}
            <Button type="submit">
              {currentStep === 4 ? t('form.submit') : t('form.next')}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
