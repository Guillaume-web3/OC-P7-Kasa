import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "./layout.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import HousingCard from "./pages/HousingCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/About",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "/Card",
    element: <HousingCard />,
    errorElement: <Error />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);