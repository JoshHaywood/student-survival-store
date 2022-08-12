import React from "react";
import FULogo from "../images/ExternaBrandLogos/FULogo.png"
import GALogo from "../images/ExternaBrandLogos/GALogo.png"
import ManMet from "../images/ExternaBrandLogos/ManchesterMet.png"
import EXUni from "../images/ExternaBrandLogos/ExeterUni.png"

const UniversityLogos = () => {
	return (
		
		<section>
			<div className="container px-5 py-0 mx-auto lg:px-16">
				<div className="flex flex-col w-full mb-8 text-center">
					<span className="mb-4 text-sm font-medium tracking-wide text-gray-500">
						{" "}
						Supported by some amazing Universities across the UK.{" "}
						<a
							href="/"
							className="underline font-semibold text-grey-500 lg:mb-0 hover:text-primary"
							>
							Our Supporters »
						</a>
					</span>
				</div>
				<div className="mx-auto text-center">
					<div className="grid grid-cols-4 gap-4 mx-auto lg:grid-cols-4">
						<div>
							<img
								className="h-4 mx-auto lg:h-20"
								src={FULogo}
								alt="Falmouth University"
							></img>
						</div>
						<div>
							<img
								className="h-4 mx-auto lg:h-20"
								src={EXUni}
								alt="Exeter University"
							></img>
						</div>
						<div>
							<img
								className="h-4 mx-auto lg:h-20"
								src={ManMet}
								alt="ManchesterMet"
							></img>
						</div>
						<div>
							<img
								className="h-4 mx-auto lg:h-20"
								src={GALogo}
								alt="Games Academy Falmouth"
							></img>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default UniversityLogos;
