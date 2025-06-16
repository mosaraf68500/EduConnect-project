import React from "react";
import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-500">
      <div className="">
        <TopNavbar />
      </div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
