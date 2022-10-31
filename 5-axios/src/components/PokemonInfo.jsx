import React, { Component } from "react";

export default class PokemonInfo extends Component {
  render() {
    console.log("props", this.props);

    // Mencionar destructuring & que se est aplicando en el JSX
    const {
      details: { base_experience, name },
    } = this.props;
    return (
      <div className="mb-5 mt-4">
        <nav className="panel">
          <p className="panel-heading">Información pokemon</p>
          <div className="panel-block">
            <p className="control has-icons-left"></p>
          </div>
          <div>
            <p> Nombre: {name}</p>
            <p> Exp base: {base_experience}</p>
          </div>
          <button
            className="button is-link is-outlined is-fullwidth"
            onClick={() => this.props.returnMainPage()}
          >
            Atras
          </button>
        </nav>
      </div>
    );
  }
}
