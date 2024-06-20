import axios from "axios";

const baseURL = "";

const register = async (data) => {
  const response = await axios.post(
    "https://reluctant-jean-cliqpod-e187c94a.koyeb.app/v1/auth/register",
    data
  );
  return response.data;
};
const login = async (data) => {
  const response = await axios.post(
    "https://reluctant-jean-cliqpod-e187c94a.koyeb.app/v1/auth/login",
    data
  );
  return response.data;
};

const authServices = {
  register,
  login,
};

export default authServices;
