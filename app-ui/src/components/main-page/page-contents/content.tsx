import React from "react";
import { images } from "./image-grabber";
import { altText } from "../../../config/alt-text";
import { links } from "./link-container";
import i18n from "../../../i18n/i18n";

const Content: React.FC = () => {
	return (
		<div className="flex justify-center items-center h-screen text-center mt-[-55px]">
			<img
				src={images.kermitGif}
				alt={altText.kermit}
				className="aspect-square rounded-full h-[250px] w-[252px] border-5 border-white bg-black p-5 cursor-pointer mr-[365px]"
			/>
			<header className="border-3 border-transparent bg-[rgba(88,85,85,0.4)] backdrop-blur-[0.5px] w-[600px] h-[570px] rounded-[12px] transition-transform ease-in-out duration-300 hover:scale-110">
				<h1 className="text-[50px] font-extrabold text-white transition duration-300 text-shadow-lg mt-8 mb-6">
					{i18n.t("contentPage.title")}
				</h1>
				<p className="text-[18px] font-medium text-white text-shadow-md mt-6">{i18n.t("contentPage.description")}</p>
				<div className="border-0 border-transparent bg-[rgba(88,85,85,0.4)] rounded-[12px] backdrop-blur-[0.5px] p-[15px] w-[500px] mt-[20px] mx-auto">
					<div className="flex flex-col justify-center items-center mt-[10px] text-white font-extrabold text-shadow-sm">
						<a href={links.discordUserLink} target="_blank" rel="noopener noreferrer">
							<div className="w-[450px]">
								<img
									className="z-[-10] min-h-[250px] p-[15px] overflow-auto break-words w-[450px] scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400"
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
									className="mb-[5px] p-[5px] cursor-pointer filter drop-shadow-[0_0_5px_#fff] transition-transform duration-300 ease-in-out hover:scale-110"
								/>
							</a>
							<a href={links.discordUserLink} target="_blank" rel="noopener noreferrer">
								<img
									id="discord-logo"
									src={images.discord}
									alt={altText.discord}
									className="mb-[2px] p-[5px] cursor-pointer filter drop-shadow-[0_0_5px_#5865f2] transition-transform duration-300 ease-in-out hover:scale-110"
								/>
							</a>
							<a href={links.spotifyUserLink} target="_blank" rel="noopener noreferrer">
								<img
									id="spotify-logo"
									src={images.spotify}
									alt={altText.spotify}
									className="mb-[2px] p-[5px] cursor-pointer filter drop-shadow-[0_0_5px_#00da5a] transition-transform duration-300 ease-in-out hover:scale-110"
								/>
							</a>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Content;
