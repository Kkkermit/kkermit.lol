module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	media: false,
	theme: {
		extend: {
			fontFamily: {
				sans: ["Satoshi", "sans-serif"],
			},
			animation: {
				fall: "fall linear infinite",
				fadeIn: "fadeIn 0.5s ease-in-out forwards",
				fadeInOnLoad: "fadeInAnimation 1s ease forwards",
			},
			keyframes: {
				fall: {
					"0%": { transform: "translateY(-100vh)" },
					"100%": { transform: "translateY(100vh)" },
				},
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				fadeInAnimation: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
			},
			boxShadow: {
				custom: "0 0 5px #f5f5f5",
				"custom-light": "0 0 3px #f5f5f5",
				"custom-dark": "0 0 2px #f5f5f5",
			},
			backdropBlur: {
				custom: "0.5px",
			},
			dropShadow: {
				"custom-white": "0 0 5px #fff",
				"custom-blue": "0 0 5px #5865f2",
				"custom-green": "0 0 5px #00da5a",
			},
			textShadow: {
				sm: "0 1px 2px rgba(0, 0, 0, 0.5)",
				md: "0 2px 4px rgba(0, 0, 0, 0.5)",
				lg: "0 4px 8px rgba(0, 0, 0, 0.5)",
			},
			borderWidth: {
				3: "3px",
			},
			zIndex: {
				10: "10",
				1000: "1000",
			},
			cursor: {
				customNormal: "url(./public/mouse.png), auto",
				customPointer: "url(./public/mouse-pointer.png), auto",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("tailwind-scrollbar"),
		function ({ addUtilities }) {
			const newUtilities = {
				".text-shadow-sm": {
					textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
				},
				".text-shadow-md": {
					textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
				},
				".text-shadow-lg": {
					textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
				},
			};

			addUtilities(newUtilities, ["responsive", "hover"]);
		},
	],
};
