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
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-2xl font-bold text-white hover:text-white/90 transition-colors"
          >
            <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="70" height="70" fill="none" stroke="#FFFFFF" strokeWidth="6"/>
              <rect x="30" y="30" width="70" height="70" fill="none" stroke="#FFA400" strokeWidth="6"/>
            </svg>
            Link2Latam
          </button>
          
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