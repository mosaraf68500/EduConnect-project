import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BangladeshMap from "./BangladeshMap";
import ContactForm from "./ContactForm";

const Contact = () => {
  const serviceCenters = useLoaderData();
 

  return (
    <div>
      <div className="   bg-white rounded-xl shadow-lg">
        <div className="bg-gray-50 py-6 my-4">
          <h1 className="text-xl font-bold text-center ">
            Contact <span className=" text-[#1EC28E]">Us</span>
          </h1>
        </div>

       

        {/* Map with searchText as prop */}
        <BangladeshMap
          serviceCenters={serviceCenters}
         
        />

        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default Contact;
