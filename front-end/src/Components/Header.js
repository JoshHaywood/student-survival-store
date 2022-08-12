import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import MoonIcon from "../images/moonIcon";
import SunIcon from "../images/sunIcon";
import $ from 'jquery'; 
import style from './Header.css'

//Function for opening the menu
function OpenNav() {
	var mobileNav = document.getElementById("mobileNav"); //Set variable by id
	var mobileNavIcon = document.getElementById("mobileNavIcon"); //Set variable by id

	mobileNav.style.height = "70px"; //Set height 
	
	mobileNav.style.display = "flex"; //Set display to flex
	mobileNavIcon.style.display = "none"; //Set display to inline-flex
}
  
//Function for closing the menu
function CloseNav() { 
	var mobileNav = document.getElementById("mobileNav"); //Set variable by id
	var mobileNavIcon = document.getElementById("mobileNavIcon"); //Set variable by id

	mobileNav.style.height = "0"; //Set height to 0

	mobileNav.style.display = "none"; //Set display to inline-flex
	mobileNavIcon.style.display = "inline-flex"; //Set display to inline-flex
}

const Header = ({ switchThemeHandler, currentTheme }) => {

	return (
		<header className="sticky top-0 z-50">
			<div className="bg-white">
				<div className="text-gray-600 body-font">
					{/* Sidebar Mobile */}
					<div id="mobileNav" className="mobileNav hidden flex-wrap items-center w-full px-3 py-1 fixed-top overflow-x-hidden bg-gray-600 text-gray-200">
							<img src="logo192.png" className="md:mx-4 md:mr-12 sm:mx-2.5 h-auto w-8"></img>
							<NavLink to="/" className="md:mx-3 sm:mx-4 sm:p-5  transition duration-300 text-sm rounded hover:bg-green-400 hover:text-gray-500">
								Home
							</NavLink>
							<NavLink to="/ourStory" className="md:mx-1 sm:mx-1 p-5 transition duration-300 text-sm rounded hover:bg-green-400 hover:text-gray-500">
								Our Story
							</NavLink>
							<NavLink to="/studentNews" className="md:mx-1 sm:mx-1 p-5 transition duration-300 text-sm rounded hover:bg-green-400 hover:text-gray-500">
								Student News
							</NavLink>
							<NavLink to="/store" className="md:mx-1 sm:mx-1 p-5 transition duration-300 rounded text-sm hover:bg-green-400 hover:text-gray-500">
								Shop Now
							</NavLink>
							<NavLink to="/contactUs" className="md:mx-3 sm:mx-1 p-5 transition duration-300 text-sm rounded hover:bg-green-400 hover:text-gray-500">
								Contact Us
							</NavLink>
							<a onClick={CloseNav} class="md:mx-1 md:pl-1 sm:mx-1 pb-2 text-4xl hover:text-green-400">
								×
							</a>
				  		</div>
					</div>

					<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
						{/* <NavLink
							to="/"
							className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
						>
							<img className="w-12" src={logo} alt="" />
						</NavLink> */}
						<NavLink to="/">
							<span className="ml-3 text-xl text-black md-font-bold">
								STUDENT SURVIVAL BOX
							</span>
						</NavLink>

						<nav className="xl:flex lg:flex md:hidden sm:hidden md:ml-auto flex flex-wrap items-center text-base justify-center">
							{/* NAVLINK requires import as above,
								href="" changes to to="",
								which has to correspond with 'exact path=""'
								in the 'route' tag
								see app.js for example  */}
							<NavLink to="/" className="mr-5 hover:text-gray-900">
								Home
							</NavLink>
							<NavLink to="/ourStory" className="mr-5 hover:text-gray-900">
								Our Story
							</NavLink>
							<NavLink to="/studentNews" className="mr-5 hover:text-gray-900">
								Student News
							</NavLink>
							<NavLink to="/store" className="mr-5 hover:text-gray-900">
								Shop Now
							</NavLink>
							<NavLink to="/contactUs" className="mr-5 hover:text-gray-900">
								Contact Us
							</NavLink>

						</nav>
						<a href="/subscribe">
							{" "}
							<button className="animate-pulse inline-flex items-center text-white border-2 bg-green-400 border-3 py-2 px-6 md:mx-10 border-primary hover:border-green-400 hover:text-green-400 hover:bg-white rounded text-base mt-4 md:mt-0">
								Get 10% off your first box
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-4 h-4 ml-1"
									viewBox="0 0 24 24"
								>
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</button>
						</a>
						<button
							className="ml-4 p-2 rounded-full hover:bg-gray-200"
							onClick={switchThemeHandler}
						>
							{currentTheme === "light" ? (
								<MoonIcon className="w-12 h-12" />
							) : (
								<SunIcon className="w-12 h-12" />
							)}
						
						
						</button>
						<a href="Login">
							<button class="inline-flex items-center justify-center w-10 h-10 mr-2 ml-4 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
								<svg
									class="w-4 h-4 fill-current"
									viewBox="0 0 20 20"
									class="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
										></path>
										</svg>
									</button>
								</a>
						
						
						
						<a href="Login">
							<button class="inline-flex items-center justify-center w-10 h-10 mr-2 ml-4 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
								<svg
									class="w-4 h-4 fill-current"
									viewBox="0 0 20 20"
									class="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg>
							</button>
						</a>
						
						{/* Sidebar */}
						<button onClick={OpenNav} id="mobileNavIcon" className="inline-flex flex-col absolute xl:hidden lg:hidden md:right-5 md:top-6 sm:right-4 sm:top-8 right-4 top-4">
								<div className="bg-black w-5 h-0.5 my-1"></div>
								<div className="bg-black w-5 h-0.5 my-1"></div>
								<div className="bg-black w-5 h-0.5 my-1"></div>
						</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
