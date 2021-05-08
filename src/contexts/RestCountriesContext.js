import React, { useState, createContext, useEffect } from "react";

export const RestCountriesContext = createContext();

const RestCountriesContextProvider = (props) => {
  const endpoint = "https://restcountries.eu/rest/v2/all";
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [countryBorders, setCountryBorders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRegion, setFilteredRegion] = useState("");
  const [theme, setTheme] = useState("light");
  const [countryError, setCountryError] = useState(false);
  const [countriesError, setCountriesError] = useState(false);
  const [errorCountryValue, setErrorCountryValue] = useState("");
  const [errorCountriesValue, setErrorCountriesValue] = useState("");

  useEffect(() => {
    getCountries(endpoint);
    changeTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const lightTheme = {
    "--Very-Dark-Blue": "hsl(200, 15%, 8%)",
    "--Very-Light-Gray": "hsl(0, 0%, 98%)",
    "--Dark-Gray": "hsl(0, 0%, 52%)",
    "--White": "hsl(0, 0%, 100%)",
  };
  const darkTheme = {
    "--Very-Dark-Blue": "hsl(0, 0%, 100%)",
    "--Very-Light-Gray": "hsl(207, 26%, 17%)",
    "--Dark-Gray": "hsl(0, 0%, 100%)",
    "--White": "hsl(209, 23%, 22%)",
  };

  const changeTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const applyTheme = (nextTheme) => {
    const theme = nextTheme === "dark" ? lightTheme : darkTheme;
    Object.keys(theme).forEach((key) => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
    });
  };

  const getCountries = async (endpoint) => {
    setLoading(true);
    try {
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw Error("Could not fetch data for that resource");
      }

      const data = await response.json();
      setCountries([...data]);
      setCountriesError(false);
      setErrorCountriesValue("");
    } catch (error) {
      console.error(error);
      // console.log(error);
      setCountriesError(true);
      setErrorCountriesValue(error.message);
    }
    setLoading(false);
  };

  const getCountry = async (endpoint) => {
    let endpointCodes = "https://restcountries.eu/rest/v2/alpha?codes=";

    setLoading(true);
    try {
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw Error("Could not fetch data for that resource");
      }

      const data = await response.json();

      setCountry(data);
      if (data.borders.length > 0) {
        data.borders.forEach((border) => {
          endpointCodes += `${border};`;
        });
        const resCodes = await fetch(endpointCodes);
        const dataCodes = await resCodes.json();
        let countryArr = [];

        dataCodes.map((country) => {
          countryArr = [
            ...countryArr,
            {
              name: country.name,
              code: country.alpha3Code,
            },
          ];
          return countryArr;
        });
        setCountryBorders(countryArr);
        setCountryError(false);
        setErrorCountryValue("");
      }
    } catch (error) {
      console.error(error);
      // console.log(error);
      setCountryError(true);
      setErrorCountryValue(error.message);
    }
    setLoading(false);
  };

  return (
    <RestCountriesContext.Provider
      value={{
        setCountries,
        countries,
        loading,
        country,
        getCountry,
        countryBorders,
        searchTerm,
        setSearchTerm,
        filteredRegion,
        setFilteredRegion,
        setTheme,
        applyTheme,
        theme,
        changeTheme,
        countryError,
        countriesError,
        errorCountriesValue,
        errorCountryValue,
      }}
    >
      {props.children}
    </RestCountriesContext.Provider>
  );
};

export default RestCountriesContextProvider;
