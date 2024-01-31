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
          <div key={activity.id} className="activity-card">
            <img src={activity.img_src} alt={activity.activity} />
            <h3>{activity.activity}</h3>
            <p>Countries : {activity.countries}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity;
