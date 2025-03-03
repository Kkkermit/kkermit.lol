import { render, screen } from "@testing-library/react";
import ParticleBackground from "./ParticleBackground";

const mockContext = {
	fillStyle: "",
	fillRect: jest.fn(),
	beginPath: jest.fn(),
	arc: jest.fn(),
	fill: jest.fn(),
	clearRect: jest.fn(),
};

describe("<ParticleBackground />", () => {
	beforeEach(() => {
		jest.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation(() => mockContext as any);
		global.innerWidth = 1920;
		global.innerHeight = 1080;
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	const renderIt = async () => {
		render(<ParticleBackground />);
	};

	it("renders canvas element", async () => {
		await renderIt();
		const canvas = screen.getByTestId("particle-canvas");
		expect(canvas).toBeInTheDocument();
		expect(canvas.tagName.toLowerCase()).toBe("canvas");
	});

	it("sets canvas dimensions on mount", async () => {
		await renderIt();
		const canvas = screen.getByTestId("particle-canvas") as HTMLCanvasElement;
		expect(canvas.width).toBe(1920);
		expect(canvas.height).toBe(1080);
	});

	it("handles window resize", async () => {
		await renderIt();
		const canvas = screen.getByTestId("particle-canvas") as HTMLCanvasElement;
		global.innerWidth = 1024;
		global.innerHeight = 768;
		window.dispatchEvent(new Event("resize"));
		expect(canvas.width).toBe(1024);
		expect(canvas.height).toBe(768);
	});

	it("cleans up event listeners on unmount", () => {
		const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");
		const { unmount } = render(<ParticleBackground />);
		unmount();
		expect(removeEventListenerSpy).toHaveBeenCalledWith("resize", expect.any(Function));
	});
});
