import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const updatedValue = event.target.value;
    setValue(updatedValue);

    onSearch(updatedValue);
  };

  return (
    <div className="input-wrapper">
      <FaSearch />
      <input
        type="text"
        placeholder="search destinations by name..."
        className="search-bar"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}

export default SearchBar;
