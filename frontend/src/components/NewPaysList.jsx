/* eslint-disable react/prop-types */
import React from "react";
import Pays from "./Pays";
// import "./NewPaysList.css"; // Uncomment this line if you want to use the CSS file

function NewPaysList({ paysList }) {
  return (
    <div className="pays-list">
      {paysList.map((pays) => (
        <Pays key={pays.id} newPaysList={pays} />
      ))}
    </div>
  );
}

export default NewPaysList;
