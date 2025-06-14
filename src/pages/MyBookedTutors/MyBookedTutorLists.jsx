import React, { use } from "react";
import { AuthContex } from "../../Contex/AuthContex";
import Loading from "../../LoadingPage/Loading";
import MyBookedTutorCard from "./MyBookedTutorCard";

const MyBookedTutorLists = ({ MyBookedTutorsPromise }) => {
  const MyBookedTutors = use(MyBookedTutorsPromise);

  return <div className="w-11/12 mx-auto my-10">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {
            MyBookedTutors.map(MyBookedTutor=><MyBookedTutorCard MyBookedTutor={MyBookedTutor} key={MyBookedTutor._id}></MyBookedTutorCard>)
        }
    </div>

  </div>;
};

export default MyBookedTutorLists;
