import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ handleChange, placeholder }) => {
  return (
    <div className="search-container">
      <input
        className="search"
        onChange={handleChange}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};
