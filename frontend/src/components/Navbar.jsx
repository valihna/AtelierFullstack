/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
// eslint-disable-next-line import/no-unresolved, import/extensions
import navbar from "../../assets/navbar";

import "./Navbar.css";

function NavBar({ onSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <img src={navbar} alt="navbar" />
      <div className="navbar-header">
        <h1 className="navbar-title-site">Voyage Voayage</h1>
      </div>
      <div className={isScrolled ? "navbar-menu sticky" : "navbar-menu"}>
        <Link className="home" to="/" onClick={handleClick}>
          <h2>HOME</h2>
        </Link>
        <SearchBar onSearch={onSearch} />
        <Link className="home" to="/Validation">
          <h2>Validation du Sejour</h2>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
