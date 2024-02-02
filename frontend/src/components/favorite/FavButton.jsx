import PropTypes from "prop-types";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import connexion from "../../services/connexion";
import "./FavButton.css";

function FavButton({ countriesId, isFav }) {
  const [fav, setFav] = useState(isFav);
  const postFavorites = async (id) => {
    try {
      await connexion.post("/favorites", { countryId: id });
      setFav(true);
    } catch (err) {
      console.error(err);
    }
  };
  const deleteFavorites = async (id) => {
    try {
      await connexion.delete(`/favorites/${id}`);
      setFav(false);
    } catch (error) {
      console.error("Error remove favorites", error);
    }
  };
  return (
    <div className="container-fav">
      <div>
        <button
          type="button"
          aria-label="add favorites"
          className="button_fav"
          onClick={() =>
            fav ? deleteFavorites(countriesId) : postFavorites(countriesId)
          }
          style={{
            color: fav ? "red" : "#fae7c0",
            fontWeight: fav ? "bold" : "normal",
          }}
        >
          {fav ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      </div>
    </div>
  );
}
FavButton.propTypes = {
  countriesId: PropTypes.string.isRequired,
  isFav: PropTypes.bool.isRequired,
};

export default FavButton;
