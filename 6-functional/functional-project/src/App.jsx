import { useState } from "react";

import "./App.css";

const App = () => {
  const [user, setUser] = useState("");
  const [passsword, setPassword] = useState("");

  const handleInputValue = ({ target: { value } }) => {
    console.log("valor ", value);
  };

  // user === 'usuarioG18' & password === '12345'
  return (
    <div className="App">
      <h3>Login app fake 🤡</h3>

      <div>
        {/* USER */}
        <div style={{ margin: 10 }}>
          <label htmlFor="">Usuario:</label>
          <input type="text" value={user} />
        </div>

        {/* PASSWORD */}
        <div style={{ margin: 10 }}>
          <label htmlFor="">Password: </label>
          <input
            type="password"
            value={passsword}
            onChange={handleInputValue}
          />
        </div>

        <button> Enviar</button>
      </div>
    </div>
  );
};

export default App;
