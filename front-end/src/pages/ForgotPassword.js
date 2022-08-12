import studentSurvivalStoreOutline from '../images/Favicon/studentSurvivalStoreOutline.png'
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
	return (
		<section className="bg-gray-900 bg-hero-pattern bg-cover">
			<div className="px-0 py-20 mx-auto max-w-7xl sm:px-4">
				<div className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
				
				
					<h1 className="mb-4 text-lg font-semibold text-left text-gray-900">
						Reset your password
					</h1>
					<form className="mb-8 space-y-4">
						<label className="block">
							<span className="block mb-1 text-xs font-medium text-gray-700">
								Your Email
							</span>
							<input
								className="form-input w-full"
								type="email"
								placeholder="Ex. james@bond.com"
								inputMode="email"
								required
							/>
						</label>
					
						<input
							type="submit"
							className="w-full py-3 mt-1 btn btn-primary border-2 border-primary hover:border-primary bg-primary text-white hover:text-primary rounded hover:bg-white"
							value="Send reset email"
						/>
						
					</form>
					<div className="space-y-0">
					</div>

					{/* Account QuickLinks */}
					<div className="mb-4 text-center text-gray-400 flex justify-around">
						<NavLink
							to="/login"
							className="text-primary hover:underline"
						>
							Log In
						</NavLink>
						<NavLink to="/signup" className="text-primary hover:underline">
							Create an Account
						</NavLink>
					</div>
					</div>
					</div>
		</section>
	);
};
export default ForgotPassword;

// const ForgotPassword = () => {
//     return(
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full space-y-8">
//                 <div>
//                     <img className="mx-auto h-20 w-auto" src={studentSurvivalStoreOutline} alt="Workflow" />
//                     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//                     Reset your password
//                     </h2>
//                     <p className="mt-2 text-center text-sm text-gray-600">
//                     Or
//                     <NavLink to="/signUp" className="font-medium text-indigo-600 hover:text-indigo-500">
//                         create an account
//                     </NavLink>
//                     </p>
//                 </div>
//                 <form className="mt-8 space-y-6" action="#" method="POST">
//                     <input type="hidden" name="remember" value="true" />
//                     <div className="rounded-md shadow-sm -space-y-px">
//                         <div>
//                             <label for="email-address" className="sr-only">Email address</label>
//                             <input id="email-address" name="email" type="email" autocomplete="email" required className="appearance-none rounded-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
//                         </div>
//                     </div>    
//                     <div>
//                         <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                             <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//                                 {/* <!-- Heroicon name: solid/lock-closed --> */}
//                                     <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                                         <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
//                                     </svg>
//                             </span>
//                             Send reset email
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default ForgotPassword;