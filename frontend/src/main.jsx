import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";

import App from "./App";
import Destinations from "./pages/Destinations";
import Win from "./pages/Win";
// import Validate from "./pages/Validate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/countries",
        element: <Destinations />,
        loader: () => {
          return connexion
            .get(`/countries`)
            .then((response) => response.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/countries/:id",
        element: <Destinations />,
        loader: ({ params }) => {
          return connexion
            .get(`/countries/${params.id}`)
            .then((response) => response.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/win",
        element: <Win />,
        loader: () => {
          return connexion
            .get(`/win`)
            .then((response) => response.data)
            .catch((err) => console.error(err));
        },
      },
      // {
      //   path: "/validate",
      //   element: <Validate />,
      //   loader: () => {
      //     return connexion
      //       .get(`/validate`)
      //       .then((response) => response.data)
      //       .catch((err) => console.error(err));
      //   },
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
