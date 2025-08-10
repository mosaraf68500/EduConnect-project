import React from "react";
import { User, Languages, Star, Info, DollarSign } from "lucide-react";
import { Link } from "react-router";

const TutorialCard = ({ tutorial }) => {
  const { _id, username, image, language, price, review } = tutorial;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-200 flex flex-col">
      
      {/* Image on Top */}
      <div className="w-full bg-gray-100 flex items-center justify-center max-h-64 overflow-hidden">
  <img
    src={image || "https://i.ibb.co/wNh91MG6/muiii.webp"}
    alt={username}
    className="w-full object-contain"
  />
</div>


      {/* Text & Button below */}
      <div className="p-4 flex flex-col gap-2 flex-grow">
        
        {/* Username */}
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <User className="w-4 h-4 text-[#1EC28E]" /> @{username}
        </h2>

        {/* Language */}
        <p className="text-gray-600 text-sm flex items-center gap-2">
          <Languages className="w-4 h-4 text-[#1EC28E]" />
          <span><span className="font-medium">Language:</span> {language}</span>
        </p>

        {/* Price */}
        <p className="text-gray-600 text-sm flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-[#1EC28E]" />
          <span><span className="font-medium">Price:</span> {price}</span>
        </p>

        {/* Review */}
        <p className="text-gray-500 text-sm flex items-center gap-2">
          <Star className="w-4 h-4 text-[#1EC28E]" /> Review: {review}
        </p>

        {/* Details Button */}
        <Link
          to={`/details/${_id}`} 
          className="mt-auto w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#1EC28E] text-white text-sm font-medium rounded-md hover:opacity-90 transition"
        >
          <Info className="w-4 h-4 text-white" />
          Details
        </Link>
      </div>
    </div>
  );
};

export default TutorialCard;
