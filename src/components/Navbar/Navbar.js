import React, { useContext } from "react";
import { RestCountriesContext } from "../../contexts/RestCountriesContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { changeTheme, theme } = useContext(RestCountriesContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__content">
          <Link to="/" className="navbar__site-link">
            Where in the world?
          </Link>
          <button className="navbar__theme-switcher" onClick={changeTheme}>
            <i
              className={
                theme === "dark"
                  ? "far fa-moon navbar__fa-moon"
                  : "fas fa-moon navbar__fa-moon"
              }
            ></i>
            <span className="navbar__btn-text">Dark mode</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
