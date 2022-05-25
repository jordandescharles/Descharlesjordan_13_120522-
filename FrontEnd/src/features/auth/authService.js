import axios from "axios";

var token = {
    body:{
        token:''
    }
}

var checkedBtn = false
var config = {};
const bodyParameters = { key: "value" };
const API_URL_LOGIN = 'http://localhost:3001/api/v1/user/login'
const API_URL_DATA = 'http://localhost:3001/api/v1/user/profile'

// login User
const login = async (userData) => {
    const res = await axios.post(API_URL_LOGIN, userData)

    if (res.data) {
        token = res.data
        localStorage.setItem("user", JSON.stringify(token))
        config = { headers: { Authorization: `Bearer ${token.body.token}`}};
    }
    return token
}

// logout User
const logout = async () => {
    localStorage.removeItem('user')
}

// get Data User
const getDatas = async () => {
    const res = await axios.post(API_URL_DATA, bodyParameters, config)
    const userInfo = res.data.body
    console.log(userInfo)
    return userInfo
}

//is checked
const isChecked = async () => {
    checkedBtn = !checkedBtn
}

const rememberToken = async () => {
    if (checkedBtn) {
        localStorage.setItem("user", JSON.stringify(token))
    }
}

const authService = {
    isChecked,
    rememberToken,
    getDatas,
    login,
    logout

}
export default authService