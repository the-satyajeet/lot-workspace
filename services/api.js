import axios from 'axios';

const BASE_URL = 'http://localhost:9191/api';

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;