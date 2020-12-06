import React from "react";
//import { Route, Switch } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/home";
import Catalogo from "./components/catalogo";

const Root = (props) => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/catalogo">
            <Catalogo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Root;
