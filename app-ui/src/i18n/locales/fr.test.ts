import i18n from "../i18n";
import { frTranslations } from "./fr";

describe("i18n translations", () => {
	beforeAll(() => {
		i18n.init({
			resources: {
				fr: {
					translation: frTranslations,
				},
			},
			lng: "fr",
			fallbackLng: "fr",
			interpolation: {
				escapeValue: false,
			},
		});
	});

	it("should load French translations", () => {
		expect(i18n.t("onload.message")).toBe("cliquez pour entrer...");
	});
});
