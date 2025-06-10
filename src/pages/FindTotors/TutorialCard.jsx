import React from "react";
import {
  Mail,
  User,
  Languages,
  Star,
  Info,
  DollarSign,
} from "lucide-react";

const TutorialCard = ({ tutorial }) => {
  const { _id, username, email, image, language, price, review } =
    tutorial;

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 flex flex-col md:flex-row">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 border rounded-2xl border-[#1EC28E]">
        <img
          src={image || "https://via.placeholder.com/400x300?text=No+Image"}
          alt={username}
          className="w-full h-full object-cover rounded-2xl p-3"
        />
      </div>

      {/* Right Side: Info */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
        {/* Username */}
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-2">
          <User className="w-5 h-5 text-[#1EC28E]" /> @{username}
        </h2>

        {/* Language */}
        <p className="text-gray-600 text-sm mb-2 flex items-center gap-2">
          <Languages className="w-4 h-4 text-[#1EC28E]" />
          <span>
            <span className="font-medium">Language:</span> {language}
          </span>
        </p>

        {/* Email */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#1EC28E]" />
            Email:
          </span>
          <a href={`mailto:${email}`} className="hover:underline">
            {email}
          </a>
        </div>

        {/* Price */}
        <p className="text-gray-600 text-sm mb-2 flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-[#1EC28E]" />
          <span>
            <span className="font-medium">Price:</span> {price}
          </span>
        </p>

        {/* Review */}
        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 text-[#1EC28E]" />
            Review: {review}
          </span>
        </div>

        {/* Details Button */}
        <div className="mt-6 w-full">
          <button
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#1EC28E] text-white text-sm font-medium rounded-lg hover:opacity-90 transition"
            onClick={() => alert(`Showing details for ${username}`)}
          >
            <Info className="w-4 h-4 text-white" />
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
