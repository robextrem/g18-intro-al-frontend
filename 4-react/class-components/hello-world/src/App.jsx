import { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

// 1.- Class component
// extender de Component
class App extends Component {
  // 2.- Mandar llamar a render ()

  state = {
    count1: 0,
    count2: 10,
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

          <Counter
            // nombreProperty = value
            counterProp1={this.state.count1}
            counterProp2={this.state.count2}
            manejarIncrementar={() =>
              this.setState({ count1: this.state.count1 + 1 })
            }
          />

          <br />
          <button
            onClick={() =>
              this.setState({ isDarkMode: !this.state.isDarkMode })
            }
          >
            Cambiar estilo de plantilla
          </button>
        </div>
      </div>
    );
  }
}

export default App;
