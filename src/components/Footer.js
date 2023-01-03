import React from "react";

import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";

const Footer = () => {
  const icons = [
    <BsTwitter />,
    <BsInstagram />,
    <BsFacebook />,
    <FaSnapchatGhost />,
  ];

  return (
    <div className="bg-white border-t-2 sticky bottom-0 shadow-md shadow-gray-300 h-10 flex gap-6 items-center justify-center">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="text-[20px] text-gray-600 hover:text-[#fa5359] duration-200 cursor-pointer"
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

export default Footer;
