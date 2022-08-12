import react from "react";
import ClimateNeutralHero from "../Components/ClimateNeutralHero";
import { Helmet } from "react-helmet-async";


const ClimateNeutral = () => {
	return (
		<div className="w-3/4 mx-auto">
			<Helmet>
				<title>Climate Neutral | Student Survival Box</title>
			</Helmet>
			<ClimateNeutralHero />
		</div>
	);
};

export default ClimateNeutral;