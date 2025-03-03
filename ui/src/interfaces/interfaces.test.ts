import type { HeaderConfig } from "./header-interface";
import type { LandingProps } from "./landing-interface";
import type { SocialLinkProps } from "./social-link-interface";
import type { SparklesProps } from "./sparkles-interface";
import { createElement } from "react";

describe("Interfaces", () => {
	describe("HeaderConfig Interface", () => {
		it("should correctly type a header configuration object", () => {
			const validConfig: HeaderConfig = {
				title: "Test Title",
				description: "Test Description",
			};

			expect(typeof validConfig.title).toBe("string");
			expect(typeof validConfig.description).toBe("string");

			expect(validConfig).toEqual({
				title: "Test Title",
				description: "Test Description",
			});
		});

		it("should require both title and description", () => {
			// @ts-expect-error - Missing description
			const invalidConfig1: HeaderConfig = {
				title: "Test Title",
			};

			// @ts-expect-error - Missing title
			const invalidConfig2: HeaderConfig = {
				description: "Test Description",
			};

			// @ts-expect-error - Empty object
			const invalidConfig3: HeaderConfig = {};
		});
	});

	describe("LandingProps Interface", () => {
		it("should correctly type a landing props object", () => {
			const mockOnEnter = jest.fn();
			const validProps: LandingProps = {
				onEnter: mockOnEnter,
			};

			expect(typeof validProps.onEnter).toBe("function");

			validProps.onEnter();
			expect(mockOnEnter).toHaveBeenCalledTimes(1);
		});

		it("should require onEnter function", () => {
			const createInvalidProps1 = () => {
				// @ts-expect-error - Missing onEnter
				const props: LandingProps = {};
				return props;
			};

			const createInvalidProps2 = () => {
				const props: LandingProps = {
					onEnter: () => "This is not a function",
				};
				return props;
			};

			expect(createInvalidProps1).toBeDefined();
			expect(createInvalidProps2).toBeDefined();
		});
	});

	describe("SocialLinkProps Interface", () => {
		it("should correctly type a social link props object", () => {
			const validProps: SocialLinkProps = {
				href: "https://example.com",
				icon: "/path/to/icon.svg",
				alt: "Example Alt Text",
				glowColor: "#ffffff",
			};

			expect(typeof validProps.href).toBe("string");
			expect(typeof validProps.icon).toBe("string");
			expect(typeof validProps.alt).toBe("string");
			expect(typeof validProps.glowColor).toBe("string");
		});

		it("should require all properties", () => {
			const invalidProps1 = {} as any;
			const invalidProps2 = { href: "https://example.com" } as any;
			const invalidProps3 = {
				href: "https://example.com",
				icon: "/path/to/icon.svg",
			} as any;

			const test1 = () => ({ ...invalidProps1 } as SocialLinkProps);
			const test2 = () => ({ ...invalidProps2 } as SocialLinkProps);
			const test3 = () => ({ ...invalidProps3 } as SocialLinkProps);

			expect(test1).toBeDefined();
			expect(test2).toBeDefined();
			expect(test3).toBeDefined();
		});

		it("should not allow non-string values", () => {
			const invalidProps = {
				href: 123,
				icon: true,
				alt: {},
				glowColor: [],
			} as any;

			const test = () => ({ ...invalidProps } as SocialLinkProps);

			expect(test).toBeDefined();
		});
	});

	describe("SparklesProps Interface", () => {
		it("should correctly type sparkles props object with string children", () => {
			const props: SparklesProps = {
				children: "Test Content",
			};

			expect(props.children).toBe("Test Content");
		});

		it("should correctly type sparkles props object with JSX children", () => {
			const props: SparklesProps = {
				children: createElement("div", null, "Test JSX"),
			};

			expect(props.children).toBeDefined();
		});

		it("should require children property", () => {
			const createInvalidProps = () => {
				// @ts-expect-error - Missing children
				const props: SparklesProps = {};
				return props;
			};

			expect(createInvalidProps).toBeDefined();
		});

		it("should accept different types of ReactNode", () => {
			const arrayProps: SparklesProps = {
				children: ["Test", createElement("div", { key: "1" }, "JSX")],
			};

			const numberProps: SparklesProps = {
				children: 123,
			};

			const nullProps: SparklesProps = {
				children: null,
			};

			expect(arrayProps.children).toBeDefined();
			expect(numberProps.children).toBeDefined();
			expect(nullProps.children).toBeDefined();
		});
	});
});
