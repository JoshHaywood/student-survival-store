import React from "react";
import { Link } from "react-router-dom";
const FouroFour = () => {

// Page users who have an expired link or incorrect hyperlink will be routed here

	return (
		<section class="px-4 py-60 mx-auto max-w-7xl">
			<div class="w-full mx-auto text-center lg:w-2/3">
				<h1 class="mb-4 text-6xl font-thin text-gray-900">404</h1>
				<p class="mb-3 text-xl font-bold text-gray-900 md:text-2xl">
					Oh no! We couldn’t find the page you were looking for.
				</p>
				<p class="mb-3 text-lg font-medium text-gray-700">
					Have questions? Head over to our{" "}
					<Link to="/contactUs" class="underline">
						contact and support page
					</Link>
					. or go back to the{" "}
					<Link to="/" class="underline">
						homepage
					</Link>
					.
				</p>
			</div>
		</section>
	);
};
export default FouroFour;
