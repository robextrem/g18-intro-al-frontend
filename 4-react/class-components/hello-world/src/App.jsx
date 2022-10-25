import { Component } from "react";
import "./App.css";

// 1.- Class component
// extender de Component
class App extends Component {
  // 2.- Mandar llamar a render ()

  state = {
    count: 0,
    age: 29,
    city: "Qro",
    date: "24/oct/2022",
  };

  render() {
    const name = "g18";
    const day = "Lunes";

    const greetings = () => {
      return (
        <div>
          <p> Saludos desde mi funcion </p>
        </div>
      );
    };

    const styleObject = {
      fontSize: "14px",
      borderStyle: "none",
    };

    // 3.- Regresar JSX
    return (
      <div className="App">
        <h5>Hola mundo </h5>

        {/* ESTILOS Se maneja através de objetos
        Se usa camelCase */}
        <div className="card" style={{ fontSize: 35, borderStyle: "inset" }}>
          {/* SINTAXIS para acceder a valores de JS {} */}
          <span>Esta es la generacion {name} </span>
          <h4>& hoy es el dia {day}</h4>
          {greetings()}

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
