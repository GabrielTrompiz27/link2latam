import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from '@/contexts/LanguageContext';

export const CookiesDialog = () => {
  const { t } = useLanguage();
  
  return (
    <Dialog>
      <DialogTrigger className="text-gray-300 hover:text-white underline cursor-pointer">
        {t('footer.cookies')}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{t('footer.cookies')}</DialogTitle>
        </DialogHeader>
        <div className="text-left space-y-4 max-h-[70vh] overflow-y-auto">
          <h2 className="text-xl font-semibold">{t('cookies.whatAre.title')}</h2>
          <p className="text-gray-600">{t('cookies.whatAre.description')}</p>

          <h2 className="text-xl font-semibold">{t('cookies.types.title')}</h2>
          
          <div>
            <h3 className="text-lg font-medium">{t('cookies.types.essential.title')}</h3>
            <ul className="list-disc pl-5 text-gray-600">
              {t('cookies.types.essential.items').split('|').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">{t('cookies.browsers.title')}</h3>
            <ul className="list-disc pl-5 text-gray-600">
              {t('cookies.browsers.items').split('|').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <h2 className="text-xl font-semibold">{t('cookies.thirdParty.title')}</h2>
          <p className="text-gray-600">{t('cookies.thirdParty.description')}</p>
          <ul className="list-disc pl-5 text-gray-600">
            {t('cookies.thirdParty.items').split('|').map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold">{t('cookies.updates.title')}</h2>
          <p className="text-gray-600">{t('cookies.updates.description')}</p>

          <h2 className="text-xl font-semibold">{t('cookies.contact.title')}</h2>
          <p className="text-gray-600">{t('cookies.contact.description')}</p>

          <p className="text-sm text-gray-500 mt-4">{t('cookies.lastUpdated')}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};