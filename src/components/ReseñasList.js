// src/components/ReseñasList.js
import React, { useEffect, useState } from "react";
import api from "../services/api";
import "../components/ReseñasList.css";

const ReseñasList = () => {
  const [reseñas, setReseñas] = useState([]);

  useEffect(() => {
    api.get("reseñas/")
      .then((res) => {
        setReseñas(res.data);
      })
      .catch((err) => {
        console.error("Error al obtener reseñas", err);
      });
  }, []);

  return (
    <div className="reseña-lista">
      <h2>Lista de reseñas</h2>
      {reseñas.length === 0 ? (
        <p>No hay reseñas disponibles.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {reseñas.map((r) => (
            <li key={r.id} className="reseña-item">
              <div className="reseña-card">
                <p><strong>Nombre:</strong> {r.nombre}</p>
                <p><strong>Correo:</strong> {r.correo}</p>
                <p><strong>Ciudad visitada:</strong> {r.ciudad}</p>
                <p><strong>Comentario:</strong> {r.comentario}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReseñasList;





