import axios from "axios";
import React, { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    // consumir la API de star wars
    const fetchApi = async () => {
      const BASE_URL = "https://swapi.dev/api/";
      try {
        const result = await axios.get(`${BASE_URL}people`);
        console.log("result", result);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchApi();

    // PROMESA THEN CATCH 👉🏽 axios.get(`${BASE_URL}people`).then().catch()
  }, []);

  return (
    <>
      <div>Dashboard</div>
      <h4>Bienvenido</h4>
    </>
  );
}
