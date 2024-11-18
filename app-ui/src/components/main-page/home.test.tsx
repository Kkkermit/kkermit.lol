import { render, screen } from "@testing-library/react";
import Home from "./home";

describe("Home", () => {
	it("renders the component", () => {
		render(<Home />);
		expect(screen.getByTestId("home-page")).toBeInTheDocument();
	});
});
