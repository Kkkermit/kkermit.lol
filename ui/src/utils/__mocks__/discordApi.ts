// Mock data for Discord API responses
export const mockDiscordUser = {
	id: "526853643962679323",
	username: "TestUser",
	avatar: "abcdef123456",
	discord_user: {
		display_name: "Test Display Name",
	},
	status: "online",
	activities: [
		{
			id: "custom",
			name: "Custom Status",
			type: 4,
			state: "https://buymeacoffee.com/kkermit",
			emoji: { id: "862034033034526720", name: "SCrainbowwave8", animated: true },
			created_at: 1741112062267,
		},
		{
			id: "game1",
			name: "Test Game",
			type: 0,
			details: "Testing a game",
			state: "In lobby",
			application_id: "123456789",
			timestamps: {
				start: Date.now() - 3600000,
				end: Date.now() + 3600000,
			},
			assets: {
				large_image: "game_image",
				large_text: "Game Image",
				small_image: "status_icon",
				small_text: "Status Icon",
			},
			buttons: ["Join", "Spectate"],
		},
	],
	spotify: {
		song: "Test Song",
		artist: "Test Artist",
		album: "Test Album",
		album_art_url: "https://example.com/album.jpg",
		timestamps: {
			start: Date.now() - 60000,
			end: Date.now() + 180000,
		},
	},
};

export const fetchDiscordUser = jest.fn().mockImplementation(async () => {
	return mockDiscordUser;
});
