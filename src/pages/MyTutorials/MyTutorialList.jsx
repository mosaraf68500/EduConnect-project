import React, { useState, use } from 'react';
import TutorialsRow from './TutorialsRow';
import { motion } from "framer-motion";

const MyTutorialList = ({ MyTutorialsPromise }) => {
  const tutorials = use(MyTutorialsPromise);
  const [allTutorial, setallTutorial] = useState(tutorials); // ✅ FIXED

  return (
    <div className="w-11/12 mx-auto text-center">
      <motion.h3
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-center py-4"
        animate={{
          scale: [1, 1.2, 1],
          color: ["#ff0000", "#00ff00", "#0000ff", "#000000"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          times: [0, 0.5, 1],
        }}
      >
        List of all tutorials you've created or saved
      </motion.h3>

      <div className="overflow-x-auto shadow border border-[#1EC28E]">
        <table className="table-auto w-full text-sm md:text-base text-center">
          <thead className="bg-gray-100 text-gray-700">
            <tr className="text-xs sm:text-sm md:text-base">
              {["#", "Image", "Language", "Price", "Description", "Review", "Actions"].map((heading) => (
                <th
                  key={heading}
                  className="px-2 sm:px-4 py-2 border border-[#1EC28E] whitespace-nowrap"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allTutorial.map((tutorial, index) => (
              <TutorialsRow
                key={tutorial._id}
                index={index}
                tutorial={tutorial}
                setallTutorial={setallTutorial} // ✅ PASSED CORRECTLY
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTutorialList;
