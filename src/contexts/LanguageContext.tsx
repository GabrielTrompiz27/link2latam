import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.expertise': 'Expertise',
    'nav.getStarted': 'Get Started',
    
    // Hero
    'hero.title': 'Empowering Latin American Exports Through Innovative Finance',
    'hero.subtitle': 'Fast, flexible, and reliable funding solutions for exporters. Transform your invoices into immediate working capital.',
    'hero.getStarted': 'Get Started',
    'hero.learnMore': 'Learn More',

    // Selection
    'selection.title': 'How would you like to proceed?',
    'selection.investor.title': "I'm an Investor",
    'selection.investor.description': 'Looking to provide funding and expand my investment portfolio in Latin America.',
    'selection.exporter.title': "I'm an Exporter",
    'selection.exporter.description': 'Seeking funding solutions to grow my export business in Latin America.',
    'selection.back': 'Back to Home',
  },
  es: {
    // Navbar
    'nav.services': 'Servicios',
    'nav.about': 'Acerca de',
    'nav.expertise': 'Experiencia',
    'nav.getStarted': 'Comenzar',
    
    // Hero
    'hero.title': 'Potenciando las Exportaciones Latinoamericanas a través de Finanzas Innovadoras',
    'hero.subtitle': 'Soluciones de financiamiento rápidas, flexibles y confiables para exportadores. Transforma tus facturas en capital de trabajo inmediato.',
    'hero.getStarted': 'Comenzar',
    'hero.learnMore': 'Más Información',

    // Selection
    'selection.title': '¿Cómo deseas proceder?',
    'selection.investor.title': 'Soy Inversionista',
    'selection.investor.description': 'Busco proporcionar financiamiento y expandir mi portafolio de inversiones en América Latina.',
    'selection.exporter.title': 'Soy Exportador',
    'selection.exporter.description': 'Busco soluciones de financiamiento para hacer crecer mi negocio de exportación en América Latina.',
    'selection.back': 'Volver al Inicio',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};