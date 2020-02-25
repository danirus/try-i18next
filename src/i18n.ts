import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


export default i18n
  .use(Backend)  // Load translation using xhr.
  .use(LanguageDetector)  // Detect user language.
  .use(initReactI18next)  // Pass the i18n instance to react-i18next.
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false  // React already does escaping
    },
  });
