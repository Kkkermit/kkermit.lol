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

	it("should load French translations for onLoad", () => {
		expect(i18n.t("onload.message")).toBe("cliquez pour entrer...");
	});

	it("should load French translations for contentPage", () => {
		expect(i18n.t("contentPage.title")).toBe("Kkermit");
		expect(i18n.t("contentPage.description")).toBe(
			"| JSX | TSX | React | Java | Git | HTML | Redux | CSS | TS | JS | Ruby |",
		);
		expect(i18n.t("contentPage.messageOne")).toBe("Développeur Web Frontend");
		expect(i18n.t("contentPage.messageTwo")).toBe("Développeur Discord.js");
		expect(i18n.t("contentPage.messageThree")).toBe("Ingénieur logiciel @Barclays");
	});
});
