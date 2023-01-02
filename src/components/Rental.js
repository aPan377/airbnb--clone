import React from "react";

import { BsStarFill } from "react-icons/bs";

const Rental = ({ title, image, price }) => {
  return (
    <div>
      <div className="relative">
        <div className="grad absolute rounded-b-[0.9rem] w-full h-full"></div>
        <div className="flex sm:h-[11rem] md:h-[14.5rem]">
          {/* Background */}
          <img
            src={image}
            alt="house"
            className="object-cover rounded-[0.9rem] w-full h-full"
          />
          {/* Title */}
          <div className="absolute bottom-4 left-4 text-[16px] sm:text-[18px] text-slate-300 font-bold flex items-center gap-2">
            {title}
            <span>&#x2022;</span>
            {/* <p className="text-[14px] sm:text-[16px]">${price}</p> */}
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="pt-1 flex justify-between items-start">
        {/* Left */}
        <div className="text-[14px] max-w-[16rem] mt-1">
          <p className="leading-4 text-gray-700 font-semibold">
            This is a rare find. This place is usually fully booked
          </p>
          <p className="mt-1 text-slate-600">Jan 28 - Aug 9</p>
          <p className="font-semibold text-[15px] text-slate-800">${price}</p>
        </div>
        {/* Right */}
        <div className="flex items-center space-x-1 mt-1">
          <BsStarFill />
          <span className="text-[14px]">5.0</span>
        </div>
      </div>
    </div>
  );
};

export default Rental;
