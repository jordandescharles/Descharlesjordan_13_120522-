import axios from "axios";

//Axios PARAMS

const API_URL_LOGIN = 'http://localhost:3001/api/v1/user/login'
const API_URL_DATA = 'http://localhost:3001/api/v1/user/profile'
axios.defaults.headers.common['Authorization']= `Bearer ${localStorage.token}`

// login User
const login = async (userData) => {
    const res = await axios.post(API_URL_LOGIN, userData)
    .catch( error =>{
        alert(error.response.data.message)
    })
    if (res.data) {
        var token = res.data.body.token
        localStorage.setItem('token', token)}  
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`     
}

// logout User, remouves the token
const logout = async () => {
    localStorage.removeItem('token')
}

// get Data User
const getDatas = async () => {
    const res = await axios.post(API_URL_DATA)
    return res
}

var checkedBtn = false
//is checked
const isChecked = async () => {
    checkedBtn = !checkedBtn
}

// Set the token inside the LOCALSTORAGE
// can be usefull if there is a token with a longer lifetime
const rememberToken = async () => {
    if (checkedBtn) {
       // localStorage.setItem("token", )
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
            .put(API_URL_DATA, body)
            .catch((error) => {
                console.log(error);
               })
        }
)

const service = {
    updateUserData,
    isChecked,
    rememberToken,
    getDatas,
    login,
    logout
}
export default service