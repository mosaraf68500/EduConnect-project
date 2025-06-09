import { createBrowserRouter } from "react-router";
import RootLayOuts from "../layouts/RootLayOuts";
import Home from "../Home/Home";
import Header from "../pages/Header/Header";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
import Error from "../../Error(404)/Error";

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
      }
    ]
  },
{
    path:"*",
    Component:Error
}
]);
