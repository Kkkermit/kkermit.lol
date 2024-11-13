import "./styles/global.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/main-page/home";
import Background from "./components/background/background";
import OnloadScreen from "./components/onload-screen/onload-screen";

function App() {
	return (
		<>
			<div id="container" data-testid="render-ui">
				<Router>
					<Background />
					<OnloadScreen />
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
