import axios from 'axios';
import { getEnvironment } from '../helper/getEnvironment';

const { VITE_API_URL } = getEnvironment();

const appApi = axios.create({
    baseURL: VITE_API_URL,
});

// Interceptors
appApi.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token'),
    };
    return config;
});

export default appApi;
