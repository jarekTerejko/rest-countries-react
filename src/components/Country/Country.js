import React, { useEffect, useContext } from "react";
import { RestCountriesContext } from "../../contexts/RestCountriesContext";
import { numberWithCommas } from "../../config";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const Country = (props) => {
  const { getCountry, loading, country, countryBorders } = useContext(
    RestCountriesContext
  );

  useEffect(() => {
    getCountry(
      `https://restcountries.eu/rest/v2/alpha/${props.match.params.code}`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.code]);

  if (loading) {
    return <Loader />;
  }

  if (country) {
    return (
      <div className="container">
        <button
          onClick={() => props.history.goBack()}
          className="btn btn--back"
        >
          <i
            className="fas fa-long-arrow-alt-left"
            style={{ paddingRight: "1rem" }}
          ></i>
          Back
        </button>

        <div className="country-container">
          <div className="country-container__flag-container">
            <img
              src={country.flag}
              alt={`flag of ${country.name}`}
              className="country-container__flag"
            />
          </div>
          <div className="country-container__details">
            <h1 className="country-container__name">{country.name}</h1>
            <ul className="country-container__details-left">
              <li className="country-container__info">
                <span className="country-container__info-property">
                  Native Name:{" "}
                </span>
                <span className="country-container__info-value">
                  {country.nativeName}
                </span>
              </li>
              <li className="country-container__info">
                <span className="country-container__info-property">
                  Population:{" "}
                </span>
                <span className="country-container__info-value">
                  {numberWithCommas(country.population)}
                </span>
              </li>
              <li className="country-container__info">
                <span className="country-container__info-property">
                  Region:{" "}
                </span>
                <span className="country-container__info-value">
                  {country.region}
                </span>
              </li>
              <li className="country-container__info">
                <span className="country-container__info-property">
                  Sub region:{" "}
                </span>
                <span className="country-container__info-value">
                  {country.subregion}
                </span>
              </li>
              <li className="country-container__info">
                <span className="country-container__info-property">
                  Capital:{" "}
                </span>
                <span className="country-container__info-value">
                  {country.capital}
                </span>
              </li>
            </ul>
            <ul className="country-container__details-right">
              <li className="country-container__info">
                <span className="country-container__info-property">
                  Top level domain:{" "}
                </span>
                <span className="country-container__info-value">
                  {country.topLevelDomain}
                </span>
              </li>
              <li className="country-container__info">
                <span className="country-container__info-property">
                  Currencies:{" "}
                </span>
                {country.currencies.map((currency, i) => {
                  return (
                    <span className="country-container__info-value" key={i}>
                      {(i ? ", " : "") + currency.name}
                    </span>
                  );
                })}
              </li>
              <li className="country-container__info">
                <span className="country-container__info-property">
                  Languages:{" "}
                </span>
                {country.languages.map((lang, i) => {
                  return (
                    <span className="country-container__info-value" key={i}>
                      {(i ? ", " : "") + lang.name}
                    </span>
                  );
                })}
              </li>
            </ul>
            {country.borders.length > 0 && (
              <div className="country-container__info country-container__info--borders ">
                <span className="country-container__info-property country-container__info-property--borders">
                  Border countries:{" "}
                </span>

                {countryBorders.map((border, i) => {
                  return (
                    <Link
                      to={`/country/${border.code}`}
                      key={i}
                      className="btn btn--border"
                    >
                      {border.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Country;
