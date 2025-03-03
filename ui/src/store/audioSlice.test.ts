import audioReducer, { AudioState, togglePlay, setVolume, setCurrentSong } from "./audioSlice";

jest.mock("../utils/audioUtils.ts", () => ({
	getRandomSong: () => ({
		path: "test/path/song.mp3",
		name: "Test Song",
	}),
}));

describe("Audio Slice", () => {
	let initialState: AudioState;

	beforeEach(() => {
		initialState = {
			isPlaying: false,
			volume: 0.5,
			currentSong: {
				path: "test/path/song.mp3",
				name: "Test Song",
			},
		};
	});

	it("should handle initial state", () => {
		expect(audioReducer(undefined, { type: "unknown" })).toEqual(initialState);
	});

	describe("togglePlay", () => {
		it("should toggle isPlaying state", () => {
			const actual = audioReducer(initialState, togglePlay());
			expect(actual.isPlaying).toEqual(true);

			const toggledAgain = audioReducer(actual, togglePlay());
			expect(toggledAgain.isPlaying).toEqual(false);
		});
	});

	describe("setVolume", () => {
		it("should set volume", () => {
			const newVolume = 0.8;
			const actual = audioReducer(initialState, setVolume(newVolume));
			expect(actual.volume).toEqual(newVolume);
		});

		it("should handle volume limits", () => {
			const maxVolume = audioReducer(initialState, setVolume(1));
			expect(maxVolume.volume).toEqual(1);

			const minVolume = audioReducer(initialState, setVolume(0));
			expect(minVolume.volume).toEqual(0);
		});
	});

	describe("setCurrentSong", () => {
		it("should set current song", () => {
			const newSong = {
				path: "test/path/new-song.mp3",
				name: "New Test Song",
			};
			const actual = audioReducer(initialState, setCurrentSong(newSong));
			expect(actual.currentSong).toEqual(newSong);
		});
	});
});
