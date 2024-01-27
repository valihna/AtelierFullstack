import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav_link">
        <Link to="/">
          <p className="nav_p">Accueil </p>
        </Link>
        <Link to="/countries">
          <p className="nav_p">Countries </p>
        </Link>
        <Link to="/activities">
          <p className="nav_p">Activities </p>
        </Link>
        <Link to="/win">
          <p className="nav_p">Win </p>
        </Link>
        <Link to="/login">
          <p className="nav_p">Connexion </p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
