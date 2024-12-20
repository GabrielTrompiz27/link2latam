import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/contexts/LanguageContext";

const ratingOptions = [1, 2, 3, 4, 5];

const collateralTypes = [
  { id: 'accounts-receivable', label: 'Accounts Receivable' },
  { id: 'inventory', label: 'Inventory' },
  { id: 'cash', label: 'Cash' },
  { id: 'other', label: 'Other' }
];

export const AccessToCreditStep = ({ form }: { form: any }) => {
  const { t } = useLanguage();

  const RequiredLabel = ({ children }: { children: React.ReactNode }) => (
    <FormLabel>
      {children} <span className="text-red-500">*</span>
    </FormLabel>
  );

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="creditRating"
        render={({ field }) => (
          <FormItem>
            <RequiredLabel>{t('form.creditRating')}</RequiredLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex space-x-4"
              >
                {ratingOptions.map((rating) => (
                  <FormItem key={rating} className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem value={rating.toString()} />
                    </FormControl>
                    <FormLabel className="font-normal">{rating}</FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="creditChallenges"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t('form.creditChallenges')}</FormLabel>
            <FormControl>
              <Input placeholder={t('form.creditChallenges')} {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="collateralTypes"
        render={() => (
          <FormItem>
            <FormLabel>{t('form.collateralTypes')}</FormLabel>
            <div className="space-y-2">
              {collateralTypes.map((type) => (
                <FormField
                  key={type.id}
                  control={form.control}
                  name="collateralTypes"
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
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {type.label}
                          </FormLabel>
                        </FormItem>
                        {isChecked && type.id === 'other' && (
                          <FormField
                            control={form.control}
                            name="otherCollateral"
                            render={({ field }) => (
                              <FormItem className="ml-7">
                                <FormControl>
                                  <Input
                                    placeholder={t('form.otherCollateral')}
                                    {...field}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        )}
                      </div>
                    );
                  }}
                />
              ))}
            </div>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="creditEnhancement"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t('form.creditEnhancement')}</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="space-y-2"
              >
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <RadioGroupItem value="yes" />
                  </FormControl>
                  <FormLabel className="font-normal">Yes</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <RadioGroupItem value="no" />
                  </FormControl>
                  <FormLabel className="font-normal">No</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="creditEnhancementDetails"
        render={({ field }) => {
          const showDetails = form.watch("creditEnhancement") === "yes";
          if (!showDetails) return null;

          return (
            <FormItem>
              <FormLabel>{t('form.creditEnhancementDetails')}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t('form.creditEnhancementDetails')}
                  {...field}
                />
              </FormControl>
            </FormItem>
          );
        }}
      />
    </div>
  );
};