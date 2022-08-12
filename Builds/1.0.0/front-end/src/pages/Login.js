import LoginPage from "../Components/LoginPage";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
	return (
		<div className="w-100 mx-auto">
			<Helmet>
				<title>Login | Student Survival Box</title>
			</Helmet>
			<LoginPage />
		</div>
	);
};

export default HomePage;
