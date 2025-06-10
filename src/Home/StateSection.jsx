import React from 'react';

const StateSection = () => {
    return (
        <div>
            <section className="py-10 bg-[#F0FBF8]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className=" rounded-2xl shadow p-6 bg-white text-gray-800">
            <h3 className="text-2xl font-bold">1,200+</h3>
            <p className="mt-2 text-gray-600 font-semibold">Experienced Tutors</p>
          </div>
          
          <div className="bg-white  rounded-2xl shadow p-6">
            <h3 className="text-2xl font-bold text-gray-800">4,800+</h3>
            <p className="mt-2 text-gray-600 font-semibold">5-Star Tutor Reviews</p>
          </div>
          
          <div className="bg-white  rounded-2xl shadow p-6">
            <h3 className="text-2xl font-bold text-gray-800">35+</h3>
            <p className="mt-2 text-gray-600 font-semibold">Languages</p>
          </div>
          
          <div className="bg-white  rounded-2xl shadow p-6">
            <h3 className="text-2xl font-bold text-gray-800">10,000+</h3>
            <p className="mt-2 text-gray-600 font-semibold">Total Users</p>
          </div>

        </div>
      </div>
    </section>
        </div>
    );
};

export default StateSection;


