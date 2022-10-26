import React, { Component } from "react";

export default class YellowLight extends Component {
  render() {
    const yellowdesing = {
      borderStyle: "inset",
      color: "#B5B728",
      backgroundColor: "#FBFF00",
      borderColor: "#6B6D07",
    };

    return <h4 style={yellowdesing}> La luz actual es Amarillo </h4>;
  }
}
