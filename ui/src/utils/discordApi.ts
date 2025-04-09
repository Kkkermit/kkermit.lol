import { DiscordUser } from "../interfaces/discord-user-interface";

export const fetchDiscordUser = async (userId: string): Promise<DiscordUser> => {
	try {
		const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
		const data = await response.json();

		if (!data.success) {
			throw new Error("Failed to fetch Discord user data");
		}

		return {
			id: data.data.discord_user.id,
			username: data.data.discord_user.username,
			discriminator: data.data.discord_user.discriminator,
			avatar: data.data.discord_user.avatar,
			status: data.data.discord_status,

			discord_user: data.data.discord_user,
			activities: data.data.activities,
			spotify: data.data.spotify,
			listening_to_spotify: data.data.listening_to_spotify,
			active_on_discord_desktop: data.data.active_on_discord_desktop,
			active_on_discord_mobile: data.data.active_on_discord_mobile,
			active_on_discord_web: data.data.active_on_discord_web,
		};
	} catch (error) {
		console.error("Error fetching Discord user:", error);
		throw error;
	}
};
