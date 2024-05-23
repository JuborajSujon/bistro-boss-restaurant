import axios from "axios";
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export default function useAxiosSecure() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  // interceptors - request  to add authorizaton header for every secure call to the server
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");

      config.headers.authorization = `Bearer ${token}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // interceptors - response  to remove authorizaton header for every secure call to the server
  axiosSecure.interceptors.response.use(
    (res) => res,
    async (error) => {
      const status = error.response?.status;

      // for 401 and 403 status we need to logout user and redirect to login page
      if (status === 401 || status === 403) {
        await logout();
        localStorage.removeItem("access-token");
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
}
