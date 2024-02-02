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

// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import CountryCard from "../country/CountryCard";
// import SelectCount from "./SelectCount";
// import "./SearchBar.css";

// function SearchBar({ countries }) {
//   const sections = new Set(countries.map((country) => country.section));
//   const [sectionFilter, setSectionFilter] = useState("all");

//   return (
//     <div>
//       <div className="input-wrapper">
//         <form className="section-country">
//           <SelectCount
//             functionFilter={setSectionFilter}
//             title="All sections"
//             tab={sections}
//           />
//           <FaSearch />
//         </form>
//       </div>
//       <div>
//         {countries
//           .filter(
//             (country) =>
//               country.section === sectionFilter || sectionFilter === "all"
//           )
//           .map((count) => (
//             <CountryCard key={count.id} count={count} />
//           ))}
//       </div>
//     </div>
//   );
// }

// export default SearchBar;
