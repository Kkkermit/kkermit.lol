import { render, screen, act } from "@testing-library/react";
import MockComponent from "./mockComponent";

describe("useWindowSize", () => {
	beforeEach(() => {
		Object.defineProperty(window, "innerWidth", { writable: true, configurable: true, value: 1024 });
		Object.defineProperty(window, "innerHeight", { writable: true, configurable: true, value: 768 });
	});

	it("should return the initial window size", () => {
		render(<MockComponent />);

		expect(screen.getByTestId("width").textContent).toBe("1024");
		expect(screen.getByTestId("height").textContent).toBe("768");
	});

	it("should update window size on resize", () => {
		render(<MockComponent />);

		act(() => {
			window.innerWidth = 800;
			window.innerHeight = 600;
			window.dispatchEvent(new Event("resize"));
		});

		expect(screen.getByTestId("width").textContent).toBe("800");
		expect(screen.getByTestId("height").textContent).toBe("600");
	});
});
