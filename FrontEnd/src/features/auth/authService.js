import axios from "axios";
import { getToken } from "./userSlice";

var token = {
    body: {
        token: ''
    }
}

var checkedBtn = false

//Axios PARAMS
const bodyParameters = {key:"value"};
const API_URL_LOGIN = 'http://localhost:3001/api/v1/user/login'
const API_URL_DATA = 'http://localhost:3001/api/v1/user/profile'
const config = { headers: { Authorization: `Bearer ${getToken()}` } };

// login User
const login = async (userData) => {
    const res = await axios.post(API_URL_LOGIN, userData)
    if (res.data) {
        token = res.data.body.token
        localStorage.setItem('token', token)
    }
    return token
}

// logout User, remouves the token
const logout = async () => {
    localStorage.removeItem('token')
}

// get Data User
const getDatas = async () => {
    const res = await axios.post(API_URL_DATA, bodyParameters, config)
    return res
}

//is checked
const isChecked = async () => {
    checkedBtn = !checkedBtn
}

// Set the token inside the LOCALSTORAGE
// can be usefull if there is a token with a longer lifetime
const rememberToken = async () => {
    if (checkedBtn) {
        localStorage.setItem("token", token)
    }
}

// updateUserData
export const updateUserData = (
    async (userData) => {
        const body ={
            firstName: userData.firstN,
            lastName: userData.lastN
            }

        axios
            .put(
                API_URL_DATA, 
                body,
                config,
                {
                    firstName: userData.firstN,
                    lastName: userData.lastN
                    }
            )
            .catch((error) => {
                console.log(error);
               })
        }
)

const authService = {
    updateUserData,
    isChecked,
    rememberToken,
    getDatas,
    login,
    logout
}
export default authService