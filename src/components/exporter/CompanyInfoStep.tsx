import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { industryOptions, employeeRanges, countryOptions, currencyOptions } from "./constants/formOptions";
import { useLanguage } from "@/contexts/LanguageContext";

export const CompanyInfoStep = ({ form }: { form: any }) => {
  const [showOtherCountry, setShowOtherCountry] = useState(false);
  const selectedCurrency = form.watch('invoiceCurrency');
  const { t } = useLanguage();

  const RequiredLabel = ({ children }: { children: React.ReactNode }) => (
    <FormLabel>
      {children} <span className="text-red-500">*</span>
    </FormLabel>
  );

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="companyName"
        render={({ field }) => (
          <FormItem>
            <RequiredLabel>{t('form.companyName')}</RequiredLabel>
            <FormControl>
              <Input placeholder={t('form.companyName')} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem className="relative">
            <RequiredLabel>{t('form.country')}</RequiredLabel>
            <Select 
              onValueChange={(value) => {
                field.onChange(value);
                setShowOtherCountry(value === 'Other');
              }} 
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t('form.country')} />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="z-50 bg-white text-gray-900">
                {countryOptions.map((country) => (
                  <SelectItem key={country} value={country} className="hover:bg-gray-100">
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      {showOtherCountry && (
        <FormField
          control={form.control}
          name="otherCountry"
          render={({ field }) => (
            <FormItem>
              <RequiredLabel>{t('form.specifyCountry')}</RequiredLabel>
              <FormControl>
                <Input placeholder={t('form.specifyCountry')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      <FormField
        control={form.control}
        name="industry"
        render={({ field }) => (
          <FormItem className="relative">
            <RequiredLabel>{t('form.industry')}</RequiredLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t('form.industry')} />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="z-50 bg-white text-gray-900">
                {industryOptions.map((industry) => (
                  <SelectItem key={industry} value={industry} className="hover:bg-gray-100">
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
            <RequiredLabel>{t('form.exportProducts')}</RequiredLabel>
            <FormControl>
              <Input placeholder={t('form.exportProducts')} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="invoiceCurrency"
        render={({ field }) => (
          <FormItem className="relative">
            <RequiredLabel>{t('form.invoiceCurrency')}</RequiredLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t('form.invoiceCurrency')} />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="z-50 bg-white text-gray-900">
                {currencyOptions.map((currency) => (
                  <SelectItem key={currency.value} value={currency.value} className="hover:bg-gray-100">
                    {currency.label}
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
        name="monthlyVolumes"
        render={({ field }) => (
          <FormItem>
            <RequiredLabel>{t('form.monthlyVolumes')} {selectedCurrency && `(${currencyOptions.find(c => c.value === selectedCurrency)?.label || ''})`}</RequiredLabel>
            <FormControl>
              <Input 
                type="number" 
                placeholder={t('form.monthlyVolumes')}
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
          <FormItem className="relative">
            <RequiredLabel>{t('form.employees')}</RequiredLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t('form.employees')} />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="z-50 bg-white text-gray-900">
                {employeeRanges.map((range) => (
                  <SelectItem key={range} value={range} className="hover:bg-gray-100">
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
};