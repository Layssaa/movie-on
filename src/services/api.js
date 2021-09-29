import axios from "axios";
const PORT = 8000;

const api = axios.create({
    baseURL: `http://localhost:${PORT}`
});

export default api;