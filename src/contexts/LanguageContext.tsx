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
    'selection.back': 'Back to Home',

    // Exporter Welcome Section
    'exporter.welcome.title': 'Welcome Exporters!',
    'exporter.welcome.subtitle': 'Discover tailor-made financing solutions to grow your export business with Link2Latam.',
    'exporter.welcome.cta': 'Get Started Now',

    // About Section
    'exporter.about.title': 'Why Choose Link2Latam?',
    'exporter.about.feature1.title': 'Expert Partnership',
    'exporter.about.feature1.description': 'We partner with exporters to simplify access to financing solutions.',
    'exporter.about.feature2.title': 'Flexible Funding',
    'exporter.about.feature2.description': 'Tailored financial solutions with competitive terms.',
    'exporter.about.feature3.title': 'Global Reach',
    'exporter.about.feature3.description': 'Connect with international markets and expand your business.',
    'exporter.about.cta': 'Start Your Application',

    // Investor Section
    'selection.investor.formTitle': 'Investor Registration',
    'selection.investor.comingSoon': 'Investor registration coming soon. Stay tuned!',
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
    'selection.back': 'Volver al Inicio',

    // Exporter Welcome Section
    'exporter.welcome.title': '¡Bienvenidos Exportadores!',
    'exporter.welcome.subtitle': 'Descubre soluciones de financiamiento a medida para hacer crecer tu negocio de exportación con Link2Latam.',
    'exporter.welcome.cta': 'Comienza Ahora',

    // About Section
    'exporter.about.title': '¿Por Qué Elegir Link2Latam?',
    'exporter.about.feature1.title': 'Alianza Experta',
    'exporter.about.feature1.description': 'Nos asociamos con exportadores para simplificar el acceso a soluciones de financiamiento.',
    'exporter.about.feature2.title': 'Financiamiento Flexible',
    'exporter.about.feature2.description': 'Soluciones financieras personalizadas con términos competitivos.',
    'exporter.about.feature3.title': 'Alcance Global',
    'exporter.about.feature3.description': 'Conéctate con mercados internacionales y expande tu negocio.',
    'exporter.about.cta': 'Inicia tu Solicitud',

    // Investor Section
    'selection.investor.formTitle': 'Registro de Inversionista',
    'selection.investor.comingSoon': 'El registro de inversionistas estará disponible próximamente. ¡Mantente atento!',
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
