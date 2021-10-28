import "./App.css";
import axios from "axios";
import { Route, Switch } from "react-router";
import { useState, useEffect } from "react";
import CountryCards from "./components/CountryCards.js/CountryCards";
import CountryPage from "./components/pages/CountryPage";
import Navbar from "./components/Navbar.js/Navbar";
 

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then(({ data }) => setCountries(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <CountryCards countries={countries} />
        </Route>
        <Route path="/countries/:countryName">
          <CountryPage countries={countries} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
