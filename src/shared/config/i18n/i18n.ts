import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",

    // Поскольку ТайпСкрипт ничего не знает о нашей конфигурации Вебпака, для того чтобы ТС не ругался
    // нужно объявить эту константу в глобальном файле деклараций

    // Теперь дебаг будет работать только в девРежиме
    debug: __IS_DEV__ ? true : false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
