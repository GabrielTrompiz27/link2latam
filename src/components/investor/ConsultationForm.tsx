import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import { toast } from 'sonner';

interface ConsultationFormProps {
  onSubmit: (formData: any) => Promise<void>;
}

export const ConsultationForm = ({ onSubmit }: ConsultationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    contactMethod: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      emailjs.init("WlivaL7VCZCUVpj0n");

      const emailParams = {
        to_email: 'gabrieltrompiz27@gmail.com',
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        contact_method: formData.contactMethod,
        message: formData.message,
        subject: 'New Investor Consultation Request',
      };

      await emailjs.send(
        'default_service', // This will be your default service
        'template_uhlfing',
        emailParams
      );

      toast.success("Your consultation request has been submitted successfully. We'll be in touch soon.");
      
      // Clear form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        contactMethod: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("There was a problem submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Request a Consultation'}
      </Button>
    </form>
  );
};