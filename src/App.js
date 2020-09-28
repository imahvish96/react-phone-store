import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import Productdetail from "./Components/Productdetail";
import Default from "./Components/Default";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={ProductList} />
          <Route path="/Cart" exact={true} component={Cart} />
          <Route path="/Productdetail" exact={true} component={Productdetail} />
          <Route component={Default} />
        </Switch>
      </div>
    );
  }
}
