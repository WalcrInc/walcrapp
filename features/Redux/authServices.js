import axios from "axios";

const baseURL = "";

const register = async (data) => {
  const response = await axios.post(
    "https://walcr-backend.onrender.com/auth/register",
    data
  );
  return response.data;
};
const login = async (data) => {
  const response = await axios.post(
    "https://walcr-backend.onrender.com/auth/login",
    data
  );
  return response.data;
};


const authServices = {
  register,
  login,
};

export default authServices;
