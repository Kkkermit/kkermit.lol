import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
	const renderIt = async () => {
		render(<App />);
	};

	it("renders the UI", async () => {
		await renderIt();
		expect(screen.getByTestId("render-ui")).toBeInTheDocument();
	});
});
