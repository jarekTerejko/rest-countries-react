import React from "react";
import { Link } from "react-router-dom";

const CountryCard = (country) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <Link
      to={{ pathname: `/country/${country.country.alpha3Code.toLowerCase()}` }}
    >
      <div className="country">
        <img
          src={country.country.flag}
          alt={`flag of ${country.country.name}`}
          className="country__flag"
        />
        <div className="country__content">
          <h3 className="country__name">{country.country.name}</h3>
          <p className="country__info">
            Population:{" "}
            <span className="country__info-value">
              {numberWithCommas(country.country.population)}
            </span>
          </p>
          <p className="country__info">
            Region:{" "}
            <span className="country__info-value">
              {country.country.region}
            </span>
          </p>
          <p className="country__info">
            Capital:{" "}
            <span className="country__info-value">
              {country.country.capital}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
