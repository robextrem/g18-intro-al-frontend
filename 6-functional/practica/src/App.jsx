import { useState, useEffect } from 'react'
import axios from 'axios';
import {Personaje} from "./Personaje"
import './App.css'

function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(()=>{
    axios.get("https://hey-arnold-api.herokuapp.com/api/v1/characters").then(response => {
        setPersonajes(response.data);
    })
  },[])
  
  return (
    <div className="App">
      {
        personajes.map((personaje) => {
          return (<Personaje key={personaje._id} image={personaje.image} name={personaje.name}></Personaje>)
        })
      }
    </div>
  )
}

export default App
