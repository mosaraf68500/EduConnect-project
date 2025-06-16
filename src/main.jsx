import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/Router.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./Contex/AuthProvider.jsx";
// import { ThemeProvider } from "./ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {/* <ThemeProvider> */}
        <RouterProvider router={router} />
      {/* </ThemeProvider> */}
    </AuthProvider>
  </StrictMode>
);
