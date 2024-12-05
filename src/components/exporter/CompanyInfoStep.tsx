import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

export const CompanyInfoStep = ({ form }: { form: any }) => {
  return (
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
          </FormItem>
        )}
      />
    </div>
  );
};