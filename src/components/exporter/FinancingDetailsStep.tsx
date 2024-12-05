import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const financingTypes = [
  { id: 'bank-loans', label: 'Bank Loans' },
  { id: 'trade-credit', label: 'Trade Credit' },
  { id: 'invoice-factoring', label: 'Invoice Factoring' },
  { id: 'export-credit', label: 'Export Credit' },
  { id: 'other', label: 'Other' }
];

export const FinancingDetailsStep = ({ form }: { form: any }) => {
  const RequiredLabel = ({ children }: { children: React.ReactNode }) => (
    <FormLabel>
      {children} <span className="text-red-500">*</span>
    </FormLabel>
  );

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="financingTypes"
        render={() => (
          <FormItem>
            <RequiredLabel>Financing Types Used</RequiredLabel>
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
            <RequiredLabel>Total Financing in Use</RequiredLabel>
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