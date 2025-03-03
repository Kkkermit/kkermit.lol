import kermit from "../../../assets/profile-picture/kermit.gif";

const ProfilePicture: React.FC = () => (
	<figure className="hidden md:block">
		<img
			src={kermit}
			alt="Profile"
			className="h-64 w-64 rounded-full border-4 border-white bg-black p-1.5 
                     transition-transform duration-300 hover:scale-105
                     hover:rotate-[360deg] transition-all duration-[1500ms]"
		/>
	</figure>
);

export default ProfilePicture;
