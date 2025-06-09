import React, { use } from "react";
import { GiOpenBook } from "react-icons/gi";
import { Link, NavLink } from "react-router";
import { AuthContex } from "../../Contex/AuthContex";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContex);

  // Sign out handler
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Sign out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      {/* {user && (
        <>
          <li>
            <NavLink to="/addjob">Add Job</NavLink>
          </li>
          <li>
            <NavLink to="/myPostedJobs">My Posted Jobs</NavLink>
          </li>
        </>
      )} */}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm text-gray-900 px-8">
      {/* Navbar Start (Mobile Menu + Logo) */}
      <div className="navbar-start">
        {/* Dropdown for Mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center gap-2">
          <GiOpenBook size={28} className="text-[#1EC28E]" />

          <Link to="/" className=" text-xl text-gray-700 font-bold">
            EduConnect
          </Link>
        </div>
      </div>

      {/* Navbar Center (For Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End (Auth Buttons) */}
      <div className="navbar-end gap-3">
        {user && (
            <>
              <img
                className="w-10 h-10 rounded-full"
                title={user?.displayName}
                src={
                  user?.photoURL ||
                  "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                }
                alt="User avatar"
              />
              <button
                onClick={handleSignOut}
                className="px-4 py-2 cursor-pointer bg-[#1EC28E] text-white rounded hover:bg-[#498270e4]"
              >
                SignOut
              </button>
            </>
          ) }
        </div>
      </div>
    
  );
};

export default Navbar;
