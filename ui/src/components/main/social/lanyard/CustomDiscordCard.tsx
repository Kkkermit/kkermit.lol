import React, { useEffect, useState, useRef } from "react";
import { links } from "../../../../link-container/links";
import { fetchDiscordUser } from "../../../../utils/discordApi";
import { formatTimestamp } from "../../../../utils/formatUtils";
import { BG_COLOR, BG_COLOR_SECONDARY, COMMON_BG_STYLE } from "../../../../utils/colorUtils";
import { DiscordUser } from "../../../../interfaces/discord-user-interface";
import { discordId } from "../../../../config/config";

const ACTIVITY_TYPES: Record<number, string> = {
	0: "Playing",
	1: "Streaming",
	2: "Listening to",
	3: "Watching",
	4: "Custom",
	5: "Competing in",
};

const STATUS_COLORS: Record<string, string> = {
	online: "bg-green-500",
	idle: "bg-yellow-400",
	dnd: "bg-red-500",
	offline: "bg-gray-500",
};

const CustomDiscordCard: React.FC = () => {
	const [userData, setUserData] = useState<DiscordUser | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [timeUpdate, setTimeUpdate] = useState(0);
	const intervalsRef = useRef<number[]>([]);

	useEffect(() => {
		const timeInterval = window.setInterval(() => {
			setTimeUpdate((prev) => prev + 1);
		}, 1000);

		intervalsRef.current.push(timeInterval);

		return () => {
			window.clearInterval(timeInterval);
		};
	}, []);

	useEffect(() => {
		if (process.env.NODE_ENV === "test") {
			const timer = setTimeout(() => {
				setLoading(false);
			}, 0);
			return () => clearTimeout(timer);
		}

		const getUserData = async () => {
			try {
				const userId = discordId;
				const data = await fetchDiscordUser(userId);
				setUserData(data);
			} catch (err) {
				setError("Failed to load Discord status");
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		getUserData();

		const dataInterval = window.setInterval(getUserData, 30000);
		intervalsRef.current.push(dataInterval);

		return () => {
			intervalsRef.current.forEach((interval) => window.clearInterval(interval));
			intervalsRef.current = [];
		};
	}, []);

	const handleClick = () => {
		window.open(links.discord, "_blank", "noopener,noreferrer");
	};

	const extractImageUrl = (imageUrl: string, applicationId?: string): string => {
		if (!imageUrl) return "";

		if (imageUrl.startsWith("mp:external/")) {
			try {
				const parts = imageUrl.split("mp:external/")[1];
				const actualUrlIndex = parts.indexOf("/https/");

				if (actualUrlIndex !== -1) {
					const extractedUrl = parts.substring(actualUrlIndex + 6);
					return "https://" + extractedUrl;
				} else {
					const urlMatch = parts.match(/\/https\/(.+)/);
					if (urlMatch && urlMatch[1]) {
						return "https://" + urlMatch[1];
					}
				}

				return imageUrl;
			} catch (err) {
				console.error("Error extracting image URL:", err);
				return "";
			}
		}

		if (imageUrl.startsWith("spotify:")) {
			return `https://i.scdn.co/image/${imageUrl.split(":")[1]}`;
		}

		if (applicationId) {
			return `https://cdn.discordapp.com/app-assets/${applicationId}/${imageUrl}.png`;
		}

		return imageUrl;
	};

	const getFormattedSongDuration = (start: number, end: number) => {
		const currentTime = Date.now() + timeUpdate * 0;

		const total = Math.floor((end - start) / 1000);
		const current = Math.floor((currentTime - start) / 1000);
		const minutes = Math.floor(current / 60);
		const seconds = current % 60;
		const totalMinutes = Math.floor(total / 60);
		const totalSeconds = total % 60;

		return `${minutes}:${seconds.toString().padStart(2, "0")} / ${totalMinutes}:${totalSeconds
			.toString()
			.padStart(2, "0")}`;
	};

	if (loading) {
		return (
			<div
				className="w-full mx-auto mb-4 sm:mb-6 rounded-xl p-3 sm:p-4 flex justify-center items-center h-[80px] sm:h-[100px]"
				style={{
					backgroundColor: BG_COLOR,
					boxShadow: "none",
				}}
			>
				<div className="animate-spin h-5 w-5 sm:h-6 sm:w-6 border-2 border-white rounded-full border-t-transparent"></div>
			</div>
		);
	}

	if (error || !userData) {
		return (
			<div className="w-full mx-auto mb-4 sm:mb-6 rounded-xl p-3 sm:p-4 text-center text-white" style={COMMON_BG_STYLE}>
				Unable to load Discord status
			</div>
		);
	}

	const avatarUrl = userData.avatar
		? `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png?size=256`
		: `https://cdn.discordapp.com/embed/avatars/0.png`;

	const allActivities = userData.activities?.filter((act) => act.type !== 4) || [];
	const customStatus = userData.activities?.find((act) => act.type === 4);

	const mainActivities = allActivities.slice(0, 3);

	return (
		<div
			onClick={handleClick}
			className="w-full mx-auto mb-4 sm:mb-6 rounded-xl p-3 sm:p-4 cursor-pointer"
			style={{
				...COMMON_BG_STYLE,
				boxShadow: "none",
				WebkitBoxShadow: "none",
				MozBoxShadow: "none",
			}}
		>
			<div className="flex items-center gap-2 sm:gap-3">
				<div className="relative">
					<img
						src={avatarUrl}
						alt={userData.username || "Discord User"}
						className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
					/>
					<div className="absolute bottom-0 right-0 flex items-center justify-center">
						<div
							className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[rgba(58,58,58,0.8)] ${
								STATUS_COLORS[userData.status || "offline"]
							}`}
						></div>

						{userData.status !== "offline" && (
							<span
								className={`absolute inline-flex h-full w-full rounded-full ${
									STATUS_COLORS[userData.status || "offline"]
								} opacity-75 animate-ping`}
							></span>
						)}
					</div>
				</div>

				<div className="flex-1 min-w-0">
					<div className="font-medium text-white flex items-center text-sm sm:text-base truncate">
						{userData.discord_user?.display_name || userData.username}
					</div>
					<div className="flex items-center text-xs text-gray-300 truncate">
						<span className="capitalize mr-1">{userData.status || "offline"}</span>

						{customStatus && customStatus.emoji && (
							<span className="flex items-center gap-1 ml-1 flex-shrink-0">
								{customStatus.emoji.animated ? (
									<img
										src={`https://cdn.discordapp.com/emojis/${customStatus.emoji.id}.gif`}
										alt={customStatus.emoji.name}
										className="w-3 h-3 sm:w-4 sm:h-4"
									/>
								) : (
									<span>{customStatus.emoji.name}</span>
								)}
							</span>
						)}
					</div>
				</div>
			</div>

			{customStatus && customStatus.state && (
				<div className="mt-1.5 sm:mt-2 text-gray-200 text-xs sm:text-sm truncate">
					{customStatus.state.startsWith("https://") ? (
						<a
							href={customStatus.state}
							target="_blank"
							rel="noopener noreferrer"
							onClick={(e) => e.stopPropagation()}
							className="text-blue-300 hover:text-blue-200 hover:underline"
						>
							{customStatus.state}
						</a>
					) : (
						customStatus.state
					)}
				</div>
			)}

			{userData.spotify && (
				<div className="mt-2 sm:mt-3 border-t border-white/10 pt-2 sm:pt-3 px-0 sm:px-1">
					<div className="flex items-center">
						<div className="flex-1 min-w-0">
							<div className="text-xs text-green-400 mb-0.5 sm:mb-1 flex items-center">
								<div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-1"></div>
								<span className="truncate">Listening to Spotify</span>
							</div>
							<div className="text-white font-medium text-xs sm:text-sm truncate">{userData.spotify.song}</div>
							<div className="text-gray-300 text-xs truncate">by {userData.spotify.artist}</div>
							<div className="text-gray-400 text-xs truncate">on {userData.spotify.album}</div>
							{userData.spotify.timestamps && (
								<div className="text-gray-400 text-xs mt-1 hidden sm:block">
									{getFormattedSongDuration(userData.spotify.timestamps.start, userData.spotify.timestamps.end)}
								</div>
							)}
						</div>

						<div className="ml-2 flex-shrink-0">
							<img
								src={userData.spotify.album_art_url}
								alt={userData.spotify.album}
								className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover"
							/>
						</div>
					</div>
				</div>
			)}

			{mainActivities
				.filter((act) => act.name !== "Spotify")
				.map((activity, index) => (
					<div key={index} className="mt-2 sm:mt-3 border-t border-white/10 pt-2 sm:pt-3 px-0 sm:px-1">
						<div className="flex items-center">
							<div className="flex-1 min-w-0">
								<div className="text-xs text-gray-300 mb-0.5 sm:mb-1 flex items-center flex-wrap gap-y-1">
									<span className="mr-1">{ACTIVITY_TYPES[activity.type] || "Playing"}</span>
									{activity.name === "Code" && (
										<span className="px-1 py-0.5 text-[8px] sm:text-[10px] bg-blue-600 rounded-full">VS Code</span>
									)}
								</div>
								<div className="text-white font-medium text-xs sm:text-sm truncate">{activity.name}</div>

								{activity.details && <div className="text-gray-200 text-xs truncate">{activity.details}</div>}

								{activity.state && !activity.state.includes("buymeacoffee") && (
									<div className="text-gray-300 text-xs truncate">{activity.state}</div>
								)}

								{activity.timestamps && (
									<div className="text-gray-400 text-xs mt-0.5 sm:mt-1 hidden sm:block">
										{formatTimestamp(activity.timestamps, timeUpdate)}
									</div>
								)}
							</div>

							{activity.assets?.large_image && (
								<div className="ml-2 flex-shrink-0">
									<div
										className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden"
										style={{ backgroundColor: BG_COLOR_SECONDARY }}
									>
										<img
											src={extractImageUrl(activity.assets.large_image, activity.application_id)}
											alt={activity.assets.large_text || activity.name}
											className="w-full h-full object-cover rounded-lg"
											title={activity.assets.large_text || ""}
											onError={(e) => {
												console.error("Failed to load image:", activity.assets?.large_image);
												e.currentTarget.style.display = "none";
											}}
										/>

										{activity.assets?.small_image && (
											<div
												className="absolute bottom-0 right-0 p-0.5 rounded-full"
												style={{ backgroundColor: BG_COLOR_SECONDARY }}
											>
												<img
													src={extractImageUrl(activity.assets.small_image, activity.application_id)}
													alt={activity.assets.small_text || ""}
													title={activity.assets.small_text || ""}
													className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
													onError={(e) => {
														console.error("Failed to load small image:", activity.assets?.small_image);
														e.currentTarget.style.display = "none";
													}}
												/>
											</div>
										)}
									</div>
								</div>
							)}
						</div>

						{activity.buttons && activity.buttons.length > 0 && (
							<div className="mt-1.5 sm:mt-2 flex flex-wrap gap-1 sm:gap-2">
								{activity.buttons.map((button, i) => (
									<button
										key={i}
										className="bg-[rgba(88,85,85,0.5)] hover:bg-[rgba(100,100,100,0.6)] 
                              text-white text-[10px] sm:text-xs py-0.5 px-1.5 sm:py-1 sm:px-2 
                              rounded transition-colors"
										onClick={(e) => e.stopPropagation()}
									>
										{button}
									</button>
								))}
							</div>
						)}
					</div>
				))}

			{allActivities.length > 3 && (
				<div className="mt-2 sm:mt-3 border-t border-white/10 pt-2 sm:pt-3 px-0 sm:px-1 text-center">
					<span className="text-xs text-gray-400">
						+{allActivities.length - 3} more {allActivities.length - 3 === 1 ? "activity" : "activities"}
					</span>
				</div>
			)}
		</div>
	);
};

export default CustomDiscordCard;
