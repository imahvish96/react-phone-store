import React, { Component } from "react";

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1 className="txtCenter">
          404 Error Page Not Found The Requested URL{" "}
          {this.props.location.pathname} was not found
        </h1>
      </div>
    );
  }
}
