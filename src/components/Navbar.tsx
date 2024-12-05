import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold text-primary">Link2Latam</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-primary hover:text-accent transition-colors">Services</a>
            <a href="#about" className="text-primary hover:text-accent transition-colors">About</a>
            <a href="#expertise" className="text-primary hover:text-accent transition-colors">Expertise</a>
            <button className="btn-primary">Get Started</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <a href="#services" className="block py-2 text-primary hover:text-accent">Services</a>
            <a href="#about" className="block py-2 text-primary hover:text-accent">About</a>
            <a href="#expertise" className="block py-2 text-primary hover:text-accent">Expertise</a>
            <button className="btn-primary w-full mt-4">Get Started</button>
          </div>
        )}
      </div>
    </nav>
  );
};