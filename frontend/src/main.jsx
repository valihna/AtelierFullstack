import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";
import { FavProvider } from "./Context/Context";
import App from "./App";
import Destinations from "./pages/Destinations";
import Activities from "./pages/Activities";
// import Win from "./pages/Win";
import Favorite from "./components/favorites/Favorite";
import Login from "./pages/Login";
import Registration from "./components/registration/Registration";
import CardCountries from "./components/card/CardCountries";

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
      {
        path: "/activities",
        element: <Activities />,
        loader: async () => {
          try {
            const response = await connexion.get(`/activities`);
            return response.data;
          } catch (err) {
            return console.error(err);
          }
        },
      },
      {
        path: "/activities:id",
        element: <Activities />,
        loader: async ({ params }) => {
          try {
            const response = await connexion.get(`/activities/${params.id}`);
            return response.data;
          } catch (err) {
            return console.error(err);
          }
        },
      },
      {
        path: "/countryCard",
        element: <CardCountries />,
      },
      // {
      //   path: "/win",
      //   element: <Win />,
      // },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <FavProvider>
      <RouterProvider router={router} />
    </FavProvider>
  </React.StrictMode>
);
