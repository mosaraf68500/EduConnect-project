import React from "react";
import Header from "../pages/Header/Header";
import Banner from "./Banner/Banner";
import StateSection from "./StateSection";
import LanguageCategories from "./LanguageCategories";
import Feauters from "../components/Feauters";
import About from "../components/About";

const Home = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#d1ecdb] to-white">
        <Banner></Banner>
        {/* ratting */}
        <section className="bg-gradient-to-r from-[#D9FBF1] to-blue-50 ">
          <div class="flex items-center space-x-4 py-10 mx-18">
            <div class="flex items-center justify-center w-12 h-12 bg-black rounded-full">
              <div class="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              1k+
            </div>
            <div>
              <div class="flex items-center space-x-1">
                <span class="text-orange-400 text-2xl">★★★★★</span>
                <span class="text-gray-700 text-sm font-medium">
                  (4.7 Ratings)
                </span>
              </div>
              <p class="text-gray-600 text-sm">
                Students learn daily with <br />
                educate platform
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* state section */}
      <section className=" my-10">
        <StateSection></StateSection>
      </section>

      {/* language categories */}
      <section className="w-11/12 mx-auto">
        <LanguageCategories></LanguageCategories>
      </section>

      {/* features section */}
      <section>
        <Feauters></Feauters>
      </section>

      {/* about section */}
      <section>
        <About></About>
      </section>
    </div>
  );
};

export default Home;
