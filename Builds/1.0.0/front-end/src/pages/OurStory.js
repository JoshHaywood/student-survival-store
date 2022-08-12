import Hero from "../Components/OurStoryHero";
import MeetTheTeam from "../Components/MeetTheTeam";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
	return (
		<div className="w-3/4 mx-auto">
			<Helmet>
				<title>Our Story | Student Survival Box</title>
			</Helmet>
			<Hero />
			<MeetTheTeam />
		</div>
	);
};

export default HomePage;
