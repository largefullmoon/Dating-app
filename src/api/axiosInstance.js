import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://pumped-stirred-emu.ngrok-free.app',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;