import esTranslations from "./es";

describe("Spanish Translations", () => {
	it("should have correct structure", () => {
		expect(esTranslations).toHaveProperty("app");
		expect(esTranslations.app).toHaveProperty("landing");
		expect(esTranslations.app).toHaveProperty("config");
	});

	it("should have correct landing page translations", () => {
		expect(esTranslations.app.landing).toHaveProperty("clickToEnter");
		expect(esTranslations.app.landing.clickToEnter).toBe("Haga clic para entrar...");
	});

	it("should have correct config translations", () => {
		expect(esTranslations.app.config).toHaveProperty("title");
		expect(esTranslations.app.config).toHaveProperty("description");
		expect(esTranslations.app.config.title).toBe("Kkermit");
		expect(esTranslations.app.config.description).toBe("Desarrollador Full Stack");
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
		checkValues(esTranslations);
	});

	it("should be immutable", () => {
		const originalTranslations = JSON.stringify(esTranslations);
		try {
			(esTranslations as any).app.config.title = "Modified";
		} catch (e) {
			// Do nothing
		}
		expect(JSON.stringify(esTranslations)).toBe(originalTranslations);
	});
});
