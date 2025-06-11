import React from "react";
import { BookOpen, Globe, Lightbulb, Star } from "lucide-react";
import thambelImage from "../assets/image/about-thumb1.png";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <div className="">
      <div className="bg-[#f3fefb]">
        {/* Main Hero Section */}
        <div className="w-11/12 mx-auto px-1 sm:px-2 lg:px-2 py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between">
          {/* Left Image */}
          <div className="flex justify-center ">
            <img
              src={thambelImage}
              alt="Students"
              className=" h-auto object-contain " 
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-[#1EC28E] font-semibold text-sm uppercase mb-2">
              About Us
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Who We Are – Introduction to{" "}
              <span className="text-[#1EC28E] ">Educate Online Platform</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
              Educate is the ultimate destination for knowledge seekers and
              educators alike. We are committed to transforming special
              education through global standards.
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-col sm:flex-row sm:gap-6 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Lightbulb className="text-[#1EC28E] " size={20} />
                <span className="text-sm">Innovative Learning System</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="text-[#1EC28E] " size={20} />
                <span className="text-sm">Worldwide Intelligent Learner</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-10 text-[#1EC28E]  font-bold mb-6">
              <div>
                <p className="text-2xl sm:text-3xl">30+</p>
                <p className="text-sm text-gray-700 font-medium">
                  Expert Instructors
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl">6k+</p>
                <p className="text-sm text-gray-700 font-medium">
                  Enrolled Students
                </p>
              </div>
            </div>

            <button className="bg-[#1EC28E]  hover:bg-[#5ca08a]  text-white px-6 py-2 rounded-full transition text-sm sm:text-base">
              More About →
            </button>
          </div>
        </div>

        {/* Feature Bar */}
        <div className="relative overflow-hidden bg-[#1EC28E] text-white mb-4">
          {/* Marquee content */}
          <marquee behavior="" direction="">
            <div className="animate-marquee whitespace-nowrap py-6 flex items-center gap-10 text-sm sm:text-base font-semibold">
              <span className="flex items-center gap-2">
                <Star className="text-white" size={16} /> UNIQUE KNOWLEDGE
              </span>
              <span className="flex items-center gap-2">
                <Star className="text-white" size={16} /> DREAM TODAY
              </span>
              <span className="flex items-center gap-2">
                <Star className="text-white" size={16} /> LEARNING INNOVATION
              </span>
              <span className="flex items-center gap-2">
                <Star className="text-white" size={16} /> WORLDWIDE LEARNERS
              </span>
              <span className="flex items-center gap-2">
                <Star className="text-white" size={16} /> LIFETIME ACCESS
              </span>
              <span className="flex items-center gap-2">
                <Star className="text-white" size={16} /> EXPERT GUIDANCE
              </span>
              <span className="flex items-center gap-2">
                <Star className="text-white" size={16} /> GLOBAL COMMUNITY
              </span>
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default About;
