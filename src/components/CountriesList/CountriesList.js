import React, { useContext } from "react";
import CountryCard from "../CountryCard/CountryCard";
import { RestCountriesContext } from "../../contexts/RestCountriesContext";

const CountriesList = () => {
  const { countries, searchTerm, filteredRegion } = useContext(
    RestCountriesContext
  );

  return (
    <section className="countries">
      <div className="container">
        <div className="countries__cards">
          {countries
            .filter((country) =>
              country.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .filter((country) => country.region.includes(filteredRegion))
            .map((country, i) => {
              return <CountryCard country={country} key={i} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default CountriesList;
