import React from "react";

const Filter = ({ title, icon }) => {
  return (
    <div className="text-[13px] sm:text-[15px] text-white bg-[#ff5a60] hover:bg-white hover:text-[#ff5a60] duration-300 ease-out cursor-pointer flex items-center gap-1 py-1 px-3 sm:px-4 rounded-full">
      {icon} {title}
    </div>
  );
};

export default Filter;
