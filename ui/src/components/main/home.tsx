import React, { useState, useRef } from "react";
import ProfilePicture from "./profile/profile";
import Header from "./header/header";
import SocialLinks from "./social/socialLinks";
import "../../styles/index.css";

const Home: React.FC = () => {
	const [skewValues, setSkewValues] = useState({ x: 0, y: 0 });
	const [shadowValues, setShadowValues] = useState({ x: 0, y: 0 });
	const articleRef = useRef<HTMLElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
		if (!articleRef.current) return;

		const rect = articleRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const relativeX = x / rect.width;
		const relativeY = y / rect.height;

		const skewX = (0.5 - relativeY) * 15;
		const skewY = (0.5 - relativeX) * 15;

		const shadowX = (relativeX - 0.5) * 30;
		const shadowY = (relativeY - 0.5) * 30;

		setSkewValues({ x: skewX, y: skewY });
		setShadowValues({ x: shadowX, y: shadowY });
	};

	const handleMouseLeave = () => {
		setSkewValues({ x: 0, y: 0 });
		setShadowValues({ x: 0, y: 0 });
	};

	return (
		<main className="min-h-screen flex items-center justify-center">
			<section className="flex flex-col md:flex-row items-center gap-32 px-4 py-8">
				<ProfilePicture />
				<article
					ref={articleRef}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					style={{
						transform: `perspective(1000px) scale(1.02)
                                  rotateX(${skewValues.x}deg)
                                  rotateY(${skewValues.y}deg)
                                  skew(${skewValues.y * 0.5}deg, ${skewValues.x * 0.5}deg)`,
						boxShadow: `${shadowValues.x}px ${shadowValues.y}px 20px rgba(255,255,255,0.1),
                                   0 0 30px rgba(255,255,255,0.05)`,
						transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out",
					}}
					className="w-[90vw] max-w-[400px] md:max-w-[700px] 
                              bg-[rgba(88,85,85,0.4)] backdrop-blur-[0.5px] 
                              rounded-xl p-8 cursor-pointer
                              hover:shadow-xl hover:shadow-white/10"
				>
					<Header />
					<SocialLinks />
				</article>
			</section>
		</main>
	);
};

export default Home;
