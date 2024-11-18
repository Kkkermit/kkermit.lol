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

	it("should load Spanish translations for onLoad", () => {
		expect(i18n.t("onload.message")).toBe("haga clic para ingresar...");
	});

	it("should load Spanish translations for contentPage", () => {
		expect(i18n.t("contentPage.title")).toBe("Kkermit");
		expect(i18n.t("contentPage.description")).toBe(
			"| JSX | TSX | React | Java | Git | HTML | Redux | CSS | TS | JS | Ruby |",
		);
		expect(i18n.t("contentPage.messageOne")).toBe("Desarrollador web frontend");
		expect(i18n.t("contentPage.messageTwo")).toBe("Desarrollador Discord.js");
		expect(i18n.t("contentPage.messageThree")).toBe("Ingeniero de software @Barclays");
	});
});
