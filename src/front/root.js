import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/home";
import Catalogo from "./components/catalogo";
import Header from "./components/header";


const Root = (props) => {
  return (
    <div>
    <Header/>
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
    </div>
  );
};

export default Root;
