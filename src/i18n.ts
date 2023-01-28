import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import de from './locales/de/translation.json';
import en from "./locales/en/translation.json";
import pl from "./locales/pl/translation.json";
import fr from "./locales/fr/translation.json";

const resources = {
	de: {
		translation: de,
	},
	en: {
		translation: en,
	},
	fr: {
		translation: fr,
	},
	pl: {
		translation: pl,
	}
};

i18next.use(initReactI18next).init({
	resources,
	lng: "pl",
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
});

export default i18next;
