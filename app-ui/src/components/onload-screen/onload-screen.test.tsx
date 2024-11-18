import { fireEvent, render, screen } from "@testing-library/react";
import OnloadScreen from "./onload-screen";

describe("OnloadScreen", () => {
	it("renders the component", () => {
		render(<OnloadScreen />);
		expect(screen.getByTestId("welcome-screen")).toBeInTheDocument();
	});

	it("renders the component with a custom message", () => {
		render(<OnloadScreen />);
		expect(screen.getByRole("heading", { name: "click to enter..." })).toBeInTheDocument();
	});

	it("should handle the onClick event", () => {
		const onEnterClick = jest.fn();
		render(<OnloadScreen onEnterClick={onEnterClick} />);
		const welcomeScreen = screen.getByTestId("welcome-screen");
		fireEvent.click(welcomeScreen);
		expect(onEnterClick).toHaveBeenCalledTimes(1);
	});

	it("should render the Audio component after the onClick event", () => {
		const onEnterClick = jest.fn();
		render(<OnloadScreen onEnterClick={onEnterClick} />);
		const welcomeScreen = screen.getByTestId("welcome-screen");
		fireEvent.click(welcomeScreen);
		expect(screen.getByTestId("audio-player")).toBeInTheDocument();
		expect(screen.queryByTestId("welcome-screen")).not.toBeInTheDocument();
	});
});
