import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './src/components/locales/en.json';
import fr from './src/components/locales/fr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr }
    },
    lng: 'en',
    fallbackLng: 'en',
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;