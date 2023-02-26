import axios from 'axios';
const baseURL = 'http://localhost:3000/api';

export const mainInstance = axios.create({
    baseURL,
    timeout: 25000
});