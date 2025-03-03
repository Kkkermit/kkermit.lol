import { screen, render, fireEvent } from "@testing-library/react";
import Lanyard from "./lanyard";
import { links } from "../../../../link-container/links";

describe("<Lanyard />", () => {
	const renderIt = async () => {
		render(<Lanyard />);
	};

	it("renders the lanyard", async () => {
		await renderIt();
		expect(screen.getByRole("link", { name: "Discord Status" })).toBeInTheDocument();
		expect(screen.getByRole("img", { name: "Discord Status" })).toBeInTheDocument();
		screen.debug();
	});

	it("should handle click events", async () => {
		await renderIt();
		const mockOpen = jest.fn();
		window.open = mockOpen;
		const link = screen.getByRole("link", { name: "Discord Status" });
		fireEvent.click(link);
		expect(mockOpen).toHaveBeenCalledTimes(1);
		expect(mockOpen).toHaveBeenCalledWith(expect.stringMatching(links.discord), "_blank");
	});
});
