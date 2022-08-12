import Header from "./Components/Header";
import HomePage from "./pages/Home";
import OurStory from "./pages/OurStory";
import NotFound from "./pages/404";
import BrandPartner from "./pages/BrandPartner";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import ForgotPassword from "./pages/ForgotPassword";
import Store from "./pages/Store";
import MyAccountProfile from "./pages/MyAccountProfile";
import StudentNews from "./pages/StudentNews";
import PressPack from "./pages/PressPack";
import dbSetup from "./pages/dbSetup";
import Subscribe from "./pages/Subscribe";
import ClimateNeutral from "./pages/ClimateNeutral";
import ShopItemExpanded from "./Components/ShopItemExpanded";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsandConditions from "./pages/TermsandConditions";
import ProfileSetup from "./pages/ProfileSetup";
import EditAccount from "./pages/EditAccount";

function App() {


	
	const [theme, setTheme] = useState("light");
	useEffect(() => {
		if (!localStorage.getItem("theme")) {
			setTheme("light");
			localStorage.setItem("theme", "light");
		} else {
			if (localStorage.getItem("theme") === "light") {
				setTheme("light");
			} else {
				setTheme("dark");
			}
		}
	}, []);
	const switchTheme = () => {
		if (localStorage.getItem("theme") === "light") {
			setTheme("dark");
			localStorage.setItem("theme", "dark");
		} else {
			setTheme("light");
			localStorage.setItem("theme", "light");
		}
	};

// Router where all pages are declared and routed through.

	return (
		<div className={theme}>
			<BrowserRouter>
				<Header switchThemeHandler={switchTheme} currentTheme={theme} />
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route exact path="/PrivacyPolicy">
						<PrivacyPolicy />
					</Route>
					<Route exact path="/TermsandConditions">
						<TermsandConditions />
					</Route>
					<Route exact path="/shopItemExpanded">
						<ShopItemExpanded />
					</Route>
					<Route exact path="/subscribe">
						<Subscribe />
					</Route>
					<Route exact path="/climateNeutral">
						<ClimateNeutral />
					</Route>
					{/* <Route exact path="/myAccount">
						<MyAccount />
					</Route> */}
					<Route exact path="/ourStory">
						<OurStory />
					</Route>
					<Route exact path="/pressPack">
						<PressPack />
					</Route>
					<Route exact path="/studentNews">
						<StudentNews />
					</Route>
					<Route exact path="/brandPartner">
						<BrandPartner />
					</Route>
					<Route exact path="/myAccountProfile">
						<MyAccountProfile />
					</Route>
					<Route exact path="/editAccount">
						<EditAccount />
					</Route>
					<Route exact path="/completeProfile">
						<ProfileSetup />
					</Route>
					<Route exact path="/brandPartner">
						<BrandPartner />
					</Route>
					<Route exact path="/contactUs">
						<ContactUs />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/signUp">
						<SignUp />
					</Route>
					<Route exact path="/forgotPassword">
						<ForgotPassword />
					</Route>
					<Route exact path="/store">
						<Store />
					</Route>
					<Route exact path="/setupDatabase">
						<dbSetup />
					</Route>
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
