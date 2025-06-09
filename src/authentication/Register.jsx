import React, { use } from "react";
import rigistetionLottie from "../assets/lotties/registerLottie.json";
import Lottie from "lottie-react";
import { GiOpenBook } from "react-icons/gi";
import { Link } from "react-router";
import { AuthContex } from "../Contex/AuthContex";

const Register = () => {
    const {name}=use(AuthContex)
    
    const handeRegistetionForm = (e) => {
      e.preventDefault();
      const form = e.target;
      const name=form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const photo=form.photo.value;
      console.log(name,email, password,photo);
  //     // create use with email and password
  //     // createUser(email, password)
  //     //   .then((result) => {
  //     //     console.log(result.user);
  //     //   })
  //     //   .catch((error) => {
  //     //     console.log(error);
  //     //   });
    };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 ">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-8  justify-center">
        {/* Lottie Animation with Text on Top */}
        <div className="lg:col-span-3 ">
          {/* Text Div on Top */}
          <div className="z-10 text-gray-800 ">
            <h1 className="text-2xl lg:text-4xl font-bold mb-2">
              Join Us Today!
            </h1>
            <p className="text-sm lg:text-base">
              Create your account and step into a world filled with endless
              possibilities.
            </p>
          </div>

          {/* Lottie Animation */}
          <div className="z-0  mt-10">
            <Lottie
              style={{ width: "100%", maxWidth: "300px" }}
              animationData={rigistetionLottie}
              loop={true}
            />
          </div>
        </div>

        {/* Register Form (1 part of grid) */}
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

            {/* <SocialLogin></SocialLogin> */}
            <form className="" onSubmit={handeRegistetionForm}>
              <fieldset className="space-y-3">
                {/* Name */}
                <div>
                  <label className="label font-semibold">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="input w-full border border-[#1EC28E] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1EC28E]"
                    placeholder="Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="label font-semibold">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input w-full border border-[#1EC28E] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1EC28E]"
                    placeholder="Email"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="label font-semibold">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input w-full border border-[#1EC28E] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1EC28E]"
                    placeholder="Password"
                  />
                </div>

                {/* Photo URL */}
                <div>
                  <label className="label font-semibold">Photo URL</label>
                  <input
                    name="photo"
                    type="text"
                    className="input w-full border border-[#1EC28E] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1EC28E]"
                    placeholder="Photo URL"
                  />
                </div>

                {/* Forgot Password */}
                <div className="text-right">
                  <a className="link link-hover text-sm text-[#1EC28E]">
                    Forgot password?
                  </a>
                </div>

                {/* Register Button */}
                <button className="btn w-full mt-2 bg-[#1EC28E] hover:bg-[#17aa7a] text-white border-none rounded-lg">
                  Register
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
