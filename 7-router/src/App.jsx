import { useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import User from "./components/User";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Navigate to="/" replace />} />
        {/* IMPORTANTE poner  👉🏽 / */}
        <Route path="main-dashboard" element={<Dashboard />} />
        <Route path="user" element={<User />} />

        {/* pagina 404 */}
        <Route path="*" element={<h3> Page not found 404 </h3>} />
      </Routes>
       <div>
        <Link className="boton" to="/">Home</Link>
        <Link className="boton" to="login">Login</Link>
        <Link className="boton" to="main-dashboard">Dashboard</Link>
        <Link className="boton" href="/user">User</Link>
       </div>
    </>
  );
}

export default App;
