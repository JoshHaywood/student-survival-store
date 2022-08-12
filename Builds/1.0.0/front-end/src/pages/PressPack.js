import PressPack from "../Components/PressPack";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
	return (
		<div className="w-3/4 mx-auto">
			<Helmet>
				<title>Press Pack | Student Survival Box</title>
			</Helmet>
			<PressPack />
		</div>
	);
};

export default HomePage;
