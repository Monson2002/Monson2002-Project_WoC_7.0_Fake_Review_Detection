import axios from "axios";

const axiosInstance = axios.create({
  baseURL: '/api/',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})

export default axiosInstance;