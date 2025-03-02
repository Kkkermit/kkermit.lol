import { useDispatch } from "react-redux";
import { togglePlay } from "../../store/audioSlice";

interface WelcomeProps {
	onEnter: () => void;
}

const Welcome = ({ onEnter }: WelcomeProps) => {
	const dispatch = useDispatch();

	const handleEnter = () => {
		dispatch(togglePlay());
		onEnter();
	};

	return (
		<div
			onClick={handleEnter}
			className="fixed inset-0 z-20 flex items-center justify-center bg-black/90 cursor-pointer transition-opacity duration-1000 p-4"
		>
			<div className="text-center max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw]">
				<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white font-bold mb-4 animate-pulse animate-bounce tracking-wider">
					Click to Enter...
				</h1>
			</div>
		</div>
	);
};

export default Welcome;
