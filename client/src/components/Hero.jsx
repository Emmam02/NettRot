import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141] rounded animate-pulse"></p>
            <p className="font-medium text-sm md:text-base">
              Nye produkter hver uke
            </p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Vårt rot er dine skatter!
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">Kjøp nå</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141] rounded animate-pulse"></p>
          </div>
        </div>
      </div>
      <div className="w-1/2 sm:w-1/2 ">
        <img
          src="/assets/hero_img.png.webp"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
