import {useState, useEffect} from 'react';
import {Nombre} from './Nombre'
import './App.css'

const App = () => {

  const [count, setCount] = useState(5);
  const [nombre, setNombre] = useState("Juan")

  const nombrar = (n) =>{
    console.log("Funciones que hagan algo")
    setNombre(n);
  }

  useEffect(function(){
    console.log("Se ejecuta al render");
  },[props.nombre]);

  return (
    <div className="App">
      <Nombre nombre={nombre} edad={count}></Nombre>
      <p>Count: {count}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Sumar 
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Restar
        </button>
      </div>
      <div>
        <button onClick={() => nombrar("Luis")}>Nombrar</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
