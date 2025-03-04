/**
 * Format an activity timestamp to show elapsed or remaining time
 * @param timestamps The activity timestamps object
 * @param timeUpdate Optional parameter to force recalculation of time
 */
export const formatTimestamp = (timestamps: { start?: number; end?: number }, timeUpdate?: number) => {
	const now = Date.now() + (timeUpdate !== undefined ? 0 : 0);

	if (timestamps.end) {
		const secondsRemaining = Math.floor((timestamps.end - now) / 1000);
		if (secondsRemaining <= 0) return "ending now";

		const hours = Math.floor(secondsRemaining / 3600);
		const minutes = Math.floor((secondsRemaining % 3600) / 60);

		if (hours > 0) {
			return `${hours}h ${minutes}m remaining`;
		} else {
			return `${minutes}m ${secondsRemaining % 60}s remaining`;
		}
	} else if (timestamps.start) {
		const secondsElapsed = Math.floor((now - timestamps.start) / 1000);
		const hours = Math.floor(secondsElapsed / 3600);
		const minutes = Math.floor((secondsElapsed % 3600) / 60);

		if (hours > 0) {
			return `${hours}h ${minutes}m elapsed`;
		} else if (minutes > 0) {
			return `${minutes}m ${secondsElapsed % 60}s elapsed`;
		} else {
			return `${secondsElapsed}s elapsed`;
		}
	}

	return "";
};
