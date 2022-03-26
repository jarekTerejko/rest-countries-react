import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { RestCountriesContext } from "../contexts/RestCountriesContext";
import Country from "../components/Country/Country";
import Loader from "../components/Loader/Loader";
import NotFound from "../components/NotFound/NotFound";

const CountryPage = (props) => {
  const { getCountry, loading, country, countryError } = useContext(
    RestCountriesContext
  );

  const location = useLocation();

  useEffect(() => {
    const countryCode = location.pathname.slice(-3);
    getCountry(`https://restcountries.com/v2/alpha/${countryCode}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      {countryError && <NotFound />}
      {country && <Country />}
    </>
  );
};

export default CountryPage;
