/**
 * Standard background color for UI components
 * This is the exact color used throughout the application
 */
export const BG_COLOR = "rgba(88, 85, 85, 0.4)";

/**
 * Secondary background color for smaller UI elements
 */
export const BG_COLOR_SECONDARY = "rgba(88, 85, 85, 0.6)";

/**
 * Border color for UI elements
 */
export const BORDER_COLOR = "rgba(116, 116, 116, 0.6)";

/**
 * Common background style to ensure consistency
 * Use this object in style attributes for perfect color matching
 * Explicitly specifies BG_COLOR to ensure it's used
 */
export const COMMON_BG_STYLE = {
	backgroundColor: BG_COLOR, // Explicitly reference BG_COLOR here
	backdropFilter: "none",
	WebkitBackdropFilter: "none",
};

/**
 * Helper function to apply the standard background color
 * Provides another way to use BG_COLOR
 */
export const applyBgColor = (additionalStyles = {}) => ({
	backgroundColor: BG_COLOR,
	...additionalStyles,
});
