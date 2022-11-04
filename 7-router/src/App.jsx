import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import User from "./components/User";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Navigate to="/" replace />} />
      {/* IMPORTANTE poner  👉🏽 / */}
      <Route path="main-dashboard" element={<Dashboard />} />
      <Route path="user" element={<User />} />

      {/* pagina 404 */}
      <Route path="*" element={<h3> Page not found 404 </h3>} />
    </Routes>
  );
}

export default App;
