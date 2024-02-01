import React, { useState, useEffect } from "react";
import connexion from "../../services/connexion";
import "./Activity.css";

function Activity() {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await connexion.get("/activities");
        setActivityData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="gobal-activity">
      <div className="p-activity">
        <p>
          Find the different activities to do during your stay. Travel
          activities: who does what? - Network monitoring in... Many other
          activities appear in the travel diaries of the tourists surveyed.
          Visiting an amusement park, a zoo, bird watching, climbing, learning
          tourism, boating, agrotourism or even carrying out a thematic circuit
          in are some examples.{" "}
        </p>
      </div>
      <div className="gallery-activity">
        {activityData.map((activity) => (
          <div className="activity-card" key={activity.id}>
            <div className="pictures">
              <img src={activity.img_src} alt={activity.activity} />
            </div>
            <div className="country-h3">
              <h3>{activity.activity}</h3>
            </div>
            <div className="country-desc">
              <p>Countries : {activity.countries}</p>
            </div>

          <div key={activity.id} className="activity-card">
            <img
              className="img-activity"
              src={activity.img_src}
              alt={activity.activity}
            />
            <h3 className="h3-acttivity">{activity.activity}</h3>
            <p className="pcountries-activity">
              Countries : {activity.countries}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity;
