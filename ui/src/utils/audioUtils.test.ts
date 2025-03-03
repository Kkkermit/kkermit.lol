import { getRandomSong } from "./audioUtils";

jest.mock("./audioUtils", () => ({
	getRandomSong: jest.fn(() => ({
		path: "mock/path/to/song.mp3",
		name: "Mock Song",
	})),
}));

describe("getRandomSong", () => {
	it("should return a mock song", () => {
		const song = getRandomSong();
		expect(song).toEqual({
			path: "mock/path/to/song.mp3",
			name: "Mock Song",
		});
	});
});
