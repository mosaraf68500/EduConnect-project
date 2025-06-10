import React, { use } from "react";
import TutorialCard from "./TutorialCard";

const AllTutorials = ({ TutorialsPromise }) => {
  const tutorials = use(TutorialsPromise);

  return (
    <div>
      <div className="pb-6 max-w-xl mx-auto">
       
        <h1 className="text-3xl font-bold mb-4 text-center">All Tutorials</h1>

        {/* Search Field */}
        <input
          type="text"
          placeholder="Search tutorials..."
        //   value={searchTerm}
        //   onChange={handleSearchChange}
          className="w-full p-3 border border-[#1EC28E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1EC28E]"
        />
      </div>
      ;
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {tutorials.map((tutorial) => (
          <TutorialCard tutorial={tutorial} key={tutorial._id}></TutorialCard>
        ))}
      </div>
    </div>
  );
};

export default AllTutorials;
