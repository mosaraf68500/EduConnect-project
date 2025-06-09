import React, { useState } from "react";
import { FaRegArrowAltCircleRight, FaUserPlus, FaBars } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router";

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800 py-3 px-4 sm:px-8 text-white relative">
      <div className="flex justify-between items-center">
        {/* Desktop Welcome */}
        <div className="hidden sm:flex items-center gap-2 text-sm">
          <IoIosStar className="text-[#1EC28E]" />
          Welcome to <span className="text-[#1EC28E]">EduConnect</span> - Unlocking the Power of Education!
        </div>

        {/* Desktop Login/Register */}
        <div className="hidden sm:flex gap-8">
          <Link to="/login" className="flex items-center gap-2 cursor-pointer">
            <FaRegArrowAltCircleRight size={17} className="text-[#1EC28E]" />
            Login
          </Link>
          <Link to="/register" className="flex items-center gap-2 cursor-pointer">
            <FaUserPlus size={17} className="text-[#1EC28E]" />
            Register
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaBars size={22} className="text-[#1EC28E]" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-12 bg-black w-40 rounded shadow-md z-50">
          <button className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center gap-2">
            <FaRegArrowAltCircleRight size={16} className="text-[#1EC28E]" />
            Login
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center gap-2">
            <FaUserPlus size={16} className="text-[#1EC28E]" />
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default TopNavbar;
