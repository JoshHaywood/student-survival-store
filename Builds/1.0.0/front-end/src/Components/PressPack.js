import React from "react";
import Image1 from "../images/Mockups/ssboxmockup.png"
export const PressPack = () => {
  
  return (
      
    <section>
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
      <div class="flex flex-col w-full mb-12 text-center">
       
       {/* Hero Title */}
        <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl"> Press Pack </h1>
       
       {/* Hero Desccription */}
        <p class="
      max-w-xl
      mx-auto
      mt-8
      text-base
      leading-relaxed
      text-center text-gray-400
    "> Here is our latest business development news and an array of selected photos that may be used within editorials. For more information or selected quotes please email: Press@StudentSurvivalBox.co.uk </p>
      </div>
    </div>

        
    <div class="relative items-center w-full px-5 py-12 mx-auto  md:px-12 lg:px-24 max-w-7xl">

      {/* First Piece of the Press Pack */}
      <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
        <div class="p-6">
          <img class="object-contain object-center w-full mb-8  lg:h-48 md:h-36 rounded-xl" src={Image1} alt="blog">
          </img>
          <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter  text-neutral-600 lg:text-3xl"> SSB Box With Student. </h1>
          <p class="mx-auto text-base leading-relaxed text-gray-300"> Free to download with attribution for use in online and print editorials and broadsheets. </p>
          <div class="mt-4">
            <a href="#" class="inline-flex items-center mt-4 font-semibold text-grey-400  lg:mb-0 hover:text-primary" title="read more"> Download Image » </a>
          </div>
        </div>


        {/* Second Piece of the Press Pack */}
        <div class="p-6">
          <img class="object-contain object-center w-full mb-8  lg:h-48 md:h-36 rounded-xl" src={Image1} alt="blog">
          </img>
          <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter  text-neutral-600 lg:text-3xl"> SSB Mockup. </h1>
          <p class="mx-auto text-base leading-relaxed text-gray-300"> Free to download with attribution for use in online and print editorials and broadsheets.</p>
          <div class="mt-4">
            <a href="#" class="inline-flex items-center mt-4 font-semibold text-grey-400  lg:mb-0 hover:text-primary" title="read more"> Download Image » </a>
          </div>
        </div>



        {/* Third Piece of the Press Pack */}
        <div class="p-6">
          <img class="object-contain object-center w-full mb-8  lg:h-48 md:h-36 rounded-xl" src={Image1} alt="blog">
          </img>
          <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter  text-neutral-600 lg:text-3xl"> SSB Team </h1>
          <p class="mx-auto text-base leading-relaxed text-gray-300"> Free to download with attribution for use in online and print editorials and broadsheets.</p>
          <div class="mt-4">
            <a href="#" class="inline-flex items-center mt-4 font-semibold text-grey-400  lg:mb-0 hover:text-primary" title="read more"> Download Image » </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
};
export default PressPack;