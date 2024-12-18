import { Shield, Lightbulb, Target } from 'lucide-react';

export const OurFocus = () => {
  const benefits = [
    {
      icon: Target,
      text: 'Deliver flexible and tailored funding solutions aligned with business objectives.'
    },
    {
      icon: Shield,
      text: 'Ensure reduced risk exposure for investors and companies alike.'
    },
    {
      icon: Lightbulb,
      text: 'Unlock value from existing assets to drive sustainable growth and expansion.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Our Focus</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">
            All our financing solutions are centered around asset-backed lending, ensuring security, transparency, and sustainable outcomes. By leveraging real assets such as accounts receivable, real estate, and equity holdings, we provide businesses with the capital they need while mitigating risk for all stakeholders.
          </p>
          
          <h3 className="text-xl font-semibold mb-6 text-primary">This approach allows us to:</h3>
          
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <benefit.icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};