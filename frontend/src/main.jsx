import React from "react";
import ReactDOM from "react-dom/client";

import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Destination from "./pages/Destination";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/destinations/:id",
    element: <Destination />,
    loader: ({ params }) => {
      return axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/api/destinations/${params.id}`
        )
        .then((response) => response.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/destinations",
    element: <Destination />,
    loader: () => {
      return axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/destinations`)
        .then((response) => response.data)
        .catch((err) => console.error(err));
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// {
//   //use loader DATA pour recupere la dada????

//   path: "/activity/:id",
//   element: <Destination />,
//   loader: ({ params }) => {
//     return axios
//       .get(`${import.meta.env.VITE_BACKEND_URL}/api/activity/${params.id}`)
//       .then((response) => {
//         return response.data;
//       });
//   },
// },
