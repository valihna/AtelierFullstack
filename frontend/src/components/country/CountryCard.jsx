import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import React from "react";
import FavButton from "../favorites/FavButton";
import "./Country.css";

function CountryCard({ count }) {
  return (
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
    <article className="country-global">
      <div className="pictures-count">
        <div className="div-img-count">
          <img className="img-count" src={count.img_src} alt={count.img_src} />
        </div>
        <div className="favbutton-count">
          <FavButton countriesId={count.id} />
        </div>
      </div>
      <div className="count-h5">
        <h5>{count.country}</h5>
      </div>
      <div className="p-count-desc">
        <p className="countries">{count.countries}</p>
        {/* <p className="photo">{count.photo}</p> */}
      </div>
    </article>

  );
}
CountryCard.propTypes = {
  count: PropTypes.shape().isRequired,
};

export default CountryCard;
