import React from "react";
import OurStoryVideo from "../video/OurStoryVideo.mp4";

const Hero = () => {

    return (
      <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
        <div className="max-w-xl mx-auto lg:max-w-screen-xl">
          <div className="mb-16 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
             
             {/* Hero Title */}
              <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-5xl lg:text-6xl lg:max-w-7xl">
                Our Story
              </h2>

              {/* Hero Description */}
              <p className="text-base text-gray-700 md:text-lg">
                Students straight out of Falmouth University.
              </p>
            </div>

            <div className="flex items-center">
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-green-400 hover:text-green-400"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
            </div>
          </div>
        </div>
        
        {/* Hero Image/Video hosted locally within application structure and plays above background without sound or any interactive elements */}
        <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
        <video loop={true} autoPlay={true} muted={true}>
        <source src={OurStoryVideo} type="video/mp4" />
        </video>
     </div>
      </div>
    );
  };
export default Hero;