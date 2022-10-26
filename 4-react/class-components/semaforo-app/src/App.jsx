import { Component } from "react";

import "./App.css";
import GreenLight from "./components/GreenLight";
import RedLight from "./components/RedLight";
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
        {this.state.light === "green" ? (
          <GreenLight />
        ) : this.state.light === "yellow" ? (
          <YellowLight />
        ) : (
          <RedLight />
        )}

        <button
          onClick={() => {
            if (this.state.light === "green")
              this.setState({ light: "yellow" });
            else if (this.state.light === "yellow")
              this.setState({ light: "red" });
            else this.setState({ light: "green" });
          }}
        >
          Cambiar estado{" "}
        </button>
      </div>
    );
  }
}

export default App;
