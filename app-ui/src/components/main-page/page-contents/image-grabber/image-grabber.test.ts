import { images } from "./image-grabber";

describe("LinkGrabber", () => {
	it("should render the discord image", () => {
		expect(images.discord).toBeTruthy();
	});

	it("should render the github image", () => {
		expect(images.github).toBeTruthy();
	});

	it("should render the spotify image", () => {
		expect(images.spotify).toBeTruthy();
	});

	it("should render the volumeOn image", () => {
		expect(images.volumeOn).toBeTruthy();
	});

	it("should render the volumeOff image", () => {
		expect(images.volumeOff).toBeTruthy();
	});

	it("should render the kermitGif image", () => {
		expect(images.kermitGif).toBeTruthy();
	});
});
