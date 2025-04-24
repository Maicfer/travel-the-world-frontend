import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./Registro.css";

const Registro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    documentNumber: "",
    birthDate: "",
    country: "",
    city: "",
    phone: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    const payload = {
      email: formData.email,
      password: formData.password,
      full_name: formData.fullName,
      document_number: formData.documentNumber,
      birth_date: formData.birthDate,
      country: formData.country,
      city: formData.city,
      phone: formData.phone,
      gender: formData.gender,
    };

    api.post("/register/", payload)
      .then((res) => {
        alert("Registro exitoso. Inicia sesión.");
        navigate("/login");
      })
      .catch((err) => {
        console.error("Error en registro", err);
        alert("Error en el registro");
      });
  };

  return (
    <div className="registro-container">
      <div className="registro-card">
        <h2>Registro</h2>
        <form onSubmit={handleSubmit} className="registro-form">
          <input name="fullName" placeholder="Nombre completo" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Correo electrónico" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirmar contraseña" onChange={handleChange} required />
          <input name="documentNumber" placeholder="Número de documento" onChange={handleChange} required />
          
          <label>Fecha de nacimiento</label>
          <input type="date" name="birthDate" onChange={handleChange} required />

          <input name="country" placeholder="País" onChange={handleChange} required />
          <input name="city" placeholder="Ciudad" onChange={handleChange} required />
          <input name="phone" placeholder="Celular (con indicativo)" onChange={handleChange} required />
          <select name="gender" onChange={handleChange} required>
            <option value="">Selecciona género</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Registro;
