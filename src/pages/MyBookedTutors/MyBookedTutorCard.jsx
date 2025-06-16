import React, { useState } from "react";
import axios from "axios";
import { Languages, Mail, DollarSign, Info } from "lucide-react";
import Swal from "sweetalert2";

const MyBookedTutorCard = ({ MyBookedTutor }) => {
  const { _id, image, language, price, email, review = 0 } = MyBookedTutor;

  // Local state to track review count
  const [reviewCount, setReviewCount] = useState(review);

  const handleQuickReviewSubmit = async (id) => {
    try {
      const { data } = await axios.patch(
        `https://edu-connect-server-side.vercel.app/BookTutors/${id}`
      );
      if (data.modifiedCount > 0) {
        setReviewCount((prev) => prev + 1); // update review in UI
        Swal.fire("Success!", "Review count increased by 1", "success");
      } else {
        Swal.fire("Oops!", "Failed to update review", "error");
      }
    } catch (error) {
      console.error("Review error:", error);
      Swal.fire("Error!", "Something went wrong", "error");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 flex flex-col md:flex-row">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 border rounded-2xl border-[#1EC28E]">
        <img
          src={image || "https://i.ibb.co/wNh91MG6/muiii.webp"}
          alt="user image"
          className="w-full h-full object-cover rounded-2xl p-3"
        />
      </div>

      {/* Right Side: Info */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
        <p className="text-gray-600 text-sm mb-2 flex items-center gap-2">
          <Languages className="w-4 h-4 text-[#1EC28E]" />
          <span>
            <span className="font-medium">Language:</span> {language}
          </span>
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#1EC28E]" />
            Email:
          </span>
          <a href={`mailto:${email}`} className="hover:underline">
            {email}
          </a>
        </div>

        <p className="text-gray-600 text-sm mb-2 flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-[#1EC28E]" />
          <span>
            <span className="font-medium">Price:</span> ${price}
          </span>
        </p>

        <p className="text-gray-700 text-sm mt-2  text-start">
          <span className="font-medium">Total Reviews:</span> {reviewCount}
        </p>

        <div className="mt-6 w-full">
          <button
            onClick={() => handleQuickReviewSubmit(_id)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#1EC28E] text-white text-sm font-medium rounded-lg hover:opacity-90 transition"
          >
            <Info className="w-4 h-4 text-white" />
            Add Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyBookedTutorCard;
