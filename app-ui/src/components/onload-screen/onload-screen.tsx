import React, { useState } from "react";
import Home from "../main-page/home";
import AudioPlayer from "../main-page/page-contents/audio";
import { i18n } from "../../i18n";
import { OnloadScreenProps } from "./onload-screen-props";
import "../../styles/global.css";

const OnloadScreen: React.FC<OnloadScreenProps> = ({ onEnterClick }) => {
	const [isVisible, setIsVisible] = useState<boolean>(true);
	const [showHome, setShowHome] = useState<boolean>(false);

	const handleClick = () => {
		setIsVisible(false);
		setTimeout(() => setShowHome(true), 0);
		if (onEnterClick) {
			onEnterClick();
		}
	};

	if (showHome) {
		return <Home />;
	}

	if (!isVisible) {
		return (
			<>
				<div className="fadeInOnLoad"></div>
				<AudioPlayer />
			</>
		);
	}

	return (
		<>
			<div
				data-testid="welcome-screen"
				onClick={handleClick}
				className="cursor-pointer fixed top-0 left-0 w-full h-full bg-black text-white flex justify-center items-center z-[1000] p-1.5"
			>
				<h1 className="text-4xl font-extrabold animate-pulse">{i18n.t("onload.message")}</h1>
			</div>
		</>
	);
};

export default OnloadScreen;
