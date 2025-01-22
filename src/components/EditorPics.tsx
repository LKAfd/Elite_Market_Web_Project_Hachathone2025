import React from "react";
import Image from "next/image";
import menImage from "../../public/assets/filter.png";
import womenImage from "../../public/assets/filter-0.jpg";
import acceImage from "../../public/assets/filter-1.png";
import kidImage from "../../public/assets/filter-2.png";

const EditorsPick = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
      <h2 className="text-center text-xl font-bold mb-2">EDITORS PICK</h2>
      <p className="text-center text-gray-500 mb-8">
        Problems trying to resolve the conflict between
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Full column for Men image */}
        <div className="relative group">
          <Image
            src={menImage}
            alt="Men"
            className="w-[510px] h-[500px] mx-auto rounded-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">MEN</span>
          </div>
        </div>

        {/* Middle column */}
        <div className="relative group">
          <Image
            src={womenImage}
            alt="Women"
            className="w-[240px] h-[500px] bg-cover mx-auto rounded-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">WOMEN</span>
          </div>
        </div>

        {/* Right column with stacked Accessories and Kids images */}
        <div className="flex flex-col gap-4">
          <div className="relative group">
            <Image
              src={acceImage}
              alt="Accessories"
              className="w-[240px] h-[242px] mx-auto rounded-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">ACCESSORIES</span>
            </div>
          </div>
          <div className="relative group">
            <Image
              src={kidImage}
              alt="Kids"
              className="w-[240px] h-[242px] mx-auto rounded-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">KIDS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
