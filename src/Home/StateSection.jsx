import React from 'react';
import CountUp from 'react-countup';

const StateSection = () => {
  return (
    <section className="py-10 bg-[#F0FBF8]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="rounded-2xl shadow p-6 bg-white text-gray-800">
            <h3 className="text-2xl font-bold">
              <CountUp end={1200} duration={5} separator="," />+
            </h3>
            <p className="mt-2 text-gray-600 font-semibold">Experienced Tutors</p>
          </div>
          
          <div className="rounded-2xl shadow p-6 bg-white text-gray-800">
            <h3 className="text-2xl font-bold">
              <CountUp end={4800} duration={8} separator="," />+
            </h3>
            <p className="mt-2 text-gray-600 font-semibold">5-Star Tutor Reviews</p>
          </div>

          <div className="rounded-2xl shadow p-6 bg-white text-gray-800">
            <h3 className="text-2xl font-bold">
              <CountUp end={35} duration={3} />+
            </h3>
            <p className="mt-2 text-gray-600 font-semibold">Languages</p>
          </div>

          <div className="rounded-2xl shadow p-6 bg-white text-gray-800">
            <h3 className="text-2xl font-bold">
              <CountUp end={10000} duration={8} separator="," />+
            </h3>
            <p className="mt-2 text-gray-600 font-semibold">Total Users</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StateSection;
