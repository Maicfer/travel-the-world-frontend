import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-around", padding: "1rem", backgroundColor: "#f0f0f0" }}>
      <Link to="/">Inicio</Link>
      {!token ? (
        <>
          <Link to="/login">Iniciar sesión</Link>
          <Link to="/registro">Registrarse</Link>
        </>
      ) : (
        <>
          <Link to="/crear-reseña">Crear reseña</Link>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;