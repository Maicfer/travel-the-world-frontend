import axios from "axios";

// Usa la variable de entorno definida en .env o en Render
const API_BASE_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;


