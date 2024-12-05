import { useLanguage } from '@/contexts/LanguageContext';
import { Toggle } from '@/components/ui/toggle';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Toggle
      pressed={language === 'es'}
      onPressedChange={(pressed) => setLanguage(pressed ? 'es' : 'en')}
      className="px-3 py-2 text-sm font-medium"
      aria-label="Toggle language"
    >
      {language === 'en' ? 'ES' : 'EN'}
    </Toggle>
  );
};