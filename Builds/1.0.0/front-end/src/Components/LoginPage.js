import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [formErrors, setFormErrors] = useState([]);
	useEffect(() => {
		if (localStorage.getItem('user')) {
			history.push("/myAccountProfile");
		}
	})
	const formHandler = async (e) => {
		e.preventDefault();
		let result = await submitForm();
		if (result.status === "success") {
			// Store the JWT token in local storage (Not good, but works for now)
			localStorage.setItem("user", JSON.stringify(result.token));
			history.push("/myAccountProfile");
		} else {
			let sortedFormErrors = {
				email: [],
				password: [],
			};
			result.forEach((error) => {
				if (error.param === "email") {
					sortedFormErrors.email.push(error);
				}
				if (error.param === "password") {
					sortedFormErrors.password.push(error);
				}
			});
			setFormErrors(sortedFormErrors);
		}
	};
	const submitForm = async () => {
		const response = await fetch("http://localhost:3001/api/auth/login", {
			method: "POST",
			body: JSON.stringify({
				email: email,
				password: password,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		let result = await response.json();
		return result;
	};
	return (
		<section className="bg-gray-900 bg-hero-pattern bg-cover">
			<div className="px-0 py-20 mx-auto max-w-7xl sm:px-4">
				<div className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
					<h1 className="mb-4 text-lg font-semibold text-left text-gray-900">
						Login to your account
					</h1>
					<form className="mb-8 space-y-4">
						<div className="block">
							<label
								htmlFor="email"
								className="block mb-1 text-md font-medium text-gray-700"
							>
								Your Email
							</label>
							<input
								id="email"
								name="email"
								className={`form-input w-full p-2 border-b-2 border-transparent bg-gray-100 rounded ${
									formErrors.email
										? formErrors.email.length > 0
											? "border-red-600"
											: null
										: null
								}`}
								type="email"
								placeholder="Ex. james@bond.com"
								inputMode="email"
								required
								onChange={(e) => setEmail(e.target.value)}
							/>
							{formErrors.email ? (
								formErrors.email.length > 0 ? (
									<p className="text-red-600 mt-1 font-semibold text-sm">
										{formErrors.email[0].msg}
									</p>
								) : null
							) : null}
						</div>
						<div className="block">
							<label
								htmlFor="password"
								className="block mb-1 text-md font-medium text-gray-700"
							>
								Your Password
							</label>
							<input
								id="password"
								name="password"
								className={`form-input w-full p-2 border-b-2 border-transparent bg-gray-100 rounded ${
									formErrors.password
										? formErrors.password.length > 0
											? "border-red-600"
											: null
										: null
								}`}
								type="password"
								placeholder="••••••••"
								required
								onChange={(e) => setPassword(e.target.value)}
							/>
							{formErrors.password ? (
								formErrors.password.length > 0 ? (
									<p className="text-red-600 mt-1 font-semibold text-sm">
										{formErrors.password[0].msg}
									</p>
								) : null
							) : null}
						</div>
						<button
							className="w-full py-3 mt-1 btn btn-primary border-2 border-primary hover:border-primary bg-primary text-white hover:text-primary rounded hover:bg-white"
							onClick={formHandler}
						>
							Login
						</button>
					</form>
					<div className="space-y-0">
						{/* <div className="text-center border-b border-gray-200" style={{lineHeight: "0px"}}>
          <span className="p-2 text-xs font-semibold tracking-wide text-gray-600 uppercase bg-white" style={{lineHeight: "0px"}}>Or</span>
        </div> */}
						{/* <div className="grid grid-cols-2 gap-4">
          <a href="#" className="py-3 btn btn-icon btn-google">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
              <path
                d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z"
              />
            </svg>
            <span className="sr-only">Continue with</span> Google
          </a>
        </div> */}
					</div>
					<div className="mb-4 text-center text-gray-400 flex justify-around">
						<NavLink to="/signup" className="text-primary hover:underline">
							Create an Account
						</NavLink>
						<NavLink
							to="/forgotPassword"
							className="text-primary hover:underline"
						>
							Forgot password
						</NavLink>
						{/* <a href="#" className="text-purple-200 underline hover:text-white">
							Privacy & Terms
						</a> */}
					</div>
				</div>
			</div>
		</section>
	);
};
export default LoginPage;
