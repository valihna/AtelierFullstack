import React from "react";
import { useLoaderData } from "react-router-dom";

// import "./Pays.css";

function Pays() {
  const pays = useLoaderData();
  // console.log(pays);
  return (
    <div className="citiesList">
      <h1>Voyage Voyage</h1>
      <div className="containCities">
        {pays.map((pay) => (
          <Pays key={pay.id} pay={pay} />
        ))}
      </div>
    </div>
  );
}

export default Pays;

// import { useLoaderData } from "react-router-dom";

// import Destination from "../pages/Destination";

// import React from "react";

// function Pays() {
//   const pays = useLoaderDATA();

//   return (
//     <div className="pays">
//       <h1>Destinations</h1>
//       <main className="container">
//         {pays.map((pays) => (
//           <Destination pays={pays} key={pays.id} />
//         ))}
//       </main>
//     </div>
//   );
// }

// export default Pays;
