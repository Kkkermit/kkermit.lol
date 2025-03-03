import githubLogo from "../../../assets/icons/github.svg";
import discordLogo from "../../../assets/icons/discord.svg";
import spotifyLogo from "../../../assets/icons/spotify.svg";
import SocialLink from "./socialLink";
import Lanyard from "./lanyard/lanyard";
import { links } from "../../../link-container/links";

const SocialLinks: React.FC = () => (
	<div
		className="bg-[rgba(88,85,85,0.4)] backdrop-blur-[0.5px] 
                    rounded-xl p-6 max-w-[600px] mx-auto"
	>
		<Lanyard />

		<nav className="flex justify-center gap-8">
			<SocialLink href={links.github} icon={githubLogo} alt="GitHub" glowColor="#fff" />
			<SocialLink href={links.discord} icon={discordLogo} alt="Discord" glowColor="#5865f2" />
			<SocialLink href={links.spotify} icon={spotifyLogo} alt="Spotify" glowColor="#00da5a" />
		</nav>
	</div>
);

export default SocialLinks;
