import { useState } from "react";

import "./App.css";

const App = () => {
  // user === 'usuarioG18' & password === '12345'
  return (
    <div className="App">
      <h3>Login app fake 🤡</h3>

      <div>
        {/* USER */}
        <div style={{ margin: 10 }}>
          <label htmlFor="">Usuario:</label>
          <input type="text" />
        </div>

        {/* PASSWORD */}
        <div style={{ margin: 10 }}>
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>

        <button> Enviar</button>
      </div>
    </div>
  );
};

export default App;
