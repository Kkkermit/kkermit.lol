import { Timestamps } from "../types/types";

export function formatTimestamp(timestamps: Timestamps): string {
	if (timestamps.start) {
		const startTime = new Date(timestamps.start);
		const now = new Date();
		const diff = Math.floor((now.getTime() - startTime.getTime()) / 1000);

		// Format as elapsed time
		if (diff < 60) {
			return "just now";
		} else if (diff < 3600) {
			const mins = Math.floor(diff / 60);
			return `${mins} minute${mins !== 1 ? "s" : ""} elapsed`;
		} else if (diff < 86400) {
			const hours = Math.floor(diff / 3600);
			return `${hours} hour${hours !== 1 ? "s" : ""} elapsed`;
		} else {
			const days = Math.floor(diff / 86400);
			return `${days} day${days !== 1 ? "s" : ""} elapsed`;
		}
	}

	if (timestamps.end) {
		const endTime = new Date(timestamps.end);
		const now = new Date();
		const diff = Math.floor((endTime.getTime() - now.getTime()) / 1000);

		if (diff < 0) {
			return "ended";
		} else if (diff < 60) {
			return "less than a minute left";
		} else if (diff < 3600) {
			const mins = Math.floor(diff / 60);
			return `${mins} minute${mins !== 1 ? "s" : ""} left`;
		} else if (diff < 86400) {
			const hours = Math.floor(diff / 3600);
			return `${hours} hour${hours !== 1 ? "s" : ""} left`;
		} else {
			const days = Math.floor(diff / 86400);
			return `${days} day${days !== 1 ? "s" : ""} left`;
		}
	}

	return "";
}
