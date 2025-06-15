import React, { useState, use } from 'react';
import TutorialsRow from './TutorialsRow';
import { motion } from "framer-motion";

const MyTutorialList = ({ MyTutorialsPromise }) => {
  const tutorials = use(MyTutorialsPromise);
  const [allTutorial, setallTutorial] = useState(tutorials); 

  return (
    <div className="w-11/12 mx-auto text-center">
      <motion.h3
        className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold mb-6 text-center py-4"
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

     {allTutorial.length === 0 ? (
  <p className="text-center text-lg text-red-500 ">
    No tutorials available. Please add some.
  </p>
) : (
  <div className="overflow-x-auto">
    <table className="table table-zebra w-full border border-[#1EC28E]">
      <thead>
        <tr className="bg-[#1EC28E] text-white  text-xs sm:text-sm md:text-base text-center">
          <th className='border border-white'>#</th>
          <th className='border border-white'>Image</th>
          <th className='border border-white'>Language</th>
          <th className='border border-white'>Price</th>
          <th className='border border-white'>Description</th>
          <th className='border border-white'>Review</th>
          <th className='border border-white'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {allTutorial.map((tutorial, index) => (
          <TutorialsRow
            key={tutorial._id}
            tutorial={tutorial}
            index={index}
            setallTutorial={setallTutorial}
          />
        ))}
      </tbody>
    </table>
  </div>
)}

    </div>
  );
};

export default MyTutorialList;
