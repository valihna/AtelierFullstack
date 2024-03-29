import React, { useState, useEffect } from "react";
import connexion from "../../services/connexion";
import "./Activity.css";

function Activity() {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await connexion.get("/allcountries");
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
        {activityData &&
          activityData.map((activity) => (
            <div key={activity.id} className="activity-card">
              <h3 className="h3-activity">{activity.activity}</h3>
              <img
                className="img-activity"
                src={activity.img_src}
                alt={activity.activity}
              />
              <p className="pcountries-activity">
                Countries : {activity.country}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Activity;
