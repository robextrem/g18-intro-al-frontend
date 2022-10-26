import React, { Component } from "react";

class Counters extends Component {
  render() {
    return (
      <div>
        <p>El valor actual del contador 1 es: {this.state.count1}</p>
        <button
          onClick={() => this.setState({ count1: this.state.count1 + 1 })}
        >
          Incrementar
        </button>

        <br />
        <br />
        <br />

        <p>El valor actual del contador 2 es: {this.state.count2}</p>
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

export default Counters;
