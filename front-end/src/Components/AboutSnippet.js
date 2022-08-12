import React from "react";
import PressShot1 from "../images/PressShots/PressShot1.jpg"

const AboutSnippet = () => {
  
  return (
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    
    {/* Hero Image Is Displayed Here */}
      <img class="object-cover object-center rounded" alt="hero" src={PressShot1}>
      </img>

    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
     
     {/* Hero Title */}
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">A perfect surprise delivered monthly
      </h1>

      {/* Hero Initial Paragraph */}
      <p class="mb-8 leading-relaxed">What treats await in this months Survival Box? Find out what we are all about and some of the brands we work with. It might surprise you what thirst quenchers, snackettes and tech goodies are inside!</p>
      <div class="flex justify-center">

      <a href="#">
        <button class="inline-flex text-white bg-primary border-2 border-primary py-2 px-6 focus:outline-none hover:bg-white hover:border-primary hover:text-primary rounded text-lg">Get your first box</button>
        </a>
        
        <a href="#">
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-2 border-gray-100 hover:border-gray-200 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Our supporters</button>
      </a>
      </div>
    </div>
  </div>
</section>
  );
};
export default AboutSnippet;