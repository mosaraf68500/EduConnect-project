import React from "react";
import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className=" text-white ">
      <div className="lg:block sm:hidden">
        <TopNavbar></TopNavbar>
      </div>
     <div className="sticky top-0 z-50">
         <Navbar></Navbar>
     </div>
    </div>
  );
};

export default Header;
