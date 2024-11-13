import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { enTranslations } from "./locales/en";
import { esTranslations } from "./locales/es";
import { frTranslations } from "./locales/fr";

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: enTranslations,
		},
		es: {
			translation: esTranslations,
		},
		fr: {
			translation: frTranslations,
		},
	},
	lng: "en",
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
