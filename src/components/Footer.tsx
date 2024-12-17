import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Link2Latam</h3>
            <p className="text-gray-300">
              {t('footer.about')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white">{t('nav.services')}</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">{t('nav.about')}</a></li>
              <li><a href="#expertise" className="text-gray-300 hover:text-white">{t('nav.expertise')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">{t('services.invoiceFactoring.title')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">{t('footer.riskManagement')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">{t('footer.tradeFinance')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span className="text-gray-300">info@link2latam.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-gray-300">(+34) 617816607</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span className="text-gray-300">Madrid, Spain</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};