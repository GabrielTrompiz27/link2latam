import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from '@/contexts/LanguageContext';

export const DataProtectionDialog = () => {
  const { t } = useLanguage();
  
  return (
    <Dialog>
      <DialogTrigger className="text-gray-300 hover:text-white underline cursor-pointer">
        {t('footer.dataProtection')}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{t('footer.dataProtection')}</DialogTitle>
        </DialogHeader>
        <div className="text-left space-y-4 max-h-[70vh] overflow-y-auto">
          <h2 className="text-xl font-semibold">{t('dataProtection.intro.title')}</h2>
          <p className="text-gray-600">{t('dataProtection.intro.description')}</p>

          {['collection', 'purpose', 'rights', 'security', 'retention'].map((section) => (
            <section key={section}>
              <h2 className="text-xl font-semibold">{t(`dataProtection.${section}.title`)}</h2>
              <p className="text-gray-600">{t(`dataProtection.${section}.description`)}</p>
              <ul className="list-disc pl-5 text-gray-600">
                {t(`dataProtection.${section}.items`).split('|').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          ))}

          <section>
            <h2 className="text-xl font-semibold">{t('dataProtection.contact.title')}</h2>
            <p className="text-gray-600">{t('dataProtection.contact.description')}</p>
            <p className="text-sm text-gray-500 mt-4">{t('dataProtection.lastUpdated')}</p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};