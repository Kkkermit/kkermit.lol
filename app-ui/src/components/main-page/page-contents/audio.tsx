import React, { useState, useRef, useEffect } from "react";
import { audio } from "./audio-container";
import { images } from "./image-grabber";
import "../../../styles/global.css";

const AudioPlayer: React.FC = () => {
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [key, setKey] = useState<number>(0);
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [currentSong, setCurrentSong] = useState<string>("");

	useEffect(() => {
		handlePlay();
	}, []);

	const handleClick = () => {
		setIsPlaying(!isPlaying);
		if (!isPlaying) {
			audioRef.current?.play();
			setKey((prevKey) => prevKey + 1);
		} else {
			audioRef.current?.pause();
		}
	};

	const handlePlay = () => {
		setIsPlaying(true);
		setCurrentSong(audio.songName);
		if (audioRef.current) {
			audioRef.current.volume = 0.5;
			audioRef.current.play();
		}
	};

	const handlePause = () => {
		setIsPlaying(false);
		setCurrentSong("");
		audioRef.current?.pause();
	};

	const handleButtonClick = () => {
		handleClick();
		if (isPlaying) {
			handlePause();
		} else {
			handlePlay();
		}
	};

	return (
		<div className="p-5 flex">
			<audio ref={audioRef} src={audio.song} />
			<button
				className="cursor-customPointer p-1.5 h-[51.7px] rounded-[15px] border-3 border-[rgba(116,116,116,0.6)] bg-[rgba(114,114,114,0.5)] backdrop-blur-[15px] z-20"
				onClick={handleButtonClick}
			>
				{isPlaying ? <img src={images.volumeOn} alt="Pause" /> : <img src={images.volumeOff} alt="Play" />}
			</button>
			<div
				className={`p-2.5 ml-5 opacity-0 animate-fadeIn z-10 text-white font-extrabold ${
					isPlaying
						? "border-3 border-[rgba(116,116,116,0.6)] bg-[rgba(114,114,114,0.5)] backdrop-blur-[15px] rounded-[12px]"
						: ""
				}`}
				key={key}
			>
				{currentSong}
			</div>
		</div>
	);
};

export default AudioPlayer;
