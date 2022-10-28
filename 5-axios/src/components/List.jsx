import { Component } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";

class List extends Component {
  state = {
    pokemones: [],
    resultados: [],
  };

  /**
   *
   * Recuperar el nombre ✅
   * Consumir API
   * Mostrar info
   */

  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.buscar = this.buscar.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json"
      )
      .then((response) => {
        this.setState({ pokemones: response.data, resultados: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /*
   * ya con el nombre consumir API
   * regresa ingo y la guardamos en state
   * Y mandar ese state al componente List
   */

  buscar(event) {
    let q = event.currentTarget.value.toLowerCase();
    let resultados = this.state.pokemones.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(q);
    });

    this.setState({ resultados: resultados });

    //console.log(resultados);
  }

  getPokemonInfo(name) {
    console.log("name", name);
  }

  render() {
    return (
      <div className="container">
        <div className="mb-5">
          <input
            onKeyUp={this.buscar}
            type="text"
            placeholder="Buscar..."
            className="input"
          ></input>
        </div>
        <div className="columns is-multiline">
          {this.state.resultados.map((pokemon) => {
            return (
              <Pokemon
                getPokemon={this.getPokemonInfo}
                key={pokemon.id}
                image={pokemon.ThumbnailImage}
                name={pokemon.name}
              ></Pokemon>
            );
          })}
        </div>
      </div>
    );
  }
}

export default List;
