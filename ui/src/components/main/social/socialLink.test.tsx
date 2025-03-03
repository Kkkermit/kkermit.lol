import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SocialLink from "./socialLink";

describe("<SocialLink />", () => {
	const defaultProps = {
		href: "https://example.com",
		icon: "/path/to/icon.svg",
		alt: "Test Icon",
		glowColor: "#ffffff",
	};

	const getProps = (props: Partial<typeof defaultProps> = {}) => ({
		...defaultProps,
		...props,
	});

	const renderIt = async () => {
		render(<SocialLink {...getProps()} />);
	};

	it("renders with correct attributes", async () => {
		await renderIt();
		const link = screen.getByRole("link");
		const image = screen.getByRole("img", { name: defaultProps.alt });
		expect(link).toHaveAttribute("href", defaultProps.href);
		expect(link).toHaveAttribute("target", "_blank");
		expect(link).toHaveAttribute("rel", "noopener noreferrer");
		expect(image).toHaveAttribute("src", defaultProps.icon);
		expect(image).toHaveAttribute("alt", defaultProps.alt);
	});

	it("applies correct styles", async () => {
		await renderIt();
		const image = screen.getByRole("img");
		expect(image).toHaveClass(
			"w-10",
			"h-10",
			"cursor-pointer",
			"transition-all",
			"duration-300",
			"hover:scale-110",
			"hover:brightness-110",
		);
		expect(image).toHaveStyle({
			filter: `drop-shadow(0 0 3px ${defaultProps.glowColor})`,
		});
	});

	it("handles click events", async () => {
		await renderIt();
		const mockOpen = jest.fn();
		window.open = mockOpen;
		const link = screen.getByRole("link");
		await userEvent.click(link);
		expect(mockOpen).not.toHaveBeenCalled();
	});
});
