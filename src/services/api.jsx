import axios from 'axios';

const API = axios.create({ baseURL: 'https://potibackend.onrender.com/api' });
// const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export default API;