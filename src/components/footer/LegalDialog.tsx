import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from '@/contexts/LanguageContext';

export const LegalDialog = () => {
  const { t } = useLanguage();
  
  return (
    <Dialog>
      <DialogTrigger className="text-gray-300 hover:text-white underline cursor-pointer">
        {t('footer.legal')}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{t('footer.legal')}</DialogTitle>
        </DialogHeader>
        <div className="text-left space-y-4 max-h-[70vh] overflow-y-auto">
          <h2 className="text-xl font-semibold">{t('legal.terms.title')}</h2>
          <p className="text-gray-600">{t('legal.terms.description')}</p>

          <div className="space-y-4">
            {['acceptance', 'accuracy', 'liability'].map((section) => (
              <section key={section}>
                <h3 className="text-lg font-semibold">{t(`legal.sections.${section}.title`)}</h3>
                {t(`legal.sections.${section}.items`).split('|').map((item, index) => (
                  <p key={index} className="text-gray-600">{item}</p>
                ))}
              </section>
            ))}

            <section>
              <h3 className="text-lg font-semibold">{t('legal.contact.title')}</h3>
              <p className="text-gray-600">{t('legal.contact.description')}</p>
              <p className="text-sm text-gray-500 mt-4">{t('legal.lastUpdated')}</p>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};