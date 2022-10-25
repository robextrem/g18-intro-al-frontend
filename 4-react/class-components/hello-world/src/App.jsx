import { Component } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// 1.- Class component
// extender de Component
class App extends Component {
  // 2.- Mandar llamar a render ()
  render() {
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
          {/* <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
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

// function App() {
//   // functional component
//   const [count, setCount] = useState(0);

// }

export default App;
