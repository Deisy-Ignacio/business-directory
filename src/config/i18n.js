import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { EnglishTranslate, SpanishTranslate } from "../translations";

i18n
  .use(LanguageDetector) // Detect system language
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: EnglishTranslate },
      es: { translation: SpanishTranslate },
    },
    // lng: "en",  // If you aren't using LanguageDetector define a initial language
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
