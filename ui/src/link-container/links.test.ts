import { DISCORD_ID, links } from "./links";

describe("Links Configuration", () => {
	describe("DISCORD_ID", () => {
		it("should be defined", () => {
			expect(DISCORD_ID).toBeDefined();
		});

		it("should match the expected Discord ID", () => {
			expect(DISCORD_ID).toBe("526853643962679323");
		});
	});

	describe("links", () => {
		it("should have all required social links", () => {
			expect(links).toHaveProperty("github");
			expect(links).toHaveProperty("discord");
			expect(links).toHaveProperty("spotify");
			expect(links).toHaveProperty("lanyardApi");
		});

		it("should have correct GitHub URL", () => {
			expect(links.github).toBe("https://github.com/Kkkermit");
		});

		it("should have correct Discord URL with Discord ID", () => {
			expect(links.discord).toBe(`https://discord.com/users/${DISCORD_ID}`);
		});

		it("should have correct Spotify URL", () => {
			expect(links.spotify).toBe("https://open.spotify.com/user/g11412?si=51c602bac6af46bf");
		});

		it("should have correct Lanyard API URL with Discord ID", () => {
			expect(links.lanyardApi).toBe(`https://lanyard.cnrad.dev/api/${DISCORD_ID}?bg=transparent`);
		});
	});
});
