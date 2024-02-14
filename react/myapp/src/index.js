import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Abouts from "./components/Abouts";
import DashboadContext from "./context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 not found</div>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/abouts/:id",
    element: <Abouts />,
  },
]);

const datax = "prince";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DashboadContext.Provider value={datax}>
      <RouterProvider router={router} />
    </DashboadContext.Provider>
  </React.StrictMode>
);

reportWebVitals();
