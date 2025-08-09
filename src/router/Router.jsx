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
import Details from "../components/Details";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOuts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "header",
        Component: Header,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path:"about",
        Component:About

      },
      {
        path:"contact",
        Component:Contact,
        loader: () => fetch("./districData.json"),

      },
      {
        path: "find-tutors",
        Component: FindToturs,
      },
      {
        path: "add-tutorials",
        element: (
          <PrivateRoutes>
            <AddTutorials></AddTutorials>
          </PrivateRoutes>
        ),
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(
            `https://edu-connect-server-side.vercel.app/tutorials/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <Details></Details>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-tutorials",
        element: (
          <PrivateRoutes>
            <MyTutorials></MyTutorials>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-booked-tutors",
        element: (
          <PrivateRoutes>
            <MyBookedTutors></MyBookedTutors>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
