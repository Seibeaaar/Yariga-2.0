import axios from "axios";

const instance = axios.create({
  baseURL: "https://yariga.azurewebsites.net",
});

instance.interceptors.request.use((config) => {
  const jwt = localStorage.getItem("JWT");
  config.headers.Authorization = `Bearer ${jwt}`;
  return config;
});

export default instance;