import { createBrowserRouter } from "react-router";
import RootLayOuts from "../layouts/RootLayOuts";
import Home from "../Home/Home";
import Header from "../pages/Header/Header";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
import Error from "../../Error(404)/Error";
import FindToturs from "../pages/FindTotors/FindToturs";
import AddTutorials from "../pages/AddTutorials/AddTutorials";
import MyTutorials from "../pages/MyTutorials/MyTutorials";
import MyBookedTutors from "../pages/MyBookedTutors/MyBookedTutors";
import PrivateRoutes from "../Private/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOuts,
    children: [
      {
        index: true, 
        Component: Home
      },
      {
        path: "header", 
        Component: Header
      },
      {
        path:'register',
        Component:Register
      },
      {
        path:'login',
        Component:Login
      },
      {
        path:'find-tutors',
        Component:FindToturs
      },
      {
        path:'add-tutorials',
        element:<PrivateRoutes><AddTutorials></AddTutorials></PrivateRoutes>
      },
      {
        path:'my-tutorials',
        element:<PrivateRoutes><MyTutorials></MyTutorials></PrivateRoutes>
      },
      {
        path:'my-booked-tutors',
        element:<PrivateRoutes><MyBookedTutors></MyBookedTutors></PrivateRoutes>
      },
    ]
  },
{
    path:"*",
    Component:Error
}
]);
