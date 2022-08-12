import React from "react";
export const StoreHero = () => {
  return (
      
    <section>
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
      <div class="flex flex-col w-full mb-12 text-center">
       
       {/* Store Hero Title */}
        <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl"> Our Store </h1>
        
        {/* Store Hero Description */}
        <p class="
      max-w-xl
      mx-auto
      mt-8
      text-base
      leading-relaxed
      text-center text-gray-400
    "> Some of our customers favourite products able to be purchased directly form us. </p>
      </div>
    </div>
    </section>
	);
};
export default StoreHero;