import React from "react";
import { Link } from "react-router-dom";
import FavButton from "../favorites/FavButton";
import "./CardCountries.css";

function CardCountries({ country, activity }) {
  return (
    <div className="country-activity-card">
      <img
        className="country-img"
        src={country.country_img}
        alt={country.country}
      />
      <div className="country-details">
        <h2>{country.country}</h2>
        <p>{country.countries}</p>
        <div className="activity-details">
          <h3>Activity:</h3>
          <p>{activity.activity}</p>
        </div>
        <div className="fav-button">
          <FavButton countryId={country.country_id} />
        </div>
        <Link to={`/countries/${country.country_id}`} className="button">
          Voir plus
        </Link>
      </div>
    </div>
  );
}
export default CardCountries;
