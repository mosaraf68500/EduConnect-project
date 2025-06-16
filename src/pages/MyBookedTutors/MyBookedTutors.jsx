import React, { Suspense, use } from "react";
import { AuthContex } from "../../Contex/AuthContex";
import Loading from "../../LoadingPage/Loading";
import MyBookedTutorLists from "./MyBookedTutorLists";
import { MyBookedTutorsPromise } from "../../../api/MyBookedTutorsApi";
import { Helmet } from "react-helmet";

const MyBookedTutors = () => {
  const { user } = use(AuthContex);
  return (
    <div>
      <Helmet>
        <title>My Booked Tutors</title>
      </Helmet>
      {/* <h1>my booked tutors</h1> */}
      <Suspense fallback={<Loading></Loading>}>
        <MyBookedTutorLists
          MyBookedTutorsPromise={MyBookedTutorsPromise(
            user.email,
            user.accessToken
          )}
        ></MyBookedTutorLists>
      </Suspense>
    </div>
  );
};

export default MyBookedTutors;
