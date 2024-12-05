import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

const contactMethods = [
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
  { value: 'whatsapp', label: 'WhatsApp' }
];

export const ContactInfoStep = ({ form }: { form: any }) => {
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
            <RequiredLabel>Full Name</RequiredLabel>
            <FormControl>
              <Input placeholder="Enter your full name" {...field} />
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
            <RequiredLabel>Position/Title</RequiredLabel>
            <FormControl>
              <Input placeholder="Enter your position/title" {...field} />
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
            <RequiredLabel>Email Address</RequiredLabel>
            <FormControl>
              <Input type="email" placeholder="Enter your email address" {...field} />
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
            <RequiredLabel>Phone Number</RequiredLabel>
            <FormControl>
              <Input placeholder="Enter your phone number (include country code)" {...field} />
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
            <FormLabel>Preferred Contact Method</FormLabel>
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
            <FormLabel>Additional Notes/Comments (Optional)</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Provide any additional information or questions you have (optional)"
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