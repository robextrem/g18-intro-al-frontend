import React, { Component } from "react";

export default class PokemonDetail extends Component {
  render() {
    const {
      detail: { name, height, weight },
    } = this.props;

    return (
      <div>
        <p> Nombre: {name} </p>
        <p> Altura: {height}</p>
        <p>Peso: {weight} </p>
        {/* Mostrar los primeros 5 moves en una lista */}
        <ul>
          {moves.slice(0, 5).map((element, i) => (
            <li key={i}>
              Movimiento {i + 1}: {element.move.name}{" "}
            </li>
          ))}
        </ul>{" "}
        <br />
        <button onClick={() => console.log("simular hacia atras")}>
          {" "}
          Atrás
        </button>
      </div>
    );
  }
}
