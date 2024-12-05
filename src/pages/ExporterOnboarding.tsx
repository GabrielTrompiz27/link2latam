import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const industryOptions = [
  'Agriculture',
  'Manufacturing',
  'Technology',
  'Consumer Goods',
  'Services',
  'Other'
];

const employeeRanges = [
  '1-10',
  '11-50',
  '51-200',
  '201-500',
  '500+'
];

const financingTypes = [
  { id: 'bank-loans', label: 'Bank Loans' },
  { id: 'trade-credit', label: 'Trade Credit' },
  { id: 'invoice-factoring', label: 'Invoice Factoring' },
  { id: 'export-credit', label: 'Export Credit' },
  { id: 'other', label: 'Other' }
];

const collateralTypes = [
  { id: 'accounts-receivable', label: 'Accounts Receivable' },
  { id: 'inventory', label: 'Inventory' },
  { id: 'cash', label: 'Cash' },
  { id: 'other', label: 'Other' }
];

const ExporterOnboarding = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);

  const formSchema = z.object({
    // Step 1
    companyName: z.string().min(2, 'Company name must be at least 2 characters'),
    industry: z.string().min(1, 'Please select an industry'),
    exportProducts: z.string().min(1, 'Please enter your export products'),
    exportDestinations: z.string().min(1, 'Please enter your export destinations'),
    monthlyVolumes: z.number().min(0, 'Monthly volumes must be positive'),
    annualRevenue: z.number().min(0, 'Annual revenue must be positive'),
    employees: z.string().min(1, 'Please select employee range'),
    
    // Step 2
    financingTypes: z.array(z.string()),
    otherFinancingType: z.string().optional(),
    interestRates: z.string().optional(),
    financingPeriods: z.string().optional(),
    totalFinancing: z.number().min(0, 'Total financing must be positive'),
    
    // Step 3
    creditAccess: z.string(),
    challenges: z.string(),
    collateralTypes: z.array(z.string()),
    otherCollateral: z.string().optional(),
    creditEnhancement: z.string()
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: '',
      industry: '',
      exportProducts: '',
      exportDestinations: '',
      monthlyVolumes: 0,
      annualRevenue: 0,
      employees: '',
      financingTypes: [],
      otherFinancingType: '',
      interestRates: '',
      financingPeriods: '',
      totalFinancing: 0,
      creditAccess: '',
      challenges: '',
      collateralTypes: [],
      otherCollateral: '',
      creditEnhancement: ''
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // Handle form submission
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="companyName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter company name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="industry"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Industry/Sector</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {industryOptions.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="exportProducts"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Primary Export Products</FormLabel>
            <FormControl>
              <Input placeholder="Enter primary export products" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="monthlyVolumes"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Monthly Volumes (EUR)</FormLabel>
            <FormControl>
              <Input 
                type="number" 
                placeholder="Enter monthly volumes" 
                {...field}
                onChange={e => field.onChange(Number(e.target.value))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="employees"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Number of Employees</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select employee range" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {employeeRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="financingTypes"
        render={() => (
          <FormItem>
            <FormLabel>Financing Types Used</FormLabel>
            <div className="space-y-2">
              {financingTypes.map((type) => (
                <FormField
                  key={type.id}
                  control={form.control}
                  name="financingTypes"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={type.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(type.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, type.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== type.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {type.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="totalFinancing"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Total Financing in Use (EUR)</FormLabel>
            <FormControl>
              <Input 
                type="number" 
                placeholder="Enter total financing" 
                {...field}
                onChange={e => field.onChange(Number(e.target.value))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="creditAccess"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Rate Access to Credit (1-5)</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex space-x-4"
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <FormItem key={value} className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem value={value.toString()} />
                    </FormControl>
                    <FormLabel className="font-normal">{value}</FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="challenges"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Challenges Faced in Obtaining Credit</FormLabel>
            <FormControl>
              <Input placeholder="Describe challenges faced" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="collateralTypes"
        render={() => (
          <FormItem>
            <FormLabel>Collateral Requirements</FormLabel>
            <div className="space-y-2">
              {collateralTypes.map((type) => (
                <FormField
                  key={type.id}
                  control={form.control}
                  name="collateralTypes"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={type.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(type.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, type.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== type.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {type.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
              {/* Progress indicator */}
              <div className="mb-8">
                <div className="flex justify-between items-center">
                  {[1, 2, 3].map((step) => (
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
                      {step < 3 && (
                        <div className={`w-24 h-1 mx-2 ${
                          step < currentStep ? 'bg-green-500' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {currentStep === 1 && renderStep1()}
                  {currentStep === 2 && renderStep2()}
                  {currentStep === 3 && renderStep3()}

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
                        Submit
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