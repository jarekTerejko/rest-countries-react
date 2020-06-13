import React from "react";
import Home from "./components/Home/Home";
import Country from "./components/Country/Country";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import RestCountriesContextProvider from "./contexts/RestCountriesContext";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RestCountriesContextProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/country/:code" component={Country} />
            <Route path='*' component={NotFound} />
          </Switch>
        </RestCountriesContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
