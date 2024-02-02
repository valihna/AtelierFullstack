import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
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
            <div className="button-seemore">
              <Link to={`/cardCountries/${count.count_id}`} className="button">
                see more
              </Link>
              <FavButton countriesId={count.id} />
            </div>
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
