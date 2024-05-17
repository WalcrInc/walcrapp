import axios from "axios";

const baseURL = "";

const register = async (data) => {
  const response = await axios.post(
    "https://walcr-backend-5aj6.onrender.com/v1/auth/register",
    data
  );
  return response.data;
};
const login = async (data) => {
  const response = await axios.post(
    "https://walcr-backend-5aj6.onrender.com/v1/auth/login",
    data
  );
  return response.data;
};


const authServices = {
  register,
  login,
};

export default authServices;
