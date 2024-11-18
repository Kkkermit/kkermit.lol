import { render, screen } from "@testing-library/react";
import Home from "./home";

describe("Home", () => {
	it("renders the component", () => {
		render(<Home />);
		expect(screen.getByTestId("home-page")).toBeInTheDocument();
		expect(screen.getByTestId("audio-player")).toBeInTheDocument();
		expect(screen.getByTestId("content-desktop")).toBeInTheDocument();
	});

	it("should render the desktop view", () => {
		render(<Home />);
		expect(screen.getByTestId("content-desktop")).toBeInTheDocument();
		expect(screen.queryByTestId("content-mobile")).not.toBeInTheDocument();
	});

	it("should render the mobile view", () => {
		const { innerWidth } = window;
		window.innerWidth = 767;
		render(<Home />);
		expect(screen.getByTestId("content-mobile")).toBeInTheDocument();
		expect(screen.queryByTestId("content-desktop")).not.toBeInTheDocument();
		window.innerWidth = innerWidth;
	});
});
