import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/home";
import Catalogo from "./components/catalogo";
import Header from "./components/header";
import Informacion from "./components/informacion";
import Producto from "./components/producto";


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
          <Route path="/informacion">
              <Informacion />
          </Route>
          <Route path="/producto/:slug" component={Producto}/>
      </Switch>
    </Router>
    </div>
  );
};

export default Root;
