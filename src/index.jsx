import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/home/home";
import Error from "./pages/error/error";
import About from "./pages/about/about";
import HousingCard from "./pages/housingCard/housingCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/housingCard/*",
    element: <HousingCard />,
  },
  {
    path: "*",
    element: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);