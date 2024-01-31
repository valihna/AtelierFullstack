import React from "react";
import { useFavContext } from "../../Context/Context";

function Favorite() {
  const { favorites } = useFavContext();
  return (
    <div>
      <h3>My favorites</h3>
      <div>
        {favorites.map((countryId) => (
          <li key={countryId}>{countryId}</li>
        ))}
      </div>
    </div>
  );
}

export default Favorite;
