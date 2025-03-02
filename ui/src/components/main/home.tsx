import React, { useState, useRef } from "react";
import kermit from "../../assets/profile-picture/kermit.gif";
import githubLogo from "../../assets/icons/github.svg";
import discordLogo from "../../assets/icons/discord.svg";
import spotifyLogo from "../../assets/icons/spotify.svg";
import Sparkles from "../effects/Sparkles";
import "../../styles/index.css";

interface HeaderConfig {
	title: string;
	description: string;
}

const config: HeaderConfig = {
	title: "Kkkermit",
	description: "Full Stack Developer",
};

const Landing: React.FC = () => {
	const [skewValues, setSkewValues] = useState({ x: 0, y: 0 });
	const [shadowValues, setShadowValues] = useState({ x: 0, y: 0 });
	const articleRef = useRef<HTMLElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
		if (!articleRef.current) return;

		const rect = articleRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const relativeX = x / rect.width;
		const relativeY = y / rect.height;

		const skewX = (0.5 - relativeY) * 15;
		const skewY = (0.5 - relativeX) * 15;

		const shadowX = (relativeX - 0.5) * 30;
		const shadowY = (relativeY - 0.5) * 30;

		setSkewValues({ x: skewX, y: skewY });
		setShadowValues({ x: shadowX, y: shadowY });
	};

	const handleMouseLeave = () => {
		setSkewValues({ x: 0, y: 0 });
		setShadowValues({ x: 0, y: 0 });
	};

	return (
		<main className="min-h-screen flex items-center justify-center">
			<section className="flex flex-col md:flex-row items-center gap-32 px-4 py-8">
				{/* Profile Picture */}
				<figure className="hidden md:block">
					<img
						src={kermit}
						alt="Profile"
						className="h-64 w-64 rounded-full border-4 border-white bg-black p-1.5 
                                 transition-transform duration-300 hover:scale-105
                                 hover:rotate-[360deg] transition-all duration-[1500ms]"
					/>
				</figure>

				{/* Card Container */}
				<article
					ref={articleRef}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					style={{
						transform: `
                            perspective(1000px)
                            scale(1.02)
                            rotateX(${skewValues.x}deg)
                            rotateY(${skewValues.y}deg)
                            skew(${skewValues.y * 0.5}deg, ${skewValues.x * 0.5}deg)
                        `,
						boxShadow: `
                            ${shadowValues.x}px ${shadowValues.y}px 20px rgba(255,255,255,0.1),
                            0 0 30px rgba(255,255,255,0.05)
                        `,
						transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out",
					}}
					className="w-[90vw] max-w-[400px] md:max-w-[700px] 
                              bg-[rgba(88,85,85,0.4)] backdrop-blur-[0.5px] 
                              rounded-xl p-8 cursor-pointer
                              hover:shadow-xl hover:shadow-white/10"
				>
					{/* Header */}
					<header className="text-center mb-8">
						<div className="relative inline-block">
							{" "}
							<h1
								className="text-5xl md:text-6xl font-black text-white 
                                     drop-shadow-[0_0_5px_#f5f5f5] mb-3"
							>
								<Sparkles>{config.title}</Sparkles>
							</h1>
						</div>
						<p
							className="text-xl md:text-2xl font-medium text-white 
                                    drop-shadow-[0_0_3px_#f5f5f5]"
						>
							{config.description}
						</p>
					</header>

					{/* Discord Status & Social Links */}
					<div
						className="bg-[rgba(88,85,85,0.4)] backdrop-blur-[0.5px] 
                                  rounded-xl p-6 max-w-[600px] mx-auto"
					>
						{/* Discord Status */}
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

						{/* Social Links */}
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
				</article>
			</section>
		</main>
	);
};

interface SocialLinkProps {
	href: string;
	icon: string;
	alt: string;
	glowColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, alt, glowColor }) => (
	<a href={href} target="_blank" rel="noopener noreferrer">
		<img
			src={icon}
			alt={alt}
			style={{
				filter: `drop-shadow(0 0 3px ${glowColor})`,
			}}
			className="w-10 h-10 cursor-pointer transition-all duration-300 
                     hover:scale-110 hover:brightness-110"
		/>
	</a>
);

export default Landing;
