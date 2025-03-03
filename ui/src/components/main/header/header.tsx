import Sparkles from "../../effects/sparkles";
import { config } from "../../../config/config";
import "../../../styles/index.css";

const Header: React.FC = () => (
	<header className="text-center mb-8">
		<div className="relative inline-block">
			<h1
				className="text-5xl md:text-6xl font-black text-white 
                          drop-shadow-[0_0_5px_#f5f5f5] mb-3"
			>
				<Sparkles>{config.title}</Sparkles>
			</h1>
		</div>
		<p
			className="text-xl md:text-2xl font-medium text-white 
                     drop-shadow-[0_0_3px_#f5f5f5]"
		>
			{config.description}
		</p>
	</header>
);

export default Header;
