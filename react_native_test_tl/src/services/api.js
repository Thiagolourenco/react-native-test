import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Thiagolourenco/API_REST_FAKE/',
});

export default api;
