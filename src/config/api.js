import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: "http://localhost:1337/",
  timeout: 30000,
});

// Interceptor untuk response error
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = error.response?.data?.message || error.message;
    toast.error("Error: " + errorMessage); // Tampilkan toast ketika error
    return Promise.reject(error);
  }
);

export default instance;
