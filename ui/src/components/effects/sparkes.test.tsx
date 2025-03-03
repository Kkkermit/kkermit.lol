import { render, screen } from "@testing-library/react";
import Sparkles from "./sparkles";

describe("<Sparkles />", () => {
	beforeEach(() => {
		jest.spyOn(Math, "random").mockReturnValue(0.5);
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	it("renders children correctly", () => {
		render(
			<Sparkles>
				<div data-testid="child">Test Content</div>
			</Sparkles>,
		);
		expect(screen.getByTestId("child")).toBeInTheDocument();
		expect(screen.getByText("Test Content")).toBeInTheDocument();
	});

	it("renders correct number of sparkles", () => {
		render(
			<Sparkles>
				<div>Test Content</div>
			</Sparkles>,
		);
		const sparkles = document.getElementsByClassName("sparkle");
		expect(sparkles.length).toBe(40);
	});

	it("applies correct CSS variables to sparkles", () => {
		render(
			<Sparkles>
				<div>Test Content</div>
			</Sparkles>,
		);
		const firstSparkle = document.getElementsByClassName("sparkle")[0];
		expect(firstSparkle).toHaveStyle({
			"--delay": "2s",
			"--size": "6px",
			"--speed": "3s",
			"--left": "50%",
			"--top": "50%",
			"--moveX": "0px",
			"--moveY": "0px",
		});
	});

	it("wraps content in correct structure", () => {
		render(
			<Sparkles>
				<div>Test Content</div>
			</Sparkles>,
		);
		expect(document.querySelector(".sparkles-wrapper")).toBeInTheDocument();
		expect(document.querySelector(".sparkles-content")).toBeInTheDocument();
	});

	it("memoizes sparkles array", () => {
		const { rerender } = render(
			<Sparkles>
				<div>Test Content</div>
			</Sparkles>,
		);
		const initialSparkles = Array.from(document.getElementsByClassName("sparkle")).map((el) =>
			el.getAttribute("style"),
		);

		rerender(
			<Sparkles>
				<div>Updated Content</div>
			</Sparkles>,
		);
		const rerenderedSparkles = Array.from(document.getElementsByClassName("sparkle")).map((el) =>
			el.getAttribute("style"),
		);
		expect(rerenderedSparkles).toEqual(initialSparkles);
	});
});
