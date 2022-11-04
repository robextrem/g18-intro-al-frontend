import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* IMPORTANTE poner  👉🏽 / */}
      <Route path="/main-dashboard" element={<Dashboard />} />

      {/* pagina 404 */}
      <Route path="*" element={<h3> Page not found 404 </h3>} />
    </Routes>
  );
}

export default App;
