import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

export default function Dashboard({ logout }) {
  // props.logout

  const [charactersArray, setCharactersArray] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const BASE_URL = "https://swapi.dev/api/";
      try {
        const {
          data: { results },
        } = await axios.get(`${BASE_URL}people`);
        console.log("results", results);
        setCharactersArray(results);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchApi();
    // PROMESA THEN CATCH 👉🏽 axios.get(`${BASE_URL}people`).then().catch()
  }, []);

  useEffect(() => {
    console.log("cambia estado", charactersArray);
  }, [charactersArray]);

  // Poner botón de Logout y sacarte del dashboard
  // para renderizar otra vez el Login

  return (
    <>
      <h4>Dashboard</h4>
      <Button onClick={() => logout()} variant="outlined">
        Logout
      </Button>

      <h5>Lista de personajes </h5>
      {charactersArray.map((element, i) => (
        <div key={i}>
          <p>Name: {element.name}</p>
          <p>Height: {element.height}</p>
          <p>Hair color: {element.hair_color}</p>
        </div>
      ))}
    </>
  );
}
