import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

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

const countryOptions = [
  'Argentina',
  'Bolivia',
  'Brazil',
  'Chile',
  'Colombia',
  'Costa Rica',
  'Dominican Republic',
  'Ecuador',
  'El Salvador',
  'Guatemala',
  'Honduras',
  'Mexico',
  'Nicaragua',
  'Panama',
  'Paraguay',
  'Peru',
  'Uruguay',
  'Venezuela',
  'Other'
];

export const CompanyInfoStep = ({ form }: { form: any }) => {
  const [showOtherCountry, setShowOtherCountry] = useState(false);

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
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem className="relative">
            <FormLabel>Country of Operation</FormLabel>
            <Select 
              onValueChange={(value) => {
                field.onChange(value);
                setShowOtherCountry(value === 'Other');
              }} 
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select country" />
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
              <FormLabel>Specify Country</FormLabel>
              <FormControl>
                <Input placeholder="Enter your country" {...field} />
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
            <FormLabel>Industry/Sector</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select industry" />
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
          <FormItem className="relative">
            <FormLabel>Number of Employees</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select employee range" />
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