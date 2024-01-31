import PropTypes from "prop-types";
import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useFavContext } from "../../Context/Context";
import "./FavButton.css";

function FavButton({ countriesId }) {
  const { favorites, manageFavorites } = useFavContext();
  const handleToggleFavorites = () => {
    manageFavorites(countriesId);
  };

  return (
    <button
      type="button"
      className="fav"
      // onClick={() => manageFavorites(countriesId)}
      onClick={handleToggleFavorites}
    >
      {favorites.includes(countriesId) ? <AiFillHeart /> : <AiOutlineHeart />}
    </button>
  );
}
FavButton.propTypes = {
  countriesId: PropTypes.string.isRequired,
};
export default FavButton;
