import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Landing from "./components/landing/landing";
import Home from "./components/main/home";
import AudioPlayer from "./components/audio/AudioPlayer";
import ParticleBackground from "./components/background/particleBackground";
import { useState } from "react";

function App() {
	const [showLanding, setShowLanding] = useState(false);

	return (
		<Provider store={store}>
			<div className="relative" data-testid="render-ui">
				<ParticleBackground />
				<div className="relative z-10">
					{!showLanding && <Landing onEnter={() => setShowLanding(true)} />}
					<div
						className={`transition-opacity duration-1000 ${
							showLanding ? "opacity-100" : "opacity-0 pointer-events-none"
						}`}
					>
						<AudioPlayer />
						<Home />
					</div>
				</div>
			</div>
		</Provider>
	);
}

export default App;
