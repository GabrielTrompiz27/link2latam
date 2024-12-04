import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
          Empowering Latin American Exports Through Innovative Finance
        </h1>
        <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto animate-fade-in">
          Fast, flexible, and reliable funding solutions for exporters. Transform your invoices into immediate working capital.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button className="btn-primary inline-flex items-center">
            Get Started <ArrowRight className="ml-2" size={20} />
          </button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
};