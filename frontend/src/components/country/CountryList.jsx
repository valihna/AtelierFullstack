import PropTypes from "prop-types";
import React from "react";
import CountryCard from "./CountryCard";
import "./Country.css";

function CountryList({ countries }) {
  return (
    <div className="container_country">
      {countries.map((count) => (
        <CountryCard key={count.id} count={count} />
      ))}
    </div>
  );
}

CountryList.propTypes = {
  countries: PropTypes.string.isRequired,
};

export default CountryList;
