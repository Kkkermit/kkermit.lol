import { render, screen } from "@testing-library/react";
import MockComponent from "./mockComponent";

describe("MockComponent", () => {
	it("should render the component", () => {
		render(<MockComponent />);
		expect(screen.getByTestId("mock-component")).toBeInTheDocument();
	});
});
