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

	it("should load English translations for onLoad", () => {
		expect(i18n.t("onload.message")).toBe("click to enter...");
	});

	it("should load English translations for contentPage", () => {
		expect(i18n.t("contentPage.title")).toBe("Kkermit");
		expect(i18n.t("contentPage.description")).toBe(
			"| JSX | TSX | React | Java | Git | HTML | Redux | CSS | TS | JS | Ruby |",
		);
		expect(i18n.t("contentPage.messageOne")).toBe("Frontend Web Developer");
		expect(i18n.t("contentPage.messageTwo")).toBe("Discord.js Developer");
		expect(i18n.t("contentPage.messageThree")).toBe("Software Engineer @Barclays");
	});
});
