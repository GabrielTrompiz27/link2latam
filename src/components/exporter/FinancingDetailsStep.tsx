import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { financingTypes, currencyOptions } from "./constants/formOptions";

export const FinancingDetailsStep = ({ form }: { form: any }) => {
  const [showOtherCurrency, setShowOtherCurrency] = useState(false);
  const selectedCurrency = form.watch('financingCurrency');

  const RequiredLabel = ({ children }: { children: React.ReactNode }) => (
    <FormLabel>
      {children} <span className="text-red-500">*</span>
    </FormLabel>
  );

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="financingCurrency"
        render={({ field }) => (
          <FormItem className="relative">
            <RequiredLabel>Currency</RequiredLabel>
            <Select 
              onValueChange={(value) => {
                field.onChange(value);
                setShowOtherCurrency(value === 'OTHER');
              }} 
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select currency" />
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

      {showOtherCurrency && (
        <FormField
          control={form.control}
          name="otherFinancingCurrency"
          render={({ field }) => (
            <FormItem>
              <RequiredLabel>Specify Currency</RequiredLabel>
              <FormControl>
                <Input placeholder="Enter currency" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      <FormField
        control={form.control}
        name="financingTypes"
        render={() => (
          <FormItem>
            <RequiredLabel>Current Financing Methods</RequiredLabel>
            <div className="space-y-2">
              {financingTypes.map((type) => (
                <FormField
                  key={type.id}
                  control={form.control}
                  name="financingTypes"
                  render={({ field }) => {
                    const isChecked = field.value?.includes(type.id);
                    return (
                      <div key={type.id} className="space-y-2">
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={isChecked}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, type.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value: string) => value !== type.id
                                      )
                                    )
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {type.label}
                          </FormLabel>
                        </FormItem>
                        
                        {isChecked && (
                          <div className="ml-7 space-y-2">
                            <FormField
                              control={form.control}
                              name={`interestRates.${type.id}`}
                              render={({ field }) => (
                                <FormItem>
                                  <RequiredLabel>Interest Rate (%)</RequiredLabel>
                                  <FormControl>
                                    <Input 
                                      type="number" 
                                      step="0.01"
                                      placeholder="Enter interest rate" 
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
                              name={`financingPeriods.${type.id}`}
                              render={({ field }) => (
                                <FormItem>
                                  <RequiredLabel>Financing Period (days)</RequiredLabel>
                                  <FormControl>
                                    <Input 
                                      type="number" 
                                      placeholder="e.g., 30, 60 days" 
                                      {...field}
                                      onChange={e => field.onChange(Number(e.target.value))}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        )}
                      </div>
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
            <RequiredLabel>Total Active Financing {selectedCurrency && `(${currencyOptions.find(c => c.value === selectedCurrency)?.label || selectedCurrency})`}</RequiredLabel>
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
};