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

export const QuestionnaireSection = ({ onSubmit }: { onSubmit: (data: any) => Promise<void> }) => {
  const [step, setStep] = useState(1);
  const { t } = useLanguage();
  
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
      financingCurrency: '',
      otherFinancingCurrency: '',
      financingTypes: [],
      interestRates: {},
      financingPeriods: {},
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

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      await onSubmit(data);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {step === 1 && <CompanyInfoStep form={form} />}
          {step === 2 && <FinancingDetailsStep form={form} />}
          {step === 3 && <AccessToCreditStep form={form} />}
          {step === 4 && <ContactInfoStep form={form} />}
          
          <div className="flex justify-between">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(step - 1)}
              >
                {t('form.previous')}
              </Button>
            )}
            <Button type="submit">
              {step === 4 ? t('form.submit') : t('form.next')}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};