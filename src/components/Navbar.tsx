import { useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-primary z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-2xl font-bold text-white hover:text-white/90 transition-colors"
          >
            <Building2 size={32} className="text-white" />
            Link2Latam
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition-colors">
              {t('nav.services')}
            </button>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">{t('nav.about')}</a>
            <button onClick={() => scrollToSection('expertise')} className="text-white/80 hover:text-white transition-colors">
              {t('nav.expertise')}
            </button>
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
            <button onClick={() => scrollToSection('services')} className="block py-2 text-white/80 hover:text-white w-full text-left">
              {t('nav.services')}
            </button>
            <a href="#about" className="block py-2 text-white/80 hover:text-white">{t('nav.about')}</a>
            <button onClick={() => scrollToSection('expertise')} className="block py-2 text-white/80 hover:text-white w-full text-left">
              {t('nav.expertise')}
            </button>
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