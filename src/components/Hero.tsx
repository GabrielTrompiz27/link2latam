import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-20 px-4 bg-neutral-light">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-black text-primary mb-6 animate-fade-in">
          Empowering Latin American Exports Through Innovative Finance
        </h1>
        <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto animate-fade-in font-light">
          Fast, flexible, and reliable funding solutions for exporters. Transform your invoices into immediate working capital.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button 
            className="btn-primary inline-flex items-center"
            onClick={() => navigate('/get-started')}
          >
            Get Started <ArrowRight className="ml-2" size={20} />
          </button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
};