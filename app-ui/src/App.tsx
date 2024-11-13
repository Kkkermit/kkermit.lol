import "./styles/global.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/main-page/home";
import Background from "./components/background/background";

function App() {
	return (
		<>
			<div id="container" data-testid="render-ui">
				<Router>
					<Background />
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
