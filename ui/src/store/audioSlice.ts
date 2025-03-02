import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRandomSong } from "../utils/audioUtils";

export interface AudioState {
	isPlaying: boolean;
	volume: number;
	currentSong: {
		path: string;
		name: string;
	};
}

const initialState: AudioState = {
	isPlaying: false,
	volume: 0.5,
	currentSong: getRandomSong(),
};

export const audioSlice = createSlice({
	name: "audio",
	initialState,
	reducers: {
		togglePlay: (state) => {
			state.isPlaying = !state.isPlaying;
		},
		setVolume: (state, action: PayloadAction<number>) => {
			state.volume = action.payload;
		},
		setCurrentSong: (state, action: PayloadAction<{ path: string; name: string }>) => {
			state.currentSong = action.payload;
		},
	},
});

export const { togglePlay, setVolume, setCurrentSong } = audioSlice.actions;
export default audioSlice.reducer;
