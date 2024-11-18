import { fireEvent, render, screen } from "@testing-library/react";
import AudioPlayer from "./audio";
import { audio } from "./audio-container";

describe("AudioPlayer", () => {
	it("renders the component", () => {
		render(<AudioPlayer />);
		expect(screen.getByTestId("audio-player")).toBeInTheDocument();
	});

	it("should render the audio player button on pause", () => {
		render(<AudioPlayer />);
		expect(screen.getByRole("button", { name: "Pause" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Play" })).not.toBeInTheDocument();
		expect(screen.getByRole("img", { name: "Pause" })).toBeInTheDocument();
		expect(screen.queryByRole("img", { name: "Play" })).not.toBeInTheDocument();
	});

	it("should render the audio name and play and song", () => {
		const { container } = render(<AudioPlayer />);
		expect(screen.getByText(audio.songName)).toBeInTheDocument();
		expect(container.querySelector("audio")).toHaveAttribute("src", audio.song);
	});

	it("should pause the music when the button is clicked", () => {
		const fakeClick = jest.fn();
		render(<AudioPlayer />);
		expect(screen.getByRole("button", { name: "Pause" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Play" })).not.toBeInTheDocument();
		expect(screen.getByRole("img", { name: "Pause" })).toBeInTheDocument();
		expect(screen.queryByRole("img", { name: "Play" })).not.toBeInTheDocument();
		fireEvent.click(screen.getByRole("button", { name: "Pause" }));
		expect(screen.getByRole("button", { name: "Play" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Pause" })).not.toBeInTheDocument();
		expect(screen.getByRole("img", { name: "Play" })).toBeInTheDocument();
		expect(screen.queryByRole("img", { name: "Pause" })).not.toBeInTheDocument();
		expect(fakeClick).toHaveBeenCalledTimes(0);
	});
});
