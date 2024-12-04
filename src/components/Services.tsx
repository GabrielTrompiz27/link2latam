import { Banknote, Shield, Globe, Clock } from 'lucide-react';

const services = [
  {
    icon: Banknote,
    title: "Invoice Factoring",
    description: "Convert your export invoices into immediate working capital with competitive rates."
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Protect your business with comprehensive risk assessment and management solutions."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Access international markets with our extensive network and regional expertise."
  },
  {
    icon: Clock,
    title: "Quick Processing",
    description: "Fast approval and efficient processing to keep your business moving forward."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Our Services</h2>
        <p className="section-subtitle text-center">
          Comprehensive trade finance solutions tailored for Latin American exporters
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <service.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-primary-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};