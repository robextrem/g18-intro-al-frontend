import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [credentials, setCredentials] = useState({});

  const USER_HARDCODED = "userG18";
  const PASSWORD_HARDCODED = "12345";

  useEffect(() => {
    console.log("nuevo valor", credentials);
  }, [credentials]); // [props || states]

  const handleInputValue = ({ target: { value, name } }) => {
    /**
     * const objectState =
     * {
     *    email: valorInput,
     *    password: valorInputPassword
     * }
     */

    setCredentials({ [name]: value });
  };

  const submitForm = async () => {
    // Simular peticion al backend
    // if (user === USER_HARDCODED && password === PASSWORD_HARDCODED) {
    //   console.log("login exitoso");
    // } else console.log("NO PASA");

    const objectLogin = {
      email: user,
      role,
      gender,
      password,
      first_name,
      las,
    };

    const result = await axios.post(
      "https://ecomerce-master.herokuapp.com/api/v1/login",
      objectLogin
    );
    console.log("result", result);
  };

  return (
    <div className="App">
      <h3>Login app fake 🤡</h3>

      <div>
        {/* USER */}
        <div style={{ margin: 10 }}>
          <label htmlFor="">Usuario:</label>
          <input
            type="text"
            name="user"
            onChange={handleInputValue}
            value={credentials.user}
          />
        </div>

        {/* PASSWORD */}
        <div style={{ margin: 10 }}>
          <label htmlFor="">Password: </label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputValue}
          />
        </div>

        <button onClick={() => submitForm()}> Enviar</button>
      </div>
    </div>
  );
};

export default App;
