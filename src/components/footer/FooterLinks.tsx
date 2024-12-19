import { CookiesDialog } from './CookiesDialog';
import { LegalDialog } from './LegalDialog';
import { DataProtectionDialog } from './DataProtectionDialog';
import { useLanguage } from '@/contexts/LanguageContext';

export const FooterLinks = () => {
  const { t } = useLanguage();
  
  return (
    <p className="flex items-center justify-center gap-4 flex-wrap">
      <span>{t('footer.copyright')}</span>
      <CookiesDialog />
      <LegalDialog />
      <DataProtectionDialog />
    </p>
  );
};