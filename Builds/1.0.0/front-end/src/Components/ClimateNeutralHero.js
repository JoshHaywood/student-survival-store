import React from "react";
import CPF from "../images/ExternaBrandLogos/Climate-Pledge-Friendly.png";

const ClimateNeutralHero = () => {
	return (
		
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
   
   {/* Climate Pledge Friendly Logo */}
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="Climate Neutral" src={CPF}>
		</img>

    {/* Hero Title */}
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">We are Climate Pledge Friendly</h1>
      
      {/* Information on how we work to reduce our climate footprint */}
      <p class="mb-8 leading-relaxed">We take great care with all of the brands we work with and packaging we use for final delivery to our customers to ensure no undue waste is accumulated and so that we are part of the solution and not the problem.</p>
    </div>
  
  </div>
</section>

	);
};

export default ClimateNeutralHero;
