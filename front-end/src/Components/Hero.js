import React from "react";
import heroImage from "../images/Mockups/ssboxmockup.png";

const Hero = () => {

	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					
					{/* Homepage Hero */}
					<h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-black md:text-5xl lg:text-6xl lg:max-w-7xl">
						Built by Students for Students
					</h1>

					{/* Homepage Inital Service Description */}
					<p className="mb-8 py-3 leading-relaxed">
						All of our products are handpicked and packed by students in the UK.
						Sourcing the best gadgets, snacks and drinks for you is what we
						spend most of our time doing... and we love your reviews!
					</p>
					
					{/* Primary Call To Action */}
					<div className="flex justify-center">
						<a href="/subscribe">
							<button className="inline-flex text-white border-2 border-primary bg-primary py-2 px-6 hover:text-primary hover:bg-white rounded text-lg">
								Get 10% off your first box
							</button>
						</a>

						{/* Secondary Call To Action */}
						<a href="/ourStory">
							<button className="ml-4 inline-flex text-gray-700 border-2 border-gray-100 hover:border-gray-200 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
								Read our story
							</button>
						</a>

					</div>
				</div>

				{/* Page Hero Image To Display Right Of Call to actions and hero title and description */}
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						className="object-cover object-center rounded"
						alt="Student Survival Box"
						src={heroImage}
					/>
				</div>
			</div>
		</section>
	);
};
export default Hero;
