import react from "react";
import { Helmet } from "react-helmet-async";
import SubscribeStandalone from "../Components/SubscribeStandalone"


const Subscribe = () => {
	return (
		<div className="w-3/4 mx-auto">
			<Helmet>
				<title>Brand Partner | Student Survival Box</title>
			</Helmet>
		<SubscribeStandalone />
		</div>
	);
};

export default Subscribe;
