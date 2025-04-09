import React from "react";
import githubLogo from "../../../assets/icons/github.svg";
import discordLogo from "../../../assets/icons/discord.svg";
import spotifyLogo from "../../../assets/icons/spotify.svg";
import SocialLink from "./socialLink";
import CustomDiscordCard from "./lanyard/CustomDiscordCard";
import { links } from "../../../link-container/links";
import { BG_COLOR, COMMON_BG_STYLE } from "../../../utils/colorUtils";

const SocialLinks: React.FC = () => (
	<div
		className="rounded-xl p-6 max-w-[600px] mx-auto mt-12 sm:mt-6"
		style={{
			...COMMON_BG_STYLE,
			backgroundColor: BG_COLOR,
		}}
	>
		<CustomDiscordCard />

		<nav className="flex justify-center gap-8">
			<SocialLink href={links.github} icon={githubLogo} alt="GitHub" glowColor="#fff" />
			<SocialLink href={links.discord} icon={discordLogo} alt="Discord" glowColor="#5865f2" />
			<SocialLink href={links.spotify} icon={spotifyLogo} alt="Spotify" glowColor="#00da5a" />
		</nav>
	</div>
);

export default SocialLinks;
