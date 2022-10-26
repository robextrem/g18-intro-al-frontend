import React, { Component } from "react";

export default class RedLight extends Component {
  render() {
    const redDesing = {
      borderStyle: "inset",
      color: "#b72828",
      backgroundColor: "#ff0d00",
      borderColor: "#6d1107",
    };

    return <h4 style={redDesing}> La luz actual es Rojo </h4>;
  }
}
