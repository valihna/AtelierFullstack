import PropTypes from "prop-types";
import React from "react";
import "./Country.css";

function CountryCard({ count }) {
  return (
    <article className="country">
      <div className="pictures">
        <img className="img-src" src={count.img_src} alt={count.img_src} />
      </div>
      <div className="country">
        <h5>{count.country}</h5>
      </div>
      <div className="country-desc">
        <p className="countries">{count.countries}</p>
        <p className="photo">{count.photo}</p>
      </div>
    </article>
  );
}
CountryCard.propTypes = {
  count: PropTypes.shape().isRequired,
};
export default CountryCard;
