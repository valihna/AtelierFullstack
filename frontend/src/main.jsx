import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";

import App from "./App";
import Destinations from "./pages/Destinations";
import Win from "./pages/Win";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/countries",
        element: <Destinations />,
        loader: async () => {
          try {
            const response = await connexion.get(`/countries`);
            return response.data;
          } catch (err) {
            return console.error(err);
          }
        },
      },
      {
        path: "/countries/:id",
        element: <Destinations />,
        loader: async ({ params }) => {
          try {
            const response = await connexion.get(`/countries/${params.id}`);
            return response.data;
          } catch (err) {
            return console.error(err);
          }
        },
      },
      // {
      //   path: "/activities",
      //   element: <Activities />,
      // },
      {
        path: "/win",
        element: <Win />,
        loader: async () => {
          try {
            const response = await connexion.get(`/win`);
            return response.data;
          } catch (err) {
            return console.error(err);
          }
        },
      },
      // {
      //   path: "/login",
      //   element: <Login />,
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
