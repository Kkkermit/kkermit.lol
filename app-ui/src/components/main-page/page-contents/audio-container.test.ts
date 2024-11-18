import { audio } from "./audio-container";

describe("AudioContainer", () => {
	it("should render the audio name", () => {
		expect(audio[0].songName).toBe("Supër Test - Yeat");
	});

	it("should render the audio source", () => {
		expect(audio[0].song).toBe("https://r2.guns.lol/f6cc92f9-166f-44dc-bff3-bdc886763e9c.mp3");
	});
});
