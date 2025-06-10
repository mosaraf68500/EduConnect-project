import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContex } from "../Contex/AuthContex";
import Lottie from "lottie-react";

import loginLottie from "../assets/lotties/loginLottie.json";
import { GiOpenBook } from "react-icons/gi";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { SingInUser } = useContext(AuthContex);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location=useLocation();

  const handeLoginForm = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    SingInUser(email, password)
      .then((result) => {
         navigate( location?.state|| "/");
        if (result.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login successful!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 ">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-8 justify-center">
        {/* Lottie Animation */}
        <div className="lg:col-span-3 ">
          <div className="z-10 text-gray-800 ">
            <h1 className="text-2xl lg:text-4xl font-bold mb-2">
              Welcome Back!
            </h1>
            <p className="text-sm lg:text-base">
              Sign in to continue your journey and unlock a world of
              opportunities.
            </p>
          </div>
          <div className="z-0 mt-4 ">
            <Lottie
              style={{ width: "100%", maxWidth: "400px" }}
              animationData={loginLottie}
              loop={true}
            />
          </div>
        </div>

        {/* Register Form */}
        <div className="card bg-base-100 w-full shadow-2xl col-span-2">
          <div className="card-body">
            <div className="text-start mb-4">
              <div className="flex justify-center items-center gap-2 mb-2">
                <GiOpenBook size={28} className="text-[#1EC28E]" />
                <Link to="/" className="text-xl text-gray-700 font-bold">
                  EduConnect
                </Link>
              </div>
              <h1 className="text-xl font-bold text-center">Sign Up</h1>
            </div>

            <form onSubmit={handeLoginForm}>
              <fieldset className="space-y-3">
                <div>
                  <label className="label font-semibold">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input w-full border border-[#1EC28E] rounded-lg p-3"
                    placeholder="Email"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="password" className="block">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      required
                      className="w-full px-4 py-3 rounded-md bg-white border border-[#1EC28E]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-3 right-3 text-gray-600"
                    >
                      {showPassword ? <FaEyeSlash size={20} className="text-[#1EC28E]"/> : <FaEye size={20} className="text-[#1EC28E]" />}
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <a className="link link-hover text-sm text-[#1EC28E]">
                    Forgot password?
                  </a>
                </div>
                <button className="btn w-full mt-2 bg-[#1EC28E] hover:bg-[#17aa7a] text-white border-none rounded-lg">
                  Register
                </button>
              </fieldset>
              
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
