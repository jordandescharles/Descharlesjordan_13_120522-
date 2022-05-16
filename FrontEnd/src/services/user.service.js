import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:3001/api/v1/user/login";

const getUserInfos = () => {
  return axios.get(API_URL , { headers: authHeader() });
};

const userService = {
  getUserInfos,
};
export default userService