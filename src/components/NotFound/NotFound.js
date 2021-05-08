import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RestCountriesContext } from "../../contexts/RestCountriesContext";

const NotFound = () => {
  const {
    countryError,
    countriesError,
    errorCountriesValue,
    errorCountryValue,
  } = useContext(RestCountriesContext);
  return (
    <div
      style={{
        height: "100vh",
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "7rem", color: "red" }}>404</h1>
      {countryError && (
        <p style={{ fontSize: "1.6rem", color: "red", marginBottom: "2rem" }}>
          {errorCountryValue}
        </p>
      )}
      {countriesError && (
        <p style={{ fontSize: "1.6rem", color: "red", marginBottom: "2rem" }}>
          {errorCountriesValue}
        </p>
      )}
      <h2
        style={{
          fontSize: "4rem",
          color: "var(--Very-Dark-Blue)",
          marginBottom: "3rem",
        }}
      >
        This page does not exists
      </h2>
      <Link style={{ fontSize: "2rem" }} to="/" className="btn btn--border">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
