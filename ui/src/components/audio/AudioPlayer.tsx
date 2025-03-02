import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { togglePlay, setVolume } from "../../store/audioSlice";
import pauseIcon from "../../assets/pause-unpause-buttons/pause.svg";
import unpauseIcon from "../../assets/pause-unpause-buttons/unpause.svg";
import "../../styles/animations.css";

const AudioPlayer = () => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const dispatch = useDispatch();
	const { isPlaying, volume, currentSong } = useSelector((state: RootState) => state.audio);
	const isLongText = currentSong.name.length > 5;

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = volume;
		}
	}, [volume]);

	useEffect(() => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.play();
			} else {
				audioRef.current.pause();
			}
		}
	}, [isPlaying]);

	const handlePlayPause = async () => {
		try {
			if (isPlaying) {
				if (audioRef.current) {
					audioRef.current.pause();
				}
				dispatch(setVolume(0));
				dispatch(togglePlay());
			} else {
				dispatch(togglePlay());
				dispatch(setVolume(0.5));
				if (audioRef.current) {
					const playPromise = audioRef.current.play();
					if (playPromise) {
						await playPromise;
					}
				}
			}
		} catch (error) {
			dispatch(togglePlay());
			dispatch(setVolume(0));
		}
	};

	return (
		<div className="fixed top-4 left-4 z-50">
			<audio ref={audioRef} src={currentSong.path} loop />
			<div className="group relative">
				<div className="flex flex-col">
					<div className="flex items-center p-1.5 rounded-[15px] border-3 border-[rgba(116,116,116,0.6)] bg-[rgba(114,114,114,0.5)] backdrop-blur-[15px] transition-all duration-300 w-[51.7px] group-hover:w-[200px]">
						<div className="min-w-[32px] h-[32px] flex items-center justify-center">
							<button
								onClick={handlePlayPause}
								className="cursor-pointer flex items-center justify-center w-8 h-8 transition-transform active:scale-110 duration-150"
							>
								<img src={isPlaying ? unpauseIcon : pauseIcon} alt={isPlaying ? "Play" : "Pause"} className="w-8 h-8" />
							</button>
						</div>

						<div className="overflow-hidden transition-all duration-300 w-0 group-hover:w-full group-hover:ml-4">
							<input
								type="range"
								min="0"
								max="1"
								step="0.01"
								value={volume}
								onChange={(e) => dispatch(setVolume(parseFloat(e.target.value)))}
								className="w-24 accent-white"
							/>
						</div>
					</div>

					<div className="absolute top-full left-0 mt-2 w-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
						<div className="bg-[rgba(114,114,114,0.5)] backdrop-blur-[15px] rounded-[15px] border-3 border-[rgba(116,116,116,0.6)] p-2">
							<div className="scroll-container w-[150px] mx-auto">
								{isLongText ? (
									<span className="scroll-text text-white text-sm">{currentSong.name}&nbsp;&nbsp;&nbsp;&nbsp;</span>
								) : (
									<p className="text-white text-sm text-center truncate">{currentSong.name.slice(0, 25)}</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AudioPlayer;
