import React from "react";
import "./Search.css";
export const Search = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  ></input>
);
