import Hero from "../Components/Hero";
import Blog from "../Components/BlogSection";
import UniversityLogos from "../Components/UniversityLogos";
import HomepageSubscription from "../Components/HomepageSubscription"
import AboutSnippet from "../Components/AboutSnippet"
import WhySSB from "../Components/WhySSB";
import { Helmet } from "react-helmet-async";

// Google Person or Entity Schema Markup
import { Person } from "schema-dts";

// Google Business Schema
import { JsonLd } from "react-schemaorg";


const HomePage = () => {
	return (
		
		<div className="w-3/4 mx-auto">
			<Helmet>
				<title>Home | Student Survival Box</title>
			</Helmet>
			<Hero />
			<WhySSB />
			<HomepageSubscription />
			<UniversityLogos />
			<AboutSnippet />
			<Blog />
		</div>
	);
};

export default HomePage;
