import { render, screen } from "@testing-library/react";
import Background from "./background";

describe("Background", () => {
	it("renders the component", () => {
		render(<Background />);
		expect(screen.getByTestId("background")).toBeInTheDocument();
		screen.debug();
	});

	it("should render the stars", () => {
		const { container } = render(<Background />);
		expect(container.querySelector("div")?.classList.contains("stars")).toBe(true);
	});
});
