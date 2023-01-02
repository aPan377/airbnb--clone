import React from "react";
import logo from "../assets/logo.png";
import { BiWorld, BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="border-b sticky top-0 bg-white/90 z-10">
      <div className="flex justify-between items-center h-20 sm:mx-6 md:mx-10 lg:mx-12">
        {/* Left */}
        <div className="h-6 pl-3">
          <img src={logo} alt="logo" className="object-cover h-full w-full" />
        </div>
        {/* Middle */}
        <div className="hidden lg:flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full">
          <input
            type="search"
            disabled
            placeholder=""
            className="py-2.5 w-[20rem] rounded-full"
          />
          <div className="flex justify-between w-full pr-16 pl-4 font-semibold text-gray-600 absolute">
            <button className="w-full">Place</button>
            <button className="w-full border-x-2">Time</button>
            <button className="w-full pl-4 text-gray-600/60">Group Size</button>
          </div>
          <div className="bg-[#ff5a60] p-2 rounded-full mr-2">
            <FiSearch className="text-white" />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center pr-3 font-semibold text-gray-600">
          <p className="hidden sm:inline text-[15px] sm:text-[17px]">
            Rent House
          </p>
          <div className="flex items-center mx-4 sm:mx-8 gap-1">
            <BiWorld className="text-[18px]" />
            <div className="text-[13px]">EN</div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#ff5a60] text-white font-bold shadow-lg shadow-gray-300 hover:bg-[#fc767a] duration-300 ease-out cursor-pointer">
            <p>Sign in</p>
            <BiUser className="text-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
