import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { logout } from "./authSlice";

var userInfo;
var newName

// set the initialState for user SLICE
const initialState = {
    loadingUser: false,
    userDataError: false,
    fetchedData: false,
    email: null,
    firstName: null,
    id: null,
    lastName: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getDatas.pending, (state) => {
            state.loadingUser = true
        })
        .addCase(getDatas.rejected, (state, action) => {
            state.loadingUser = false
            state.fetchedData = false
            state.userDataError = action.payload
        })
        .addCase(getDatas.fulfilled, (state, action) => {
            state.loadingUser = false
            state.userDataError = false;
            state.email = action.payload.email
            state.firstName = action.payload.firstName
            state.id = action.payload.id
            state.lastName = action.payload.lastName
            state.fetchedData = true
        })
        .addCase(updateUserData.pending, (state) => {
            state.loadingUser = true
        })
        .addCase(updateUserData.fulfilled, (state, action) => {
            state.loadingUser = false
            state.userDataError = false;
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        })
    
        .addCase(logout.fulfilled, (state) => {
            state.fetchedData = false
            state.userDataError = false
            state.email = null
            state.firstName = null
            state.id = null
            state.lastName = null
        })
    }
})

//rememberToken
export const rememberToken = createAsyncThunk(
    'user/rememberToken',
    async () => {
        await authService.rememberToken()
    }
)

// function to acces token everywhere
export const getToken = () => {
    const token = localStorage.getItem('token')
    return token
}

// getDatas 
export const getDatas = createAsyncThunk(
    'user/getDatas',
    async () => {
        await authService.getDatas()
            .then((res) => {userInfo = res.data.body} )
        return userInfo
    }
)

// getDatas 
export const updateUserData = createAsyncThunk(
    'user/updateUserData',
    async () => {
        await authService.updateUserData()
            .then((res) => {newName = res.data.body} )
        return newName
    }
)

export default userSlice.reducer
