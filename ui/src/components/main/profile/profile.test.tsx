import { render, screen } from "@testing-library/react";
import ProfilePicture from "./profile";

describe("<ProfilePicture />", () => {
	const renderIt = async () => {
		render(<ProfilePicture />);
	};

	it("renders the profile picture with correct attributes", async () => {
		await renderIt();
		const image = screen.getByRole("img", { name: "Profile" });
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute("alt", "Profile");
		expect(image).toHaveAttribute("src", expect.stringContaining("svg-file"));
	});

	it("has correct styling classes", async () => {
		await renderIt();
		const figure = screen.getByRole("figure");
		const image = screen.getByRole("img", { name: "Profile" });
		expect(figure).toHaveClass("hidden", "md:block");
		expect(image).toHaveClass(
			"h-64",
			"w-64",
			"rounded-full",
			"border-4",
			"border-white",
			"bg-black",
			"p-1.5",
			"transition-transform",
			"duration-300",
			"hover:scale-105",
			"hover:rotate-[360deg]",
			"transition-all",
			"duration-[1500ms]",
		);
	});
});
