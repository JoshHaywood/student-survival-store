import react from "react";
import Hero from "../Components/BrandPartnerHero";
import { Helmet } from "react-helmet-async";
import BrandPartnerQuote from "../Components/BrandPartnerQuote"
import BrandPartnerStats from "../Components/BrandPartnerStats";

const HomePage = () => {
	return (
		<div className="w-3/4 mx-auto">
			<Helmet>
				<title>Brand Partner | Student Survival Box</title>
			</Helmet>
			<Hero />
			<BrandPartnerStats />
			<BrandPartnerQuote />
		</div>
	);
};

export default HomePage;
