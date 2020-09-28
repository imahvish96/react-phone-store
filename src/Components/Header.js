import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link to="/" className="Logo">
            <h2>DesignerHub</h2>
          </Link>

          <Link to="/Cart" className="cart">
            <h2>Cart</h2>

            <div className="badge">0</div>
          </Link>
        </div>
      </div>
    );
  }
}
