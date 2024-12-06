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
    'exporter.welcome.title': 'Welcome to Link2Latam',
    'exporter.welcome.subtitle': 'Transform your export business with fast, flexible funding solutions tailored to your needs.',
    'exporter.whyChoose.title': 'Why Choose Link2Latam?',
    'exporter.whyChoose.fast.title': 'Fast Funding',
    'exporter.whyChoose.fast.description': 'Get your export invoices funded quickly through our streamlined process.',
    'exporter.whyChoose.expert.title': 'Expert Support',
    'exporter.whyChoose.expert.description': 'Our team of trade finance experts is here to guide you every step of the way.',
    'exporter.whyChoose.global.title': 'Global Network',
    'exporter.whyChoose.global.description': 'Access our extensive network of international buyers and funding partners.',
    
    // Questionnaire Section
    'exporter.questionnaire.title': "Let's Tailor Your Financing Options",
    'exporter.questionnaire.subtitle': "Please fill out the form below to help us understand your business and financing needs. Based on your responses, we'll provide custom financing solutions.",
    'exporter.questionnaire.previous': "Previous",
    'exporter.questionnaire.next': "Next",
    'exporter.questionnaire.submit': "Submit",

    // Form Fields
    'form.companyName': 'Company Name',
    'form.country': 'Country of Operation',
    'form.specifyCountry': 'Specify Country',
    'form.industry': 'Industry/Sector',
    'form.exportProducts': 'Primary Export Products',
    'form.invoiceCurrency': 'Invoice Currency',
    'form.monthlyVolumes': 'Monthly Volumes',
    'form.employees': 'Number of Employees',
    'form.financingCurrency': 'Currency',
    'form.specifyFinancingCurrency': 'Specify Currency',
    'form.financingTypes': 'Current Financing Methods',
    'form.interestRate': 'Interest Rate (%)',
    'form.financingPeriod': 'Financing Period (days)',
    'form.totalFinancing': 'Total Active Financing',
    'form.creditRating': 'Rate Access to Credit (1-5)',
    'form.creditChallenges': 'Challenges Faced in Obtaining Credit',
    'form.collateralTypes': 'Collateral Requirements',
    'form.otherCollateral': 'Specify other collateral',
    'form.creditEnhancement': 'Use of Credit Enhancement Tools',
    'form.creditEnhancementDetails': 'Credit Enhancement Details',
    'form.fullName': 'Full Name',
    'form.position': 'Position/Title',
    'form.email': 'Email Address',
    'form.phoneNumber': 'Phone Number',
    'form.preferredContact': 'Preferred Contact Method',
    'form.additionalNotes': 'Additional Notes/Comments (Optional)',

    // Investor Onboarding
    'investor.back': 'Back',
    'investor.welcome.title': 'Welcome to Link2Latam Investment Platform',
    'investor.welcome.subtitle': 'Access exclusive investment opportunities in Latin American export financing with competitive returns.',
    'investor.whyChoose.title': 'Why Invest with Link2Latam?',
    'investor.whyChoose.returns.title': 'Competitive Returns',
    'investor.whyChoose.returns.description': 'Earn attractive returns through carefully vetted export financing opportunities.',
    'investor.whyChoose.risk.title': 'Risk Management',
    'investor.whyChoose.risk.description': 'Benefit from our robust due diligence process and diversified investment options.',
    'investor.whyChoose.market.title': 'Market Access',
    'investor.whyChoose.market.description': 'Gain direct access to Latin American export markets and growth opportunities.',

    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive trade finance solutions tailored for Latin American exporters',
    'services.invoiceFactoring.title': 'Invoice Factoring',
    'services.invoiceFactoring.description': 'Convert your export invoices into immediate working capital with competitive rates.',
    'services.riskMitigation.title': 'Risk Mitigation',
    'services.riskMitigation.description': 'Protect your business with comprehensive risk assessment and management solutions.',
    'services.globalReach.title': 'Global Reach',
    'services.globalReach.description': 'Access international markets with our extensive network and regional expertise.',
    'services.quickProcessing.title': 'Quick Processing',
    'services.quickProcessing.description': 'Fast approval and efficient processing to keep your business moving forward.',
    
    // Regional Expertise Section
    'expertise.title': 'Regional Expertise Across Latin America',
    'expertise.subtitle': 'With deep understanding of local markets and regulations, we provide tailored solutions for businesses across Latin America.',
    'expertise.mapAlt': 'Regional Map',
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
    'exporter.welcome.title': 'Bienvenido a Link2Latam',
    'exporter.welcome.subtitle': 'Transforma tu negocio de exportación con soluciones de financiamiento rápidas y flexibles adaptadas a tus necesidades.',
    'exporter.whyChoose.title': '¿Por qué elegir Link2Latam?',
    'exporter.whyChoose.fast.title': 'Financiamiento Rápido',
    'exporter.whyChoose.fast.description': 'Obtén financiamiento para tus facturas de exportación rápidamente a través de nuestro proceso simplificado.',
    'exporter.whyChoose.expert.title': 'Soporte Experto',
    'exporter.whyChoose.expert.description': 'Nuestro equipo de expertos en financiamiento comercial está aquí para guiarte en cada paso.',
    'exporter.whyChoose.global.title': 'Red Global',
    'exporter.whyChoose.global.description': 'Accede a nuestra extensa red de compradores internacionales y socios financieros.',
    
    // Questionnaire Section
    'exporter.questionnaire.title': "Adaptemos Sus Opciones de Financiamiento",
    'exporter.questionnaire.subtitle': "Complete el formulario a continuación para ayudarnos a comprender su negocio y necesidades de financiamiento. Basado en sus respuestas, le proporcionaremos soluciones de financiamiento personalizadas.",
    'exporter.questionnaire.previous': "Anterior",
    'exporter.questionnaire.next': "Siguiente",
    'exporter.questionnaire.submit': "Enviar",

    // Form Fields
    'form.companyName': 'Nombre de la Empresa',
    'form.country': 'País de Operación',
    'form.specifyCountry': 'Especificar País',
    'form.industry': 'Industria/Sector',
    'form.exportProducts': 'Productos Principales de Exportación',
    'form.invoiceCurrency': 'Moneda de Facturación',
    'form.monthlyVolumes': 'Volúmenes Mensuales',
    'form.employees': 'Número de Empleados',
    'form.financingCurrency': 'Moneda',
    'form.specifyFinancingCurrency': 'Especificar Moneda',
    'form.financingTypes': 'Métodos de Financiamiento Actuales',
    'form.interestRate': 'Tasa de Interés (%)',
    'form.financingPeriod': 'Período de Financiamiento (días)',
    'form.totalFinancing': 'Financiamiento Activo Total',
    'form.creditRating': 'Califica el Acceso al Crédito (1-5)',
    'form.creditChallenges': 'Desafíos Enfrentados para Obtener Crédito',
    'form.collateralTypes': 'Requisitos de Garantía',
    'form.otherCollateral': 'Especificar otra garantía',
    'form.creditEnhancement': 'Uso de Herramientas de Mejora Crediticia',
    'form.creditEnhancementDetails': 'Detalles de Mejora Crediticia',
    'form.fullName': 'Nombre Completo',
    'form.position': 'Cargo/Título',
    'form.email': 'Correo Electrónico',
    'form.phoneNumber': 'Número de Teléfono',
    'form.preferredContact': 'Método de Contacto Preferido',
    'form.additionalNotes': 'Notas Adicionales/Comentarios (Opcional)',

    // Investor Onboarding
    'investor.back': 'Volver',
    'investor.welcome.title': 'Bienvenido a la Plataforma de Inversión Link2Latam',
    'investor.welcome.subtitle': 'Acceda a oportunidades exclusivas de inversión en financiamiento de exportaciones latinoamericanas con retornos competitivos.',
    'investor.whyChoose.title': '¿Por qué invertir con Link2Latam?',
    'investor.whyChoose.returns.title': 'Retornos Competitivos',
    'investor.whyChoose.returns.description': 'Obtenga retornos atractivos a través de oportunidades de financiamiento de exportación cuidadosamente evaluadas.',
    'investor.whyChoose.risk.title': 'Gestión de Riesgos',
    'investor.whyChoose.risk.description': 'Benefíciese de nuestro sólido proceso de debida diligencia y opciones de inversión diversificadas.',
    'investor.whyChoose.market.title': 'Acceso al Mercado',
    'investor.whyChoose.market.description': 'Obtenga acceso directo a los mercados de exportación latinoamericanos y oportunidades de crecimiento.',

    // Services Section
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones integrales de financiamiento comercial diseñadas para exportadores latinoamericanos',
    'services.invoiceFactoring.title': 'Factoraje de Facturas',
    'services.invoiceFactoring.description': 'Convierte tus facturas de exportación en capital de trabajo inmediato con tasas competitivas.',
    'services.riskMitigation.title': 'Mitigación de Riesgos',
    'services.riskMitigation.description': 'Protege tu negocio con soluciones integrales de evaluación y gestión de riesgos.',
    'services.globalReach.title': 'Alcance Global',
    'services.globalReach.description': 'Accede a mercados internacionales con nuestra extensa red y experiencia regional.',
    'services.quickProcessing.title': 'Procesamiento Rápido',
    'services.quickProcessing.description': 'Aprobación rápida y procesamiento eficiente para mantener tu negocio en movimiento.',
    
    // Regional Expertise Section
    'expertise.title': 'Experiencia Regional en América Latina',
    'expertise.subtitle': 'Con un profundo entendimiento de los mercados locales y regulaciones, proporcionamos soluciones personalizadas para negocios en América Latina.',
    'expertise.mapAlt': 'Mapa Regional',
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

