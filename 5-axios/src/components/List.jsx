import { Component } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import PokemonInfo from "./PokemonInfo";

class List extends Component {
  state = {
    pokemones: [],
    resultados: [],
    pokemonInfo: {},
    pokemonSelected: "",
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

  componentDidUpdate(prepPros, prevState) {
    console.log("prevState pokemonSelected", prevState.pokemonSelected);
    console.log("state pokemonSelected", this.state.pokemonSelected);

    /**Se valida el valor previo de mi state VS el actual  */
    if (prevState.pokemonSelected !== this.state.pokemonSelected) {
      // console.log("llamar a API");
      const BASE_URL = "https://pokeapi.co/api/v2/";
      axios
        .get(`${BASE_URL}pokemon/${this.state.pokemonSelected}`)
        .then((response) => {
          // Esto es destructuring 👇🏽
          const { data } = response;
          this.setState({ pokemonInfo: data });
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }

  buscar(event) {
    let q = event.currentTarget.value.toLowerCase();
    let resultados = this.state.pokemones.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(q);
    });

    this.setState({ resultados: resultados });
  }

  agua(event) {
    let filtrados = this.state.pokemones.filter((pokemon) => {
      return pokemon.type.includes("water");
    });
    this.setState({ resultados: filtrados });
    //console.log(resultados);
  }

  /**
   *
   * Recuperar el nombre ✅
   * Consumir API
   * ya con el nombre consumir API 👀 ✅
   * regresa info y la guardamos en state✅
   * conditional rendering
   */

  getPokemonInfo(name) {
    /**
     * Mencionar que en lugar de hacer la llamada a la API cuando
     * se da el evento onClick se va a hacer con el componentDidUpdate
     * & desde ahi escucha cuando se cambia el state pokemonInfo
     *
     * Se va a crear nuevo estado para guardar el nombre del pokemon que se ha
     * seleccionado "pokemonSelected"
     */
    this.setState({ pokemonSelected: name });
  }

  render() {
    return (
      <div className="container">
        <div className="mb-5 mt-4">
          <input
            onKeyUp={this.buscar}
            type="text"
            placeholder="Buscar..."
            className="input"
          />
        </div>

        {Object.values(this.state.pokemonInfo).length > 0 && (
          <PokemonInfo
            returnMainPage={() => this.setState({ pokemonInfo: {} })}
            details={this.state.pokemonInfo}
          />
        )}

        {/* CONDITIONAL RENDERING */}

        {this.state.resultados.length > 0 && (
          <>
            <button onClick={this.agua} className="button is-link">
              Ver pokemones AGUA
            </button>

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
          </>
        )}
      </div>
    );
  }
}

export default List;
