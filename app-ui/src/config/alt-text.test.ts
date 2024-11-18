import { altText } from "./alt-text";

describe("alt-text", () => {
	it("should render the kermit alt text", () => {
		expect(altText.kermit).toBe("Kermit the Frog");
	});

	it("should render the github alt text", () => {
		expect(altText.github).toBe("GitHub Logo");
	});

	it("should render the discord alt text", () => {
		expect(altText.discord).toBe("Discord Logo");
	});

	it("should render the spotify alt text", () => {
		expect(altText.spotify).toBe("Spotify Logo");
	});
});
