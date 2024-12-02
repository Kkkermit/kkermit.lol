import { links } from "./link-container";

describe("LinkContainer", () => {
	it("should render the discord link", () => {
		expect(links.discordUserLink).toBe("https://discordapp.com/users/191517443185668096");
	});

	it("should render the github link", () => {
		expect(links.githubUserLink).toBe("https://github.com/Kkkermit");
	});

	it("should render the spotify link", () => {
		expect(links.spotifyUserLink).toBe("https://open.spotify.com/user/g11412?si=51c602bac6af46bf");
	});

	it("should render the lanyard api link", () => {
		expect(links.lanyardApi).toBe("https://lanyard.cnrad.dev/api/526853643962679323?bg=transparent");
	});
});
