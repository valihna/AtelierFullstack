import React, { useState, useEffect } from "react";
import connexion from "../../services/connexion";

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
    <div>
      <div className="activity-gallery">
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity;
