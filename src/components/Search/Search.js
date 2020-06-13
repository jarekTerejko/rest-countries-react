import React, { useContext } from "react";
import { RestCountriesContext } from "../../contexts/RestCountriesContext";

const Search = () => {
  const { searchTerm, setSearchTerm } = useContext(RestCountriesContext);

  return (
    <div className="search-container">
      <label htmlFor="searchTerm" className="search-container__label">
        Search for a country...
      </label>
      <input
        type="text"
        placeholder="Search for a country..."
        name="searchTerm"
        id="searchTerm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-container__search-input"
      />
      <i className="fas fa-search search-container__fa-search"></i>
    </div>
  );
};

export default Search;
