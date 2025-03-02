module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	media: false,
	theme: {
		extend: {
			width: {
				"400px": "400px",
			},
			borderWidth: {
				3: "3px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
