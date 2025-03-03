import React from "react";
import { SocialLinkProps } from "../../../interfaces/social-link-interface";

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, alt, glowColor }) => (
	<a href={href} target="_blank" rel="noopener noreferrer">
		<img
			src={icon}
			alt={alt}
			style={{ filter: `drop-shadow(0 0 3px ${glowColor})` }}
			className="w-10 h-10 cursor-pointer transition-all duration-300 
                     hover:scale-110 hover:brightness-110"
		/>
	</a>
);

export default SocialLink;
