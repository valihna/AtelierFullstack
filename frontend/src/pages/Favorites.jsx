import { Outlet, useLoaderData } from "react-router-dom";
import Favorite from "../components/favorite/Favorite";
import FavButton from "../components/favorite/FavButton";

function Favorites() {
  const favorites = useLoaderData();
  return (
    <div className="contain-favorite">
      <h2>Favorite</h2>
      <Outlet />
      <FavButton />
      <Favorite countries={favorites} />
    </div>
  );
}

export default Favorites;
