import React, { Component } from "react";

class Counter extends Component {
  state = {};
  /**
   * IMPORTANTE
   *
   * PADRE - HIJO son ATRIBUTOS this.props.count1
   * HIJO - PADRE son METODOS this.props.increment()
   */
  render() {
    console.log("props", this.props);

    return (
      <div>
        <p>El valor actual del contador 1 es: {this.props.counterProp1} </p>

        <button onClick={() => this.props.manejarIncrementar()}>
          Incrementar
        </button>

        <br />
        <br />
        <br />

        <p>El valor actual del contador 2 es: {this.props.counterProp2}</p>
        <button onClick={() => console.log("decrementar")}>Decrementar</button>
        <br />
      </div>
    );
  }
}

export default Counter;
