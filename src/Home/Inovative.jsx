import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, BarChart, Video, FileText } from "lucide-react";
import stnd1 from "../assets/image/s1.png";
import stnd2 from "../assets/image/s2.png";
import stnd3 from "../assets/image/s3.png";

const Inovative = () => {
  return (
    <div className="w-11/12 mx-auto pb-20">
      {/* Header and Title Row */}
      <div className="flex flex-col md:flex-row gap-4 py-8">
        {/* Left: Header */}
        <div className="flex-1 border-b-1 border-[#1EC28E] pb-2 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500"></div>
          <span className="uppercase font-semibold text-sm tracking-wide dark:text-gray-600">
            WHY CHOOSE US?
          </span>
        </div>

        {/* Right: Title */}
        <div className="flex-1">
          <h1 className="text-xl dark:text-gray-600 md:text-3xl font-bold text-right leading-snug">
            Innovative and effective <br className="hidden md:block" />
            learning approaches
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-8 py-12 grid md:grid-cols-2 items-center gap-8 rounded-xl">
        {/* Text Content */}
        <div>
          <p className="text-gray-600 mb-6">
            Educate the ultimate destination for knowledge seekers and educators
            alike. We are committed to transforming special education impact
            global channels without standards compliant systems
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-100 text-green-800 py-2 px-4 rounded-lg text-sm flex items-center gap-2">
              <CheckCircle size={16} /> Course Management
            </div>
            <div className="bg-orange-100 text-orange-800 py-2 px-4 rounded-lg text-sm flex items-center gap-2">
              <BarChart size={16} /> Students Progress Tracking
            </div>
            <div className="bg-purple-100 text-purple-800 py-2 px-4 rounded-lg text-sm flex items-center gap-2">
              <Video size={16} /> Interactive Live Class
            </div>
            <div className="bg-blue-100 text-blue-800 py-2 px-4 rounded-lg text-sm flex items-center gap-2">
              <FileText size={16} /> Quiz and Assignments
            </div>
          </div>

          {/* Support Text */}
          <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
            <CheckCircle className="text-green-500" size={16} />
            24/7 Hrs Ready to our support team
          </p>

          {/* Get Started Button */}
          <button className="bg-[#1EC28E] cursor-pointer hover:bg-[#6cc3a7] text-white px-6 py-2 rounded-full text-sm font-semibold shadow">
            GET STARTED →
          </button>
        </div>

        {/* Image Section */}
        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          <div className="flex gap-4 relative">
            {/* Student 1 */}
            <motion.img
              src={stnd1}
              alt="Student 1"
              className="w-44 h-44 rounded-full object-cover border-4 border-orange-400"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Student 2 */}
            <motion.img
              src={stnd2}
              alt="Student 2"
              className="absolute top-16 left-24 w-44 h-44 rounded-full object-cover border-4 border-green-400"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Student 3 */}
            <motion.img
              src={stnd3}
              alt="Student 3"
              className="absolute top-30 left-0 w-44 h-44 rounded-full object-cover border-4 border-blue-400"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Experience Badge */}
          <motion.div
            className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#1EC28E] px-4 py-2 rounded-lg shadow flex items-center gap-2 z-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-white text-xl font-bold">26+</span>
            <span className="text-sm text-white font-semibold">Years of Experiences</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Inovative;
