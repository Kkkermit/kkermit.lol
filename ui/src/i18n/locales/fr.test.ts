import frTranslations from "./fr";

describe("French Translations", () => {
	it("should have correct structure", () => {
		expect(frTranslations).toHaveProperty("app");
		expect(frTranslations.app).toHaveProperty("landing");
		expect(frTranslations.app).toHaveProperty("config");
	});

	it("should have correct landing page translations", () => {
		expect(frTranslations.app.landing).toHaveProperty("clickToEnter");
		expect(frTranslations.app.landing.clickToEnter).toBe("Cliquez pour entrer...");
	});

	it("should have correct config translations", () => {
		expect(frTranslations.app.config).toHaveProperty("title");
		expect(frTranslations.app.config).toHaveProperty("description");
		expect(frTranslations.app.config.title).toBe("Kkermit");
		expect(frTranslations.app.config.description).toBe(
			"| React | TailwindCSS | Vite | TypeScript | JavaScript | Java | MongoDB |",
		);
	});

	it("should not have undefined or null values", () => {
		const checkValues = (obj: any) => {
			Object.values(obj).forEach((value) => {
				if (typeof value === "object") {
					checkValues(value);
				} else {
					expect(value).toBeDefined();
					expect(value).not.toBeNull();
					expect(typeof value).toBe("string");
				}
			});
		};
		checkValues(frTranslations);
	});

	it("should be immutable", () => {
		const originalTranslations = JSON.stringify(frTranslations);
		try {
			(frTranslations as any).app.config.title = "Modified";
		} catch (e) {
			// Do nothing
		}
		expect(JSON.stringify(frTranslations)).toBe(originalTranslations);
	});
});
