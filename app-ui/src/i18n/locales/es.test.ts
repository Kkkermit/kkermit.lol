import i18n from "../i18n";
import { esTranslations } from "./es";

describe("i18n translations", () => {
	beforeAll(() => {
		i18n.init({
			resources: {
				es: {
					translation: esTranslations,
				},
			},
			lng: "es",
			fallbackLng: "es",
			interpolation: {
				escapeValue: false,
			},
		});
	});

	it("should load Spanish translations", () => {
		expect(i18n.t("onload.message")).toBe("haga clic para ingresar...");
	});
});
