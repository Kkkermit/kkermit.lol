import React from "react";
import ContentDesktop from "./page-contents/desktop-view/content-desktop";
import ContentMobile from "./page-contents/mobile-view/content-mobile";
import useWindowSize from "./useWindowSize";
import AudioPlayer from "./page-contents/audio";
import "../../styles/global.css";

const Home: React.FC = () => {
	const { width } = useWindowSize();

	return (
		<div>
			<AudioPlayer />
			{(width ?? 0) >= 768 ? <ContentDesktop /> : <ContentMobile />}
		</div>
	);
};

export default Home;
