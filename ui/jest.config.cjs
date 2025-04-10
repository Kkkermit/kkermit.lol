module.exports = {
	testEnvironment: "jest-environment-jsdom",
	setupFilesAfterEnv: ["./scripts/setupTests.ts"],
	moduleNameMapper: {
		"\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/emptyMock.js",
		"\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/emptySvg.js",
		"^.+\\.mp3$": "<rootDir>/__mocks__/emptyAsset.js",
	},
	moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
	moduleDirectories: ["node_modules", "src"],
	transform: {
		"^.+\\.(ts|tsx)$": ["babel-jest", { presets: ["@babel/preset-typescript"] }],
	},
	transformIgnorePatterns: ["/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$"],
	testPathIgnorePatterns: ["/node_modules/", "/dist/"],
	verbose: true,
};
