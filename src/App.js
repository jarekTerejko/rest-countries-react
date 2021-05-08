import React from "react";
import Home from "./pages/Home";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import RestCountriesContextProvider from "./contexts/RestCountriesContext";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import CountryPage from "./pages/CountryPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RestCountriesContextProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/country/:code" component={CountryPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </RestCountriesContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
