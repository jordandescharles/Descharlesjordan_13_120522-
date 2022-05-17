import axios from "axios";

const API_URL_LOGIN = 'http://localhost:3001/api/v1/user/login'

// login User
const login = async (userData,checked) => {
    const res = await axios.post(API_URL_LOGIN , userData)
    console.log(checked)

    if(res.data && checked === 'on'){
        localStorage.setItem("user" , JSON.stringify(res.data))
    }

    return res.data
}

// logout User
const logout = async () => {
        localStorage.removeItem('user')
}

const authService = {
    login,
    logout
}
export default authService