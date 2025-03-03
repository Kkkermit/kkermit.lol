import React from "react";
import { links } from "../../../../link-container/links";

const Lanyard: React.FC = () => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		window.open(links.discord, "_blank");
	};

	return (
		<a href={links.discord} target="_blank" rel="noopener noreferrer" className="block mb-6" onClick={handleClick}>
			<img
				src={links.lanyardApi}
				alt="Discord Status"
				className="w-full max-w-[450px] mx-auto min-h-[180px]"
				loading="lazy"
			/>
		</a>
	);
};

export default Lanyard;
