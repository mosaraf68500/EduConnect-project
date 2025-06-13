import React from "react";
import { useNavigate } from "react-router";
import {
  BookOpen,
  Languages,
  Landmark,
  Library,
  Globe,
  School,
  Building2,
  Mountain,
  ArrowRight,
} from "lucide-react";

const categories = [
  { title: "English tutors", icon: BookOpen, bgColor: "bg-red-50" },
  { title: "Spanish tutors", icon: Languages, bgColor: "bg-yellow-50" },
  { title: "French tutors", icon: Landmark, bgColor: "bg-blue-50" },
  { title: "German tutors", icon: Library, bgColor: "bg-green-50" },
  { title: "Italian tutors", icon: Building2, bgColor: "bg-pink-50" },
  { title: "Chinese tutors", icon: Globe, bgColor: "bg-purple-50" },
  { title: "Arabic tutors", icon: School, bgColor: "bg-indigo-50" },
  { title: "Japanese tutors", icon: Mountain, bgColor: "bg-teal-50" },
  { title: "Portuguese tutors", icon: Landmark, bgColor: "bg-orange-50" },
];

const LanguageCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="mb-16 rounded-2xl shadow-xl p-6">
      <p className="text-sm text-[#1EC28E] text-center">TOP CATEGORIES</p>
      <h2 className="text-3xl font-bold text-center text-gray-600 mb-10">
        Educate Trending <span className="text-[#1EC28E]">Courses</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
        {categories.map(({ title, icon: Icon, bgColor }, index) => (
          <div
            key={index}
            onClick={() =>
              navigate("/find-tutors", {
                state: { searchText: title.split(" ")[0] },
              })
            }
            className={`relative overflow-hidden group rounded-xl p-6 flex flex-col items-center justify-between text-center cursor-pointer shadow-sm hover:shadow-md transition duration-300 ${bgColor}`}
          >
            {/* Overlay with 1EC28E color, slide down on hover */}
            <div className="absolute inset-0 bg-[#1EC28E] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-between h-full">
              <Icon className="w-6 h-6 mb-4 text-current transition-colors duration-300 group-hover:text-white" />
              <h3 className="text-sm font-bold transition-colors duration-300 group-hover:text-white">
                {title.split(" ")[0].toUpperCase()}
              </h3>
              <p className="text-xs mb-4 transition-colors duration-300 group-hover:text-white">
                {title.split(" ")[1]?.toUpperCase() || "CATEGORY"}
              </p>
              <button className="w-8 h-8 rounded-full bg-white text-[#1EC28E] border border-[#1EC28E] flex items-center justify-center hover:bg-[#1EC28E] hover:text-white transition">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguageCategories;
