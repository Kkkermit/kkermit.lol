import React, { useMemo } from "react";
import { SparklesProps } from "../../interfaces/sparkles-interface";
import "../../styles/sparkles.css";

const Sparkles: React.FC<SparklesProps> = ({ children }) => {
	const sparkles = useMemo(
		() =>
			[...Array(40)].map((_, index) => ({
				delay: `${Math.random() * 4}s`,
				size: `${Math.random() * 6 + 3}px`,
				speed: `${Math.random() * 2 + 2}s`,
				left: `${Math.random() * 100}%`,
				top: `${Math.random() * 100}%`,
				moveX: `${Math.random() * 100 - 50}px`,
				moveY: `${Math.random() * 100 - 50}px`,
				id: `sparkle-${index}`,
			})),
		[],
	);

	return (
		<div className="sparkles-wrapper">
			{sparkles.map((config) => (
				<div
					key={config.id}
					className="sparkle"
					style={
						{
							"--delay": config.delay,
							"--size": config.size,
							"--speed": config.speed,
							"--left": config.left,
							"--top": config.top,
							"--moveX": config.moveX,
							"--moveY": config.moveY,
						} as React.CSSProperties
					}
				/>
			))}
			<div className="sparkles-content">{children}</div>
		</div>
	);
};

export default React.memo(Sparkles);
