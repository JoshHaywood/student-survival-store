import React from "react";
import Image1 from "../images/Mockups/ssboxmockup2.png"
const AboutSnippet = () => {

  return (

<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-12 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
       
       {/* Hero Title */}
        <h2 class="text-sm title-font text-gray-500 tracking-widest">STUDENT SURVIVAL BOX</h2>
      
      {/* Hero Description */}
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">The Essentials Subscription</h1>
        <div class="flex mb-4">
          
          {/* Call To Action */}
          <a class="flex-grow text-primary border-b-2 border-primary py-2 text-lg px-1">What you might find inside</a>

        </div>
      
      {/* Product Description */}
        <p class="leading-relaxed mb-4">Our student survival box is a hand-picked and packed, unique collection of products recommended and wanted by you. from drinks to snacks, tech and party games our survival box is for everyone!</p>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Number of products</span>
          <span class="ml-auto text-gray-900">5-8</span>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Interval</span>
          <span class="ml-auto text-gray-900">Monthly</span>
        </div>
        <div class="flex border-t border-b mb-6 border-gray-200 py-2">
          <span class="text-gray-500">Shipping</span>
          <span class="ml-auto text-gray-900">Next day delivery</span>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">£25</span>
          <button class="flex ml-auto text-white bg-primary border-2 py-2 px-6 border-primary hover:border-primary hover:text-primary focus:outline-none hover:bg-white rounded">Subscribe</button>
          <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={Image1}>
    </img>
    </div>
  </div>
</section>
  );
};
export default AboutSnippet;