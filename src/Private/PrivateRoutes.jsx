import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContex } from "../Contex/AuthContex";
import Loading from "../LoadingPage/Loading";

const PrivateRoutes = ({children}) => {
  const { user, loading } = use(AuthContex);
  const location = useLocation();
  // console.log(user,"loading")

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
