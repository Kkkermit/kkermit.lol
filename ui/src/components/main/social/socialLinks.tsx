import githubLogo from "../../../assets/icons/github.svg";
import discordLogo from "../../../assets/icons/discord.svg";
import spotifyLogo from "../../../assets/icons/spotify.svg";
import SocialLink from "./socialLink";

const SocialLinks: React.FC = () => (
	<div
		className="bg-[rgba(88,85,85,0.4)] backdrop-blur-[0.5px] 
                    rounded-xl p-6 max-w-[600px] mx-auto"
	>
		<a
			href="https://discord.com/users/526853643962679323"
			target="_blank"
			rel="noopener noreferrer"
			className="block mb-6"
		>
			<img
				src="https://lanyard.cnrad.dev/api/526853643962679323?bg=transparent"
				alt="Discord Status"
				className="w-full max-w-[450px] mx-auto min-h-[180px]"
				loading="lazy"
			/>
		</a>
		<nav className="flex justify-center gap-8">
			<SocialLink href="https://github.com/Kkkermit" icon={githubLogo} alt="GitHub" glowColor="#fff" />
			<SocialLink
				href="https://discord.com/users/526853643962679323"
				icon={discordLogo}
				alt="Discord"
				glowColor="#5865f2"
			/>
			<SocialLink
				href="https://open.spotify.com/user/g11412?si=51c602bac6af46bf"
				icon={spotifyLogo}
				alt="Spotify"
				glowColor="#00da5a"
			/>
		</nav>
	</div>
);

export default SocialLinks;
