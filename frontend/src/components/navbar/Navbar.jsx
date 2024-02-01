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
          <p>Welcome </p>
        </Link>
      </div>
      <Link to="/countries">
        <p>Countries </p>
      </Link>
      <Link to="/activities">
        <p>Activities </p>
      </Link>
      {/* <Link to="/win">
        <p>Play </p>
      </Link> */}
      <Link to="/favorite">
        <p>favorites </p>
      </Link>
      <Link to="/login">
        <p>Login </p>
      </Link>
      <Link to="/registration">
        <p>SignUp </p>
      </Link>
    </div>
  );
}

export default Navbar;
