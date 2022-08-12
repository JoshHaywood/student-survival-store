import FeedbackProduct from "../Components/Dashboard/FeedbackProduct";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import MyAccountDashboard from "../Components/Dashboard/MyAccountDashboard";
import LeftPannel from "../Components/Dashboard/LeftPannel";
import { useEffect } from "react";
import authHeader from "../lib/authHeader";
import { useHistory } from "react-router-dom";
import EditAccountInfo from "../Components/Dashboard/EditAccountInfo";

const HomePage = () => {
	const history = useHistory();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [profilePic, setProfilePic] = useState("");
	const [profileCompleted, setProfileCompleted] = useState("");
	useEffect(() => {
		getUserData();
	}, []);
	const getUserData = async () => {
		const response = await fetch(
			// Dummy User Profile Picture
			"http://localhost:3001/api/user/getOwnProfile",
			{
				method: "GET",
				headers: authHeader(),
			}
		);
		let result = await response.json();
		console.log(result);
		if (result.message === "No token provided!") {
			history.push("/login");
		} else {
			setFirstName(result.firstName);
			setLastName(result.lastName);
			setProfilePic(result.profilePic);
			setProfileCompleted(result.profileCompleted);
		}
	};
	return (
		<div className="w-100 mx-auto">
			<Helmet>
				<title>My Account | Student Survival Box</title>
			</Helmet>
			<div class="flex">
				<LeftPannel
					firstName={firstName}
					lastName={lastName}
					profilePic={profilePic}
					profileCompleted={profileCompleted}
				/>
                <EditAccountInfo />
				{/* <MyAccountDashboard /> */}
			</div>
		</div>
	);
};

export default HomePage;
