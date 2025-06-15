import React, { use } from "react";
import { useLoaderData } from "react-router";
import {
  Mail,
  User,
  Code as Languages,
  DollarSign,
  Star,
  Info,
} from "lucide-react";
import { Link } from "react-router";
import { AuthContex } from "../Contex/AuthContex";
import Swal from "sweetalert2";
import axios from "axios";

const Details = () => {
  const detailsData = useLoaderData();
const { user } = use(AuthContex);

// const userEmail = user.email;
// console.log(userEmail)

const { _id, username, email, image, language, price, description, review } = detailsData;

const handleBookBtnToStoreDB = () => {
  const BookInfo = { bookId:_id, image, language, price, email };
  const BookInfoWithUserEmail = { ...BookInfo, userEmail: user.email };
  axios
      .post("http://localhost:5000/BookTutors", BookInfoWithUserEmail)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your tutor has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong while adding the tutorial!",
        });
      });

    // console.log(tutorialData);

};


  return (
    <div className="text-gray-700 bg-gray-100 shadow-xl rounded-2xl overflow-hidden border border-[#1EC28E] flex flex-col md:flex-row max-w-4xl mx-auto my-10">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 bg-gray-50  border-r md:border-none rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none border-[#1EC28E]">
        <img
          src={image || "https://i.ibb.co/wNh91MG6/muiii.webp"}
          alt={username}
          className="w-full h-full object-cover rounded-2xl p-3"
        />
      </div>

      {/* Right Side: Info */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between space-y-4">
        {/* Username */}
        <h2 className="text-2xl font-semibold  flex items-center gap-2">
          <User className="w-5 h-5 text-[#1EC28E]" /> @{username}
        </h2>

        {/* Language */}
        <p className=" text-sm flex items-center gap-2">
          <Languages className="w-4 h-4 text-[#1EC28E]" />
          <span>
            <span className="font-medium">Language:</span> {language}
          </span>
        </p>

        {/* Email */}
        <div className="flex gap-1 text-sm ">
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#1EC28E]" />
            Email:
          </span>
          <a
            href={`mailto:${email}`}
            className="hover:underline truncate max-w-[60%] text-right"
          >
            {email}
          </a>
        </div>

        {/* Price */}
        <p className=" text-sm flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-[#1EC28E]" />
          <span>
            <span className="font-medium">Price:</span> ${price}
          </span>
        </p>

        {/* Description */}
        <p className="text-sm italic  line-clamp-3">“{description}”</p>

        {/* Review */}
        <div className="flex items-center gap-1 text-xs ">
          <Star className="w-4 h-4 text-[#1EC28E]" />
          Review: {review}
        </div>

        {/* Details Button */}
        <div className="pt-4">
          <button
            onClick={handleBookBtnToStoreDB}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#1EC28E] text-white text-sm font-medium rounded-lg hover:opacity-90 transition"
          >
            <Info className="w-4 h-4" />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
