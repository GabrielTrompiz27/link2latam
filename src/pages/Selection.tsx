import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Selection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center text-primary hover:text-accent mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </button>
        
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          How would you like to proceed?
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">I'm an Investor</h2>
            <p className="text-gray-600 mb-6">
              Expand my investment portfolio
            </p>
            <button className="btn-primary w-full">
              Continue as Investor
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">I'm an Exporter</h2>
            <p className="text-gray-600 mb-6">
              To grow my export business
            </p>
            <button className="btn-primary w-full">
              Continue as Exporter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;