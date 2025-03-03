import i18n from "./i18n";
import enTranslations from "./locales/en";
import esTranslations from "./locales/es";
import frTranslations from "./locales/fr";

describe("i18n Configuration", () => {
	it("should initialize with English as default language", () => {
		expect(i18n.language).toBe("en");
	});

	it("should have English as fallback language", () => {
		expect(i18n.options.fallbackLng).toEqual(["en"]);
		expect(Array.isArray(i18n.options.fallbackLng) && i18n.options.fallbackLng.includes("en")).toBe(true);
	});

	it("should have escape value set to false", () => {
		expect(i18n.options.interpolation?.escapeValue).toBe(false);
	});

	it("should have all required languages configured", () => {
		const languages = ["en", "es", "fr"];
		languages.forEach((lang) => {
			expect(i18n.hasResourceBundle(lang, "translation")).toBe(true);
		});
	});

	it("should have correct translations for each language", () => {
		expect(i18n.getResourceBundle("en", "translation")).toEqual(enTranslations);
		expect(i18n.getResourceBundle("es", "translation")).toEqual(esTranslations);
		expect(i18n.getResourceBundle("fr", "translation")).toEqual(frTranslations);
	});

	it("should change language correctly", async () => {
		await i18n.changeLanguage("es");
		expect(i18n.language).toBe("es");
		await i18n.changeLanguage("fr");
		expect(i18n.language).toBe("fr");
		await i18n.changeLanguage("en");
	});

	it("should handle missing translations by using fallback language", () => {
		const testKey = "nonexistent.key";
		expect(i18n.t(testKey)).toBe(testKey);
	});
});
