import { useEffect, useRef } from "react";
import "../../styles/global.css";

const Background: React.FC = () => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const parent = ref.current;
		if (parent) {
			for (let i = 0; i < 85; i++) {
				const star = document.createElement("div");
				star.className = "star absolute bg-white w-0.5 h-0.5 rounded-full animate-fall";
				star.style.left = `${Math.random() * 100}vw`;
				star.style.animationDuration = `${Math.random() * 5 + 5}s`;
				star.style.animationDelay = `${Math.random() * 3}s`;
				parent.appendChild(star);
			}
		}
	}, []);

	return <div className="stars absolute w-full h-full" ref={ref}></div>;
};

export default Background;
