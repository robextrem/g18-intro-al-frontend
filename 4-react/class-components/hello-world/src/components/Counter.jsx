import React, { Component } from "react";

class Counter extends Component {
  state = {};

  render() {
    console.log("props", this.props);

    return (
      <div>
        <p>El valor actual del contador 1 es: {this.props.count1} </p>
        <button
          onClick={() => this.setState({ count1: this.state.count1 + 1 })}
        >
          Incrementar
        </button>

        <br />
        <br />
        <br />

        <p>El valor actual del contador 2 es: {this.props.count2}</p>
        <button
          onClick={() => this.setState({ count2: this.state.count2 - 1 })}
        >
          Decrementar
        </button>
        <br />
      </div>
    );
  }
}

export default Counter;
