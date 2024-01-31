import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav_link">
        <SearchBar />
        <Link to="/">
          <p className="nav_p">Welcome </p>
        </Link>
        <Link to="/countries">
          <p className="nav_p">Countries </p>
        </Link>
        <Link to="/activities">
          <p className="nav_p">Activities </p>
        </Link>
        <Link to="/win">
          <p className="nav_p">Play </p>
        </Link>
        <Link to="/favorite">
          <p className="nav_p">favorites </p>
        </Link>
        <Link to="/login">
          <p className="nav_p">Login </p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
