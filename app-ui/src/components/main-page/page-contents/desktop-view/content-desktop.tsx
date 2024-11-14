import React from "react";
import { images } from "../image-grabber";
import { altText } from "../../../../config/alt-text";
import { links } from "../link-container";
import { i18n } from "../../../../i18n";
import "../../../../styles/global.css";

const ContentDesktop: React.FC = () => {
	return (
		<div className="flex justify-center items-center h-screen text-center mt-[-55px] relative">
			<div className="absolute inset-0 z-0">
				<div className="stars absolute w-full h-full"></div>
			</div>
			<img
				src={images.kermitGif}
				alt={altText.kermit}
				className="relative z-10 aspect-square rounded-full h-[300px] w-[302px] border-5 border-white bg-black p-5 cursor-customPointer mr-[365px]"
				style={{ border: "6px solid white", borderRadius: "50%" }}
			/>
			<header className="relative z-20 border-3 border-transparent bg-[rgba(88,85,85,0.4)] backdrop-blur-[0.5px] w-[650px] h-[610px] rounded-[12px] transition-transform ease-in-out duration-300 hover:scale-110">
				<h1 className="text-[50px] font-extrabold text-white transition duration-300 text-shadow-lg mt-8 mb-6">
					{i18n.t("contentPage.title")}
				</h1>
				<p className="text-[18px] font-medium text-white text-shadow-md mt-6">{i18n.t("contentPage.description")}</p>
				<div className="border-0 border-transparent bg-[rgba(88,85,85,0.4)] rounded-[12px] backdrop-blur-[0.5px] p-[15px] w-[550px] mt-[20px] mx-auto">
					<div className="flex flex-col justify-center items-center mt-[10px] text-white font-extrabold text-shadow-sm">
						<a href={links.discordUserLink} target="_blank" rel="noopener noreferrer" className="cursor-customPointer">
							<div className="w-[500px]">
								<img
									className="relative z-30 min-h-[250px] p-[15px] overflow-auto break-words w-[500px] scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400"
									src={links.lanyardApi}
									alt="Discord Info"
								/>
							</div>
						</a>
						<div className="flex justify-center space-x-4 mt-2">
							<a href={links.githubUserLink} target="_blank" rel="noopener noreferrer">
								<img
									id="github-logo"
									src={images.github}
									alt={altText.github}
									className="relative z-30 mb-[5px] p-[5px] cursor-customPointer filter drop-shadow-[0_0_5px_#fff] transition-transform duration-300 ease-in-out hover:scale-110"
								/>
							</a>
							<a href={links.discordUserLink} target="_blank" rel="noopener noreferrer">
								<img
									id="discord-logo"
									src={images.discord}
									alt={altText.discord}
									className="relative z-30 mb-[2px] p-[5px] cursor-customPointer filter drop-shadow-[0_0_5px_#5865f2] transition-transform duration-300 ease-in-out hover:scale-110"
								/>
							</a>
							<a href={links.spotifyUserLink} target="_blank" rel="noopener noreferrer">
								<img
									id="spotify-logo"
									src={images.spotify}
									alt={altText.spotify}
									className="relative z-30 mb-[2px] p-[5px] cursor-customPointer filter drop-shadow-[0_0_5px_#00da5a] transition-transform duration-300 ease-in-out hover:scale-110"
								/>
							</a>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default ContentDesktop;
