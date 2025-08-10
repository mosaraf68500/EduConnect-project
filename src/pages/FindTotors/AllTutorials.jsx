import React from "react";
import TutorialCard from "./TutorialCard";

const AllTutorials = ({ tutorials, setSearch, search }) => {
  return (
    <div>
      <div className="pb-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center dark:text-gray-800">All Tutorials</h1>

        {/* Search Field */}
        <input
          type="text"
          value={search}
          placeholder="Search tutorials..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border dark:text-gray-600 border-[#1EC28E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1EC28E]"
        />
      </div>

      {tutorials.length === 0 ? (
        <p className="text-center text-gray-600 text-lg mt-10">
          ❌ No tutorials found for "<span className="font-semibold">{search}</span>"
        </p>
      ) : (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tutorials.map((tutorial) => (
            <TutorialCard tutorial={tutorial} key={tutorial._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTutorials;
