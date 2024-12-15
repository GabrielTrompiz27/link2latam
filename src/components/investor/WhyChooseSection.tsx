import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const WhyChooseSection = () => {
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
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        contactMethod: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  };
  
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          {t('investor.whyChoose.title')}
        </h2>
        
        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* High Returns */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-accent mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('investor.whyChoose.returns.title')}</h3>
            <p className="text-primary-light">{t('investor.whyChoose.returns.description')}</p>
          </div>

          {/* Short-Term Investment Cycles */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-accent mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('investor.whyChoose.cycles.title')}</h3>
            <p className="text-primary-light">{t('investor.whyChoose.cycles.description')}</p>
          </div>

          {/* Risk Management */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-accent mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('investor.whyChoose.risk.title')}</h3>
            <p className="text-primary-light">{t('investor.whyChoose.risk.description')}</p>
          </div>

          {/* Market Access */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-accent mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('investor.whyChoose.market.title')}</h3>
            <p className="text-primary-light">{t('investor.whyChoose.market.description')}</p>
          </div>
        </div>

        {/* Consultation Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-primary text-center mb-4">
              Let's Discuss Your Investment Goals
            </h2>
            <p className="text-center text-primary-light mb-8">
              Schedule a one-on-one consultation with our investment experts to explore how Link2Latam can help you achieve your investment objectives.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-primary mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="fullName"
                  required
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="contactMethod" className="block text-sm font-medium text-primary mb-1">
                  Preferred Contact Method <span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.contactMethod}
                  onValueChange={(value) => setFormData({...formData, contactMethod: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your preferred contact method" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-md">
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Phone</SelectItem>
                    <SelectItem value="video">Video Call</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">
                  Message (Optional)
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your investment goals and any specific questions you have"
                  className="min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full">
                Request a Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
