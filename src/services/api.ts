import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev.database.freelajobs.com.br/',
});

export default api;
