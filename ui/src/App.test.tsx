import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./utils/audioUtils");

jest.mock("./components/background/ParticleBackground", () => {
	return () => <div data-testid="mock-particle-background" />;
});

describe("<App />", () => {
	const renderIt = async () => {
		render(<App />);
	};

	it("renders the UI", async () => {
		await renderIt();
		expect(screen.getByTestId("render-ui")).toBeInTheDocument();
	});
});
