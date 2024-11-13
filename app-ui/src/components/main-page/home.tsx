import React from "react";
import ContentDesktop from "./page-contents/desktop-view/content-desktop";
import ContentMobile from "./page-contents/mobile-view/content-mobile";
import useWindowSize from "./useWindowSize";

const Home: React.FC = () => {
	const { width } = useWindowSize();

	return <div>{(width ?? 0) >= 768 ? <ContentDesktop /> : <ContentMobile />}</div>;
};

export default Home;
