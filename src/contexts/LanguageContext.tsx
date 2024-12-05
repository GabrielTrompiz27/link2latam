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

    // Exporter Onboarding
    'exporter.back': 'Back',
    'exporter.welcome.title': 'Welcome to Link2Latam Export Financing',
    'exporter.welcome.subtitle': 'Transform your export business with fast, flexible funding solutions tailored to your needs.',
    'exporter.whyChoose.title': 'Why Choose Link2Latam?',
    'exporter.whyChoose.fast.title': 'Fast Funding',
    'exporter.whyChoose.fast.description': 'Get your export invoices funded in as little as 48 hours with our streamlined process.',
    'exporter.whyChoose.expert.title': 'Expert Support',
    'exporter.whyChoose.expert.description': 'Our team of trade finance experts is here to guide you every step of the way.',
    'exporter.whyChoose.global.title': 'Global Network',
    'exporter.whyChoose.global.description': 'Access our extensive network of international buyers and funding partners.',
    
    // Questionnaire Section
    'exporter.questionnaire.title': "Let's Tailor Your Financing Options",
    'exporter.questionnaire.subtitle': "Please fill out the form below to help us understand your business and financing needs. Based on your responses, we'll provide custom financing solutions.",
    'exporter.questionnaire.previous': "Previous",
    'exporter.questionnaire.next': "Next",
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

    // Exporter Onboarding
    'exporter.back': 'Volver',
    'exporter.welcome.title': 'Bienvenido a Financiamiento de Exportación Link2Latam',
    'exporter.welcome.subtitle': 'Transforma tu negocio de exportación con soluciones de financiamiento rápidas y flexibles adaptadas a tus necesidades.',
    'exporter.whyChoose.title': '¿Por qué elegir Link2Latam?',
    'exporter.whyChoose.fast.title': 'Financiamiento Rápido',
    'exporter.whyChoose.fast.description': 'Obtén financiamiento para tus facturas de exportación en tan solo 48 horas con nuestro proceso simplificado.',
    'exporter.whyChoose.expert.title': 'Soporte Experto',
    'exporter.whyChoose.expert.description': 'Nuestro equipo de expertos en financiamiento comercial está aquí para guiarte en cada paso.',
    'exporter.whyChoose.global.title': 'Red Global',
    'exporter.whyChoose.global.description': 'Accede a nuestra extensa red de compradores internacionales y socios financieros.',
    
    // Questionnaire Section
    'exporter.questionnaire.title': "Adaptemos Sus Opciones de Financiamiento",
    'exporter.questionnaire.subtitle': "Complete el formulario a continuación para ayudarnos a comprender su negocio y necesidades de financiamiento. Basado en sus respuestas, le proporcionaremos soluciones de financiamiento personalizadas.",
    'exporter.questionnaire.previous': "Anterior",
    'exporter.questionnaire.next': "Siguiente",
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
