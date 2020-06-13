import React, { useContext } from "react";
import { RestCountriesContext } from "../../contexts/RestCountriesContext";
import CountriesList from "../CountriesList/CountriesList";
import Loader from "../Loader/Loader";
import Search from "../Search/Search";
import FilterSelect from "../Filter/FilterSelect";

const Home = () => {
  const { countries, loading } = useContext(RestCountriesContext);

  if(loading) {
    return (
      <Loader/>
    )
  }

  if (countries) {
    return (
      <>
        <section className="filters">
          <div className="container">
            <div className="filters__elements">
            <Search />
            <FilterSelect />
            </div>
          </div>
        </section>
        <CountriesList />
      </>
    );
  } 
    
 
}



export default Home;
