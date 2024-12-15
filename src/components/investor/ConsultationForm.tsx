import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const ConsultationForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    contactMethod: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'default_service',
        'template_uhlfing',
        {
          to_email: 'gabrieltrompiz27@gmail.com',
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          preferred_contact: formData.contactMethod,
          message: formData.message
        },
        'WlivaL7VCZCUVpj0n'
      );

      toast({
        title: t('form.success'),
        description: t('form.successMessage'),
      });

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        contactMethod: '',
        message: ''
      });
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
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-primary mb-1">
              {t('form.fullName')} <span className="text-red-500">*</span>
            </label>
            <Input
              id="fullName"
              required
              placeholder={t('form.fullNamePlaceholder')}
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
              {t('form.email')} <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              type="email"
              required
              placeholder={t('form.emailPlaceholder')}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1">
              {t('form.phoneNumber')} <span className="text-red-500">*</span>
            </label>
            <Input
              id="phone"
              type="tel"
              required
              placeholder={t('form.phonePlaceholder')}
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div>
            <label htmlFor="contactMethod" className="block text-sm font-medium text-primary mb-1">
              {t('form.preferredContact')} <span className="text-red-500">*</span>
            </label>
            <Select
              value={formData.contactMethod}
              onValueChange={(value) => setFormData({...formData, contactMethod: value})}
            >
              <SelectTrigger>
                <SelectValue placeholder={t('form.preferredContactPlaceholder')} />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-md">
                <SelectItem value="email">{t('form.contactEmail')}</SelectItem>
                <SelectItem value="phone">{t('form.contactPhone')}</SelectItem>
                <SelectItem value="video">{t('form.contactVideo')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">
              {t('form.message')}
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder={t('form.messagePlaceholder')}
              className="min-h-[100px]"
            />
          </div>

          <Button type="submit" className="w-full">
            {t('form.submit')}
          </Button>
        </form>
      </div>
    </div>
  );
};