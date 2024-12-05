import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ExporterForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    products: "",
    destinations: "",
    monthlyVolumes: "",
    annualRevenue: "",
    employees: "",
    financingTypes: {
      bankLoans: false,
      tradeCredit: false,
      invoiceFactoring: false,
      exportCredit: false,
      other: false,
    },
    creditAccess: "",
    difficulties: false,
    difficultyChallenges: "",
    useFactoring: false,
    needFinancing: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name: string) => {
    setFormData((prev) => ({
      ...prev,
      financingTypes: {
        ...prev.financingTypes,
        [name]: !prev.financingTypes[name as keyof typeof prev.financingTypes],
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto p-6">
      <Accordion type="single" collapsible className="w-full">
        {/* Section 1: Company Information */}
        <AccordionItem value="section1">
          <AccordionTrigger className="text-lg font-semibold">
            {t("form.section1.title")}
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">{t("form.section1.companyName")}</Label>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">{t("form.section1.industry")}</Label>
              <Input
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="products">{t("form.section1.products")}</Label>
              <Input
                id="products"
                name="products"
                value={formData.products}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="monthlyVolumes">
                {t("form.section1.monthlyVolumes")}
              </Label>
              <Input
                id="monthlyVolumes"
                name="monthlyVolumes"
                type="number"
                value={formData.monthlyVolumes}
                onChange={handleInputChange}
                required
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Section 2: Current Financing Details */}
        <AccordionItem value="section2">
          <AccordionTrigger className="text-lg font-semibold">
            {t("form.section2.title")}
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label>{t("form.section2.financingTypes")}</Label>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(formData.financingTypes).map(([key, value]) => (
                  <div key={key} className="flex items-center space-x-2">
                    <Checkbox
                      id={key}
                      checked={value}
                      onCheckedChange={() => handleCheckboxChange(key)}
                    />
                    <Label htmlFor={key}>{t(`form.section2.${key}`)}</Label>
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Section 3: Access to Credit */}
        <AccordionItem value="section3">
          <AccordionTrigger className="text-lg font-semibold">
            {t("form.section3.title")}
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label>{t("form.section3.creditAccess")}</Label>
              <RadioGroup
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, creditAccess: value }))
                }
                value={formData.creditAccess}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <div key={value} className="flex items-center space-x-2">
                    <RadioGroupItem value={value.toString()} id={`rating-${value}`} />
                    <Label htmlFor={`rating-${value}`}>{value}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Additional sections can be added following the same pattern */}
      </Accordion>

      <div className="flex justify-end pt-6">
        <Button type="submit" className="btn-primary">
          {t("form.submit")}
        </Button>
      </div>
    </form>
  );
};

export default ExporterForm;