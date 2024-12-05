import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
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
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="financingTypes"
        render={() => (
          <FormItem>
            <FormLabel>Financing Types Used</FormLabel>
            <div className="space-y-2">
              {financingTypes.map((type) => (
                <FormField
                  key={type.id}
                  control={form.control}
                  name="financingTypes"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={type.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(type.id)}
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
                    )
                  }}
                />
              ))}
            </div>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="totalFinancing"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Total Financing in Use (EUR)</FormLabel>
            <FormControl>
              <Input 
                type="number" 
                placeholder="Enter total financing" 
                {...field}
                onChange={e => field.onChange(Number(e.target.value))}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};