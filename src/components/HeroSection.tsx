import React from "react";
import Image from "next/image";
import heroImage from "../../public/assets/hero.jpg";

const Herosection = () => {
  return (
    <div className="relative w-full h-[300px] bg-blue-500 text-white sm:h-[400px] md:h-[500px] lg:h-[716px]">
      {/* Background Image */}
      <Image
        src={heroImage} // Corrected image path (ensure the image is inside the 'public' folder)
        alt="maingirl"
        height={716}
        width={1440}
        className="w-full h-full object-cover"
        priority // Ensures the image loads quickly
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-4 sm:p-8 lg:p-12">
        <div className="w-11/12 sm:w-3/4 md:w-1/2 text-center sm:text-left">
          <p className="uppercase text-xs sm:text-sm tracking-widest mb-5 sm:mb-7">
            Summer 2020
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold my-4 leading-tight">
            New Collection
          </h1>
          <p className="text-sm sm:text-base lg:text-lg my-4 sm:my-6 leading-relaxed">
            We know how large objects will act, <br />
            but things on a small scale.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-5 rounded-lg transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
