import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FavButton from "../favorites/FavButton";
import connexion from "../../services/connexion";
import "./CardCountries.css";

function CardCountries() {
  const [countryData, setCountryData] = useState([]);
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countryResponse = await connexion.get("/countries");
        const activityResponse = await connexion.get("/activities");
        setCountryData(countryResponse.data);
        setActivityData(activityResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="country-activity-card">
      {countryData.map((country) => (
        <div key={country.country_id}>
          <img
            className="country-img"
            src={country.country_img}
            alt={country.country}
          />
          <div className="country-details">
            <h2>{country.country}</h2>
            <p>{country.countries}</p>
            {activityData.map((activity) => (
              <div key={activity.activity_id}>
                <div className="activity-details">
                  <h3>Activity:</h3>
                  <p>{activity.activity}</p>
                </div>
              </div>
            ))}
            <div className="fav-button">
              <FavButton countryId={country.country_id} />
            </div>
            <div className="button-seemore">
              <Link to={`/countries/${country.country_id}`} className="button">
                see more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardCountries;
