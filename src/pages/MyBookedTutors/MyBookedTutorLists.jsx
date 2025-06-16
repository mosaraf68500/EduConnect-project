import React, { use } from "react";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";
import MyBookedTutorCard from "./MyBookedTutorCard";

const MyBookedTutorLists = ({ MyBookedTutorsPromise }) => {
  const MyBookedTutors = use(MyBookedTutorsPromise);

  // Color cycle for animated header
  const colorCycle = [
    "#1EC28E",
    "#FF6B6B",
    "#6A82FB",
    "#F9A826",
    "#00B8D4",
    "#8E44AD",
    "#1EC28E",
  ];

  return (
    <div className="w-11/12 max-w-7xl mx-auto my-10 text-center px-2 sm:px-4 md:px-6">
      
      {/* Animated Header */}
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-bold mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [1, 1.2, 1],
          color: colorCycle,
          opacity: 1,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          delay: 0.5,
        }}
      >
        My Booked Tutors
      </motion.h2>

      {/* No Tutors Message */}
      {MyBookedTutors.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-gray-50 rounded-xl p-6 max-w-md mx-auto shadow-md flex flex-col items-center gap-3"
        >
          <XCircle className="w-10 h-10 text-red-500" />
          <p className="text-lg sm:text-xl font-semibold dark:text-gray-600">Oops! No tutors booked yet</p>
          <p className="text-sm text-[#1EC28E]">
            You haven’t booked any tutors at the moment. Once you book, they will appear here.
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          {MyBookedTutors.map((MyBookedTutor) => (
            <MyBookedTutorCard
              MyBookedTutor={MyBookedTutor}
              key={MyBookedTutor._id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookedTutorLists;
