import { React, useEffect, useState } from "react";
import connexion from "../../services/connexion";
import CountryCard from "../country/CountryCard";

function Favorite() {
  const [favories, setFavories] = useState([]);
  const getFavorites = async () => {
    try {
      const favoritesUser = await connexion
        .get("/favorites")
        .then((res) => res.data);
      setFavories(favoritesUser);
    } catch (error) {
      console.error("Error fetch favorites", error);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="contain-favorite">
      <h2>My Favorites</h2>
      <div className="favori">
        {favories.map((favori) => (
          <CountryCard key={favori.id} count={favori} />
        ))}
      </div>
    </div>
  );
}

export default Favorite;

// import React from "react";
// import { useFavContext } from "../../Context/Context";

// function Favorite() {
//   const { favorites } = useFavContext();
//   console.log(favorites);
//   return (
//     <div>
//       <h3>My favorites</h3>
//       <div>
//         {favorites.map((countryId) => (
//           <li key={countryId}>{countryId}</li>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Favorite;
