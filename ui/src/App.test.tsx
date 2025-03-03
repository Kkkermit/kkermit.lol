import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

jest.mock("./utils/audioUtils");

jest.mock("./components/background/ParticleBackground", () => {
	return () => <div data-testid="mock-particle-background" />;
});

describe("<App />", () => {
	const renderIt = async () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>,
		);
	};

	it("renders the UI", async () => {
		await renderIt();
		expect(screen.getByTestId("render-ui")).toBeInTheDocument();
	});
});
