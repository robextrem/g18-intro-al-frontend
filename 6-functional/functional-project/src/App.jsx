import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import "./App.css";
import Dashboard from "./components/Dashboard";

const App = () => {
  // const [user, setUser] = useState("");
  // const [password, setPassword] = useState("");

  const [credentials, setCredentials] = useState({});
  const [isUserActive, setisUserActive] = useState(false);

  const USER_HARDCODED = "userG18";
  const PASSWORD_HARDCODED = "12345";

  useEffect(() => {
    console.log("nuevo valor", credentials);
  }, [credentials]);

  const handleInputValue = ({ target: { value, name } }) => {
    /**
     * const objectState =
     * {
     *    email: valorInput,
     *    password: valorInputPassword
     * }
     */
    setCredentials({ ...credentials, [name]: value });
  };

  const submitForm = async () => {
    // Simular peticion al backend
    if (
      credentials.user === USER_HARDCODED &&
      credentials.password === PASSWORD_HARDCODED
    ) {
      console.log("login exitoso");
      setisUserActive(true);

      return <h3>Login exitoso </h3>;
    } else console.log("NO VAS A PASAR ");
  };

  return (
    <>
      {isUserActive ? (
        <Dashboard logout={() => setisUserActive(false)} />
      ) : (
        <div className="App">
          <Card className="card-login" variant="outlined">
            <CardContent>
              <div>
                <h3>Login app fake 🤡</h3>
                {/* USER */}
                <div style={{ margin: 10 }}>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    id="outlined-basic"
                    label="User"
                    variant="outlined"
                    name="user"
                    onChange={handleInputValue}
                    value={credentials.user || ""}
                  />
                </div>

                {/* PASSWORD */}
                <div style={{ margin: 10 }}>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      ),
                    }}
                    type="password"
                    label="Password"
                    name="password"
                    variant="outlined"
                    onChange={handleInputValue}
                    value={credentials.password || ""}
                  />
                </div>
                <Button variant="contained" onClick={() => submitForm()}>
                  {" "}
                  Enviar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default App;
