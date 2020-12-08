import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/home";
import Catalogo from "./components/catalogo";

const Root = (props) => {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
              <HomePage />
          </Route>
          <Route path="/catalogo">
              <Catalogo />
          </Route>
      </Switch>
    </Router>
  );
};

export default Root;
