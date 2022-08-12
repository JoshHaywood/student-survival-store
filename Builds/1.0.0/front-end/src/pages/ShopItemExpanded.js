import react from "react";
import ShopItemExpanded from "../Components/ShopItemExpanded";
import { Helmet } from "react-helmet-async";


const shopItemExpanded = () => {
	return (
		<div className="w-3/4 mx-auto">
			<Helmet>
				<title>Product Page | Student Survival Box</title>
			</Helmet>
			<ShopItemExpanded />
		</div>
	);
};

export default shopItemExpanded;
