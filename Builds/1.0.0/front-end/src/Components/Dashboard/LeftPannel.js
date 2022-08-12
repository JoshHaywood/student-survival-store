import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Hero = ({ firstName, lastName, profilePic, profileCompleted }) => {
	const history = useHistory();
	const logoutHandler = () => {
		localStorage.removeItem("user");
		history.push("/");
	};
	return (
		<nav className="w-60 flex flex-col items-center bg-gray-900 py-4">
			<div className="flex flex-wrap justify-center">
				<div className="w-12/12 sm:w-12/12 px-4">
					<img
						src={`http://localhost:3001/images/uploads/userProfileImages/${profilePic}`}
						alt="user profile"
						className="shadow rounded max-w-full h-auto align-middle border-none"
					/>
				</div>
			</div>
			<div className="text-lg py-4 font-semibold text-white">{`${firstName} ${lastName}`}</div>
			<ul className="mt-2 text-gray-300 font-semibold">
				{profileCompleted === 0 ? (
					<li className="mb-5">
						<NavLink
							to="/completeProfile"
							className="text-sm capitalize bg-primary text-fg p-2 rounded border-2 border-primary hover:text-primary hover:bg-transparent"
						>
							Complete Account
						</NavLink>
					</li>
				) : (
					""
				)}
				<li className="mt-3">
					<NavLink
						to="/editAccount"
						className="flex flex-col items-center text-sm capitalize"
					>
						<svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
							<path
								d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
                    17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
                    8h-8v10h8V11m-10 4H3v6h8v-6z"
							></path>
						</svg>
						<span>Edit Account</span>
					</NavLink>
				</li>
				<li
					className="mt-3 text-sm capitalize flex flex-col items-center cursor-pointer"
					onClick={logoutHandler}
				>
					<svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
						<path
							d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
                    17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
                    8h-8v10h8V11m-10 4H3v6h8v-6z"
						></path>
					</svg>
					<span>Logout</span>
				</li>
			</ul>
		</nav>
	);
};
export default Hero;
