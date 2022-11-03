import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Dashboard() {
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

  // quiero visualizar en un console.log cada que cambie el estado charactersArray  👀
  useEffect(() => {
    console.log("cambia estado", charactersArray);
  }, [charactersArray]);

  return (
    <>
      <h4>Dashboard</h4>

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
