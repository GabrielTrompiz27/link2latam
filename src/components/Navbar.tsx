import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <nav className="fixed w-full bg-primary z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold text-white">Link2Latam</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white/80 hover:text-white transition-colors">{t('nav.services')}</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">{t('nav.about')}</a>
            <a href="#expertise" className="text-white/80 hover:text-white transition-colors">{t('nav.expertise')}</a>
            <LanguageToggle />
            <button 
              className="btn-primary"
              onClick={() => navigate('/get-started')}
            >
              {t('nav.getStarted')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <a href="#services" className="block py-2 text-white/80 hover:text-white">{t('nav.services')}</a>
            <a href="#about" className="block py-2 text-white/80 hover:text-white">{t('nav.about')}</a>
            <a href="#expertise" className="block py-2 text-white/80 hover:text-white">{t('nav.expertise')}</a>
            <button 
              className="btn-primary w-full mt-4"
              onClick={() => navigate('/get-started')}
            >
              {t('nav.getStarted')}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};