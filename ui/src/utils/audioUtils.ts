const songNames: Record<string, string> = {
	"Playboi-Carti-NO-9-REMIX": "Playboi Carti - NO. 9 (Remix)",
	"Feel-It": "D4vd - Feel It",
	"Goodie-Bag": "Still Woozy - Goodie Bag",
	Timeless: "The Weekend - Timeless (feat. Playboi Carti)",
	Ivy: "Frank Ocean - Ivy",
	"Told-ya": "Told Ya - Yeat",
};

export function getRandomSong() {
	const musicContext = import.meta.glob("../assets/music/*.mp3", { eager: true });
	const songs = Object.entries(musicContext).map(([path, module]) => {
		const fileName = path.split("/").pop()?.replace(".mp3", "") || "";
		return {
			path: (module as { default: string }).default,
			name: songNames[fileName] || fileName,
		};
	});

	const randomIndex = Math.floor(Math.random() * songs.length);
	return songs[randomIndex];
}
