import { Component } from "react";

import "./App.css";
import GreenLight from "./components/GreenLight";
import YellowLight from "./components/YellowLight";

class App extends Component {
  state = {
    light: "green",
  };

  render() {
    return (
      <div className="App">
        <h1>Semaforo App 🏮</h1>

        <h4> La luz actual desde componente PADRE {this.state.light}</h4>

        {/* Conditional Rendering */}
        {this.state.light === "green" ? <GreenLight /> : <YellowLight />}

        <button
          onClick={() => {
            this.setState({ light: "yellow" });
          }}
        >
          Cambiar estado{" "}
        </button>
      </div>
    );
  }
}

export default App;
