import React from "react";
import { FaGraduationCap, FaUsers, FaHandHoldingUsd } from "react-icons/fa";

const featuresData = [
  {
    icon: <FaGraduationCap size={40} className="text-green-500" />,
    title: "Learning Experiences",
    description: "The ultimate destination for knowledge for\nWe are committed to transforming",
    bgColor: "bg-green-50",
  },
  {
    icon: <FaUsers size={40} className="text-orange-400" />,
    title: "Professional Instructor",
    description: "The ultimate destination for knowledge for\nWe are committed to transforming",
    bgColor: "bg-orange-50",
  },
  {
    icon: <FaHandHoldingUsd size={40} className="text-blue-400" />,
    title: "Moneyback Guarantee",
    description: "The ultimate destination for knowledge for\nWe are committed to transforming",
    bgColor: "bg-blue-50",
  },
];

const Features = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      {/* Header and Title Row */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left: Header */}
        <div className="flex-1 border-b-1 border-[#1EC28E] pb-2 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500"></div>
          <span className="uppercase font-semibold text-sm tracking-wide">Core Features</span>
        </div>

        {/* Right: Title */}
        <div className="flex-1">
          <h1 className="text-xl md:text-3xl font-bold text-right leading-snug">
            Interactive Online Learning <br className="hidden md:block" />
            Key Features & Benefits
          </h1>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 ${feature.bgColor} shadow-sm hover:shadow-md transition`}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg dark:text-gray-800 font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 whitespace-pre-line">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
