import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AudioState {
	isPlaying: boolean;
	volume: number;
}

const initialState: AudioState = {
	isPlaying: false,
	volume: 0.5,
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
	},
});

export const { togglePlay, setVolume } = audioSlice.actions;
export default audioSlice.reducer;
