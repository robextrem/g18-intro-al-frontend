import { Component } from "react";
import "./App.css";

// 1.- Class component
// extender de Component
class App extends Component {
  // 2.- Mandar llamar a render ()

  state = {
    count: 0,
    isDarkMode: false,
  };

  render() {
    const name = "g18";
    const day = "Lunes";

    const greetings = () => {
      if (this.state.count >= 18) {
        return <p> Eres mayor de edad 🍻</p>;
      } else return <p> Eres un adolescente </p>;
    };

    const darkModeOff = {
      fontSize: 55,
      borderStyle: "inset",
      color: "black",
      backgroundColor: "white",
    };

    const darkmodeOn = {
      fontSize: 55,
      borderStyle: "inset",
      color: "orange",
    };

    // 3.- Regresar JSX
    return (
      <div className="App">
        <h5>Hola mundo </h5>

        {/* ESTILOS 
          Se maneja através de objetos
          Se usa camelCase */}
        <div
          className="card"
          style={this.state.isDarkMode ? darkmodeOn : darkModeOff}
        >
          {/* SINTAXIS para acceder a valores de JS {} */}
          <span>Esta es la generacion {name} </span>
          <h4>& hoy es el dia {day}</h4>

          {/* Conditional rendering IF */}
          {/* 1ER ESCENARIO if() {}  👇🏽*/}
          {/* {this.state.count >= 18 && (
            <p>Eres mayor de edad con conditonal rendering 🍻</p>
          )} */}

          {/* 2DO ESCENARIO if() {} else {} 👇🏽*/}
          {/* SINTAXIS DE TERNARIO condicion ? bloqueParaTrue : bloqueParaFalse */}
          {this.state.count >= 18 ? (
            <p>Eres mayor de edad con conditonal rendering 🍻</p>
          ) : (
            <p>Eres un adolescente 🎮</p>
          )}

          {/* {greetings()} */}

          {/* para setear estados se usa 
            this.setState({ name: newValue}) 
          */}
          <p>El valor actual del contador es: {this.state.count}</p>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Incrementar
          </button>
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            Decrementar
          </button>
        </div>
      </div>
    );
  }
}

export default App;
