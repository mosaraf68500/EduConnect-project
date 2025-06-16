import React, { useContext } from "react";
import { GiOpenBook } from "react-icons/gi";
import { Link, NavLink } from "react-router";
import { AuthContex } from "../../Contex/AuthContex";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContex);

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
      <li>
        <NavLink to="/find-tutors">Find tutors</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/add-tutorials">Add Tutorials</NavLink>
          </li>
          <li>
            <NavLink to="/my-tutorials">My Tutorials</NavLink>
          </li>
          <li>
            <NavLink to="/my-booked-tutors">My booked tutors</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm text-gray-900 px-8 bg-gradient-to-r from-[#d1ecdb] to-white w-full">
      {/* Navbar Start */}
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 p-2 shadow dark:text-green-500 w-36"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center gap-2">
          <GiOpenBook size={18} lg:size={28} className="text-[#1EC28E]" />
          <Link to="/" className="text-md lg:text-xl text-gray-700 font-bold ">
            EduConnect
          </Link>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-2 lg:gap-3">
        {/* Theme Toggle Button */}
        <label className="cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            value="dark"
            className="toggle theme-controller bg-white row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <circle cx="10" cy="10" r="4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path d="M21.64 13A9 9 0 1 1 11 2.36 7 7 0 0 0 21.64 13z" />
          </svg>
        </label>

        {/* User & Logout */}
        {user && (
          <>
            <img
              className=" w-8 h-8 lg:w-10 lg:h-10 rounded-full"
              title={user?.displayName}
              src={
                user?.photoURL ||
                "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
              }
              alt="User avatar"
            />
            <button
              onClick={handleSignOut}
              className="px-2 py-[6px] lg:px-4 lg:py-2 cursor-pointer bg-[#1EC28E] text-white text-sm lg:text-lg rounded hover:bg-[#498270e4]"
            >
              SignOut
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
