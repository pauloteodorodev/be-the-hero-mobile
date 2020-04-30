import axios from 'axios';

/**
 * Create an Axios api with defaults
 */
const api = axios.create({
    baseURL: 'http://192.168.0.16:3333',
});

export default api;