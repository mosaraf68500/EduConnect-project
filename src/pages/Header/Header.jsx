import React from "react";
import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className=" text-white ">
      <div className="lg:block sm:hidden">
        <TopNavbar></TopNavbar>
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
