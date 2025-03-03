import enTranslations from "./en";

describe("English Translations", () => {
	it("should have correct structure", () => {
		expect(enTranslations).toHaveProperty("app");
		expect(enTranslations.app).toHaveProperty("landing");
		expect(enTranslations.app).toHaveProperty("config");
	});

	it("should have correct landing page translations", () => {
		expect(enTranslations.app.landing).toHaveProperty("clickToEnter");
		expect(enTranslations.app.landing.clickToEnter).toBe("Click To Enter...");
	});

	it("should have correct config translations", () => {
		expect(enTranslations.app.config).toHaveProperty("title");
		expect(enTranslations.app.config).toHaveProperty("description");
		expect(enTranslations.app.config.title).toBe("Kkermit");
		expect(enTranslations.app.config.description).toBe("Full Stack Developer");
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
		checkValues(enTranslations);
	});

	it("should be immutable", () => {
		const originalTranslations = JSON.stringify(enTranslations);
		try {
			(enTranslations as any).app.config.title = "Modified";
		} catch (e) {
			// Do nothing
		}
		expect(JSON.stringify(enTranslations)).toBe(originalTranslations);
	});
});
