import { createContext, useContext, useEffect, useMemo, useState } from "react";

const FavContext = createContext();

export const useFavContext = () => useContext(FavContext);

export function FavProvider({ children }) {
  const initialFavorites = localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [];

  const [favorites, setFavorites] = useState(initialFavorites);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const manageFavorites = (countriesId) => {
    if (favorites.includes(countriesId)) {
      setFavorites(favorites.filter((id) => id !== countriesId));
    } else {
      setFavorites([...favorites, countriesId]);
    }
  };
  const memoValue = useMemo(
    () => ({ favorites, manageFavorites }),
    [favorites]
  );

  return (
    <FavContext.Provider value={memoValue}>{children}</FavContext.Provider>
  );
}

//   return (
//     <FavContext.Provider value={{ favorites, manageFavorites }}>
//       {children}
//     </FavContext.Provider>
//   );
// }
