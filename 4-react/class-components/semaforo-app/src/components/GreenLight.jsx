import React, { Component } from "react";

export default class GreenLight extends Component {
  render() {
    const greendesign = {
      borderStyle: "inset",
      color: "#146413",
      backgroundColor: "#04FF00",
      borderColor: "#013500",
    };

    return <h4 style={greendesign}> La luz actual es Verde </h4>;
  }
}
