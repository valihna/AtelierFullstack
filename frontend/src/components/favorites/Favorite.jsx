import React from "react";
import { useFavContext } from "../../Context/Context";
// import connexion from "../../services/connexion";

function Favorite() {
  const { favorites } = useFavContext();
  // const [favoriteCountries, setFavoriteCountries] = useState([]);

  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     try {
  //       const response = await connexion.get("/countries");
  //       const countries = response.data;
  //       // Filtrer les pays favoris en fonction de leurs identifiants
  //       const filteredCountries = countries.filter((country) =>
  //         favorites.includes(country.country_id)
  //       );
  //       setFavoriteCountries(filteredCountries);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchCountries();
  // }, [favorites]);

  return (
    <div>
      <h3>My favorites</h3>
      <div>
        {favorites.map((country) => (
          <li key={country.country_id}>{country.country}</li>
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
//   return (
//     <div>
//       <h3>My favorites</h3>
//       <div>
//         {favorites.map((countryId) => (
//           <li key={countryId}>{countryId}{country.country}</li>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Favorite;
