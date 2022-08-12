import Blog from "../Components/BlogSection";
import { Helmet } from "react-helmet-async";
import StudentNewsHero from "../Components/StudentNewsHero"

const HomePage = () => {
	return (
		<div className="w-3/4 mx-auto">
			<Helmet>
				<title>Student News | Student Survival Box</title>
			</Helmet>
			<StudentNewsHero />
			<Blog />
		</div>
	);
};

export default HomePage;
