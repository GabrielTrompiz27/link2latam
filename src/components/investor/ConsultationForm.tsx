import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  fullName: z.string().min(1, { message: ' ' }),
  email: z.string().email({ message: ' ' }),
  phone: z.string().min(1, { message: ' ' }),
  contactMethod: z.string().min(1, { message: ' ' }),
  message: z.string().optional()
});

export const ConsultationForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      contactMethod: '',
      message: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await emailjs.send(
        'default_service',
        'template_uhlfing',
        {
          to_email: 'gabrieltrompiz27@gmail.com',
          from_name: values.fullName,
          from_email: values.email,
          phone: values.phone,
          preferred_contact: values.contactMethod,
          message: values.message
        },
        'WlivaL7VCZCUVpj0n'
      );

      toast({
        title: t('form.success'),
        description: t('form.successMessage'),
      });

      form.reset();
    } catch (error) {
      toast({
        title: t('form.error'),
        description: t('form.errorMessage'),
        variant: "destructive"
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-4">
          {t('investor.consultation.title')}
        </h2>
        <p className="text-center text-primary-light mb-8">
          {t('investor.consultation.subtitle')}
        </p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.fullName')} <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder={t('form.fullName')} {...field} />
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
                  <FormLabel>{t('form.email')} <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input type="email" placeholder={t('form.email')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.phoneNumber')} <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder={t('form.phoneNumber')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.preferredContact')} <span className="text-red-500">*</span></FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={t('form.preferredContactPlaceholder')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="email">{t('form.contactEmail')}</SelectItem>
                      <SelectItem value="phone">{t('form.contactPhone')}</SelectItem>
                      <SelectItem value="video">{t('form.contactVideo')}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.message')}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t('form.messagePlaceholder')}
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              {t('form.submit')}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};