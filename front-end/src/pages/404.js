import { Helmet } from "react-helmet-async";
import FouroFour from "../Components/FouroFour";
const NotFound = () => {
	return (
		<>
			<Helmet>
				<title>Page Not Found | Student Survival Box</title>
			</Helmet>
			<FouroFour />
		</>
	);
};

export default NotFound;