import PropTypes from "prop-types";
import React from "react";
import FavButton from "../favorites/FavButton";
import "./Country.css";

function CountryCard({ count }) {
  return (
    <div>
      <div className="country-page">
        <article className="country-card">
          <div className="pictures">
            <img className="img-src" src={count.img_src} alt={count.img_src} />
          </div>
          <div className="country-h5">
            <h5>{count.country}</h5>
          </div>
          <div className="country-desc">
            <p className="p-countries">{count.countries}</p>
            <FavButton countriesId={count.id} />
          </div>
        </article>
      </div>
    </div>
  );
}
CountryCard.propTypes = {
  count: PropTypes.shape().isRequired,
};

export default CountryCard;
