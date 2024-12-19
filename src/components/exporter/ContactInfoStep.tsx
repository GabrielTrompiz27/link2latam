import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";

const contactMethods = [
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
  { value: 'whatsapp', label: 'WhatsApp' }
];

export const ContactInfoStep = ({ form }: { form: any }) => {
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
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <RequiredLabel>{t('form.fullName')}</RequiredLabel>
            <FormControl>
              <Input placeholder={t('form.fullName')} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="position"
        render={({ field }) => (
          <FormItem>
            <RequiredLabel>{t('form.position')}</RequiredLabel>
            <FormControl>
              <Input placeholder={t('form.position')} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <RequiredLabel>{t('form.email')}</RequiredLabel>
            <FormControl>
              <Input type="email" placeholder={t('form.email')} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="phoneNumber"
        render={({ field }) => (
          <FormItem>
            <RequiredLabel>{t('form.phoneNumber')}</RequiredLabel>
            <FormControl>
              <Input placeholder={t('form.phoneNumber')} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="preferredContact"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>{t('form.preferredContact')}</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                {contactMethods.map((method) => (
                  <FormItem key={method.value} className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={method.value} />
                    </FormControl>
                    <FormLabel className="font-normal">{method.label}</FormLabel>
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
        name="additionalNotes"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Additional Notes</FormLabel>
            <FormControl>
              <Textarea 
                placeholder={t('form.additionalNotes')}
                className="min-h-[100px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};