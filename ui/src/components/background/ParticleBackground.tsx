import React, { useEffect, useRef } from "react";
import "../../styles/index.css";

const ParticleBackground: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const animationFrameRef = useRef<number>();

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const setCanvasSize = () => {
			if (canvas) {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}
		};
		setCanvasSize();

		const stars: { x: number; y: number; size: number; speed: number }[] = [];

		for (let i = 0; i < 200; i++) {
			stars.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				size: Math.random() * 2,
				speed: Math.random() * 0.5,
			});
		}

		const animate = () => {
			ctx.fillStyle = "rgba(0, 0, 0, 1)";
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			stars.forEach((star) => {
				ctx.fillStyle = "white";
				ctx.beginPath();
				ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
				ctx.fill();

				star.y += star.speed;
				if (star.y > canvas.height) {
					star.y = 0;
					star.x = Math.random() * canvas.width;
				}
			});

			animationFrameRef.current = requestAnimationFrame(animate);
		};

		animate();

		window.addEventListener("resize", setCanvasSize);
		return () => {
			window.removeEventListener("resize", setCanvasSize);
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			data-testid="particle-canvas"
			className="fixed top-0 left-0 w-full h-full pointer-events-none"
		/>
	);
};

export default ParticleBackground;
