import { Component } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";

class List extends Component {
  state = {
    pokemones: [],
    resultados: [],
    pokemonInfo: {},
  };

  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.buscar = this.buscar.bind(this);
    this.agua = this.agua.bind(this);
    this.getPokemonInfo = this.getPokemonInfo.bind(this);
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

  buscar(event) {
    let q = event.currentTarget.value.toLowerCase();
    let filtrados = this.state.pokemones.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(q);
    });
    this.setState({ resultados: filtrados });
    //console.log(resultados);
  }

  agua(event) {
    let filtrados = this.state.pokemones.filter((pokemon) => {
      return pokemon.type.includes("water");
    });
    this.setState({ resultados: filtrados });
    //console.log(resultados);
  }

  getPokemonInfo(name) {
    const BASE_URL = "https://pokeapi.co/api/v2/";

    axios
      .get(`${BASE_URL}pokemon/${name}`)
      .then((response) => {
        console.log("respuesta POKEAPI", response);
        // Esto es destructuring 👇🏽
        const { data } = response;
        console.log("data", data);
        this.setState({ pokemonInfo: data });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  /**
   *
   * Recuperar el nombre ✅

   * ya con el nombre consumir API 👀 ✅
   * regresa info y la guardamos en state✅
   * conditional rendering
   *
   */

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
          {/* CONDITIONAL RENDERING */}
          {Object.values(this.state.pokemonInfo).length > 0 ? (
            <div>
              <p> Nombre: {this.state.pokemonInfo.name} </p>
              <p> Altura: {this.state.pokemonInfo.height}</p>
              <p>Peso: {this.state.pokemonInfo.weight} </p>
              {/* Mostrar los primeros 5 moves en una lista */}
              <ul>
                {this.state.pokemonInfo.moves.slice(0, 5).map((element, i) => (
                  <li key={i}>
                    Movimiento {i + 1}: {element.move.name}{" "}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <>
              {this.state.resultados.length > 0 && (
                <>
                  <button onClick={this.agua} className="button is-link">
                    Ver pokemones AGUA
                  </button>
                  <div className="columns is-multiline">
                    {this.state.resultados.map((pokemon) => {
                      return (
                        <Pokemon
                          key={pokemon.id}
                          image={pokemon.ThumbnailImage}
                          name={pokemon.name}
                          getPokemon={(namePokemon) =>
                            this.getPokemonInfo(namePokemon)
                          }
                        />
                      );
                    })}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default List;
