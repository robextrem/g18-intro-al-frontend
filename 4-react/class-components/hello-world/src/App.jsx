import { Component } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// 1.- Class component
// extender de Component
class App extends Component {
  // 2.- Mandar llamar a render ()

  state = {
    count: 11,
  };

  l;

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
        <div>
          <h5>Hola mundo</h5>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Gb18</h1>
        <div className="card">
          {/* SINTAXIS para acceder a valores de JS {} */}
          count is {this.state.count}
          <span>Esta es la generacion {name} </span>
          <h4>& hoy es el dia {day}</h4>
          {greetings()}
          {/* <button onClick={() => setCount((count) => count + 1)}>
      </button> */}
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR !!!!!!
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    );
  }
}

export default App;
