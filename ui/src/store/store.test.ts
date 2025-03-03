import { store } from "./store";
import { togglePlay, setVolume, setCurrentSong } from "./audioSlice";

jest.mock("../utils/audioUtils.ts", () => ({
	getRandomSong: () => ({
		path: "test/path/song.mp3",
		name: "Test Song",
	}),
}));

describe("Redux Store", () => {
	it("should have the correct initial state", () => {
		const state = store.getState();

		expect(state).toHaveProperty("audio");
		expect(state.audio).toEqual({
			isPlaying: false,
			volume: 0.5,
			currentSong: expect.objectContaining({
				path: expect.any(String),
				name: expect.any(String),
			}),
		});
	});

	it("should handle audio state updates", () => {
		store.dispatch(togglePlay());
		expect(store.getState().audio.isPlaying).toBe(true);

		store.dispatch(setVolume(0.8));
		expect(store.getState().audio.volume).toBe(0.8);

		const newSong = {
			path: "test/path/song.mp3",
			name: "Test Song",
		};
		store.dispatch(setCurrentSong(newSong));
		expect(store.getState().audio.currentSong).toEqual(newSong);
	});

	it("should have correct types for state and dispatch", () => {
		const state = store.getState();
		expect(typeof state.audio.isPlaying).toBe("boolean");
		expect(typeof state.audio.volume).toBe("number");
		expect(typeof state.audio.currentSong.path).toBe("string");
		expect(typeof state.audio.currentSong.name).toBe("string");
	});
});
