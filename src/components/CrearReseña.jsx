import React, { useState } from "react";
import api from "../services/api";

const CrearReseña = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    ciudad: "",
    comentario: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      await api.post("reseñas/", formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert("Reseña creada con éxito");
      setFormData({
        nombre: "",
        correo: "",
        ciudad: "",
        comentario: ""
      });
    } catch (error) {
      console.error("Error al crear la reseña:", error);
      alert("Error al crear la reseña");
    }
  };

  return (
    <div>
      <h2>Crear Reseña</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="correo"
          placeholder="Tu correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ciudad"
          placeholder="Ciudad visitada"
          value={formData.ciudad}
          onChange={handleChange}
          required
        />
        <textarea
          name="comentario"
          placeholder="Tu comentario"
          value={formData.comentario}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar reseña</button>
      </form>
    </div>
  );
};

export default CrearReseña;
