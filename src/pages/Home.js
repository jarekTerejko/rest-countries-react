import React, { useContext } from "react";
import { RestCountriesContext } from "../contexts/RestCountriesContext";
import CountriesList from "../components/CountriesList/CountriesList";
import Loader from "../components/Loader/Loader";
import Search from "../components/Search/Search";
import FilterSelect from "../components/Filter/FilterSelect";
import NotFound from "../components/NotFound/NotFound";

const Home = () => {
  const { countries, loading, countriesError } = useContext(
    RestCountriesContext
  );

  return (
    <>
      {loading && <Loader />}
      {countriesError && <NotFound />}
      <section className="filters">
        <div className="container">
          <div className="filters__elements">
            <Search />
            <FilterSelect />
          </div>
        </div>
      </section>
      {countries && <CountriesList />}
    </>
  );
};

export default Home;
