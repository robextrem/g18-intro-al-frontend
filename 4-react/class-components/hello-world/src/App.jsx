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

    // 3.- Regresar JSX
    return (
      <div className="App">
        <h5>Hola mundo</h5>

        <div className="card">
          {/* SINTAXIS para acceder a valores de JS {} */}
          <span>Esta es la generacion {name} </span>
          <h4>& hoy es el dia {day}</h4>
          {greetings()}
          {/* para setear estados se usa 
            this.setState({ name: newValue}) 
          */}
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            valor de contador is {this.state.count}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
