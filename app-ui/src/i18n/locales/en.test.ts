import i18n from "../i18n";
import { enTranslations } from "./en";

describe("i18n translations", () => {
	beforeAll(() => {
		i18n.init({
			resources: {
				en: {
					translation: enTranslations,
				},
			},
			lng: "en",
			fallbackLng: "en",
			interpolation: {
				escapeValue: false,
			},
		});
	});

	it("should load English translations", () => {
		expect(i18n.t("onload.message")).toBe("click to enter...");
	});
});
