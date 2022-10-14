import axios from "axios";
import { logout } from "./utils/auth";

const apiClient = axios.create({
  baseURL: "http://localhost:5002/api/v1",
  timeout: 1000,
});

//executes before every request
apiClient.interceptors.request.use(
  (config) => {
    const { token } = JSON.parse(localStorage.getItem("userData"));

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//maybe merge these 2
export const login = async (data) => {
  try {
    return await apiClient.post("/auth/login", data);
  } catch (err) {
    return {
      error: true,
      err,
      message: errorMessage(data),
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post("/auth/register", data);
  } catch (err) {
    console.log(err);
    return {
      error: true,
      err,
      message: errorMessage(data) || err.response.data,
    };
  }
};

const errorMessage = (data) => {
  if (data.email === "") {
    return "The email address is required";
  }
  // eslint-disable-next-line
  if (!data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    return "The email format is invalid";
  if (data.username === "") {
    return "The username is required";
  }
  if (data.password === "") return "The password is required";
  return;
};

const checkStatusCode = (err) => {
  const statusCode = err.statusCode.status;

  if (statusCode && (statusCode === 401 || statusCode === 403)) {
    logout();
  }
};
