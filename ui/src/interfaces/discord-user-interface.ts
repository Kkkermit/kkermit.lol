export interface DiscordUser {
	id: string;
	username: string;
	avatar: string;
	discriminator: string;
	status?: string;
	discord_user?: {
		id: string;
		username: string;
		avatar: string;
		discriminator: string;
		display_name: string;
		public_flags: number;
	};
	activities?: Array<{
		id: string;
		name: string;
		type: number;
		state?: string;
		details?: string;
		application_id?: string;
		timestamps?: {
			start?: number;
			end?: number;
		};
		assets?: {
			large_image?: string;
			large_text?: string;
			small_image?: string;
			small_text?: string;
		};
		emoji?: {
			id: string;
			name: string;
			animated: boolean;
		};
		buttons?: string[];
		flags?: number;
		party?: {
			id: string;
		};
		created_at?: number;
		session_id?: string;
		sync_id?: string;
	}>;
	spotify?: {
		album: string;
		album_art_url: string;
		artist: string;
		song: string;
		timestamps: {
			start: number;
			end: number;
		};
		track_id: string;
	};
	listening_to_spotify?: boolean;
	active_on_discord_desktop?: boolean;
	active_on_discord_mobile?: boolean;
	active_on_discord_web?: boolean;
}
