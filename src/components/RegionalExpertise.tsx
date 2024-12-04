import { CheckCircle } from 'lucide-react';

const regions = [
  "Mexico",
  "Brazil",
  "Colombia",
  "Chile",
  "Peru",
  "Argentina"
];

export const RegionalExpertise = () => {
  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Regional Expertise Across Latin America</h2>
            <p className="text-primary-light mb-8">
              With deep understanding of local markets and regulations, we provide tailored solutions for businesses across Latin America.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {regions.map((region, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-success" size={20} />
                  <span>{region}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-accent/10 rounded-full absolute inset-0 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="Regional Map"
              className="relative rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};