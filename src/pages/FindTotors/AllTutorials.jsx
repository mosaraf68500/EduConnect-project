import React from "react";
import TutorialCard from "./TutorialCard";

const AllTutorials = ({ tutorials, setSearch, search, sortPrice, setSortPrice }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight flex-1 text-center md:text-left">
          All Tutorials
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          {/* Search Field */}
          <input
            type="text"
            value={search}
            placeholder="Search tutorials..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-64 px-4 py-3 border border-gray-300 rounded-md shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1EC28E] focus:border-[#1EC28E] transition"
          />

          {/* Sort Dropdown */}
          <select
            value={sortPrice}
            onChange={(e) => setSortPrice(e.target.value)}
            className="w-full sm:w-48 px-4 py-3 border border-gray-300 rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1EC28E] focus:border-[#1EC28E] transition"
          >
            <option value="" disabled>
              Sort by Price
            </option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
      </div>

      {tutorials.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-20">
          ❌ No tutorials found for{" "}
          <span className="font-semibold text-gray-900">{search}</span>
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tutorials.map((tutorial) => (
            <TutorialCard
              tutorial={tutorial}
              key={tutorial._id}
              className="transform hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTutorials;
