import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

//Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

// set the initialState for AUTH SLICE
const initialState = {
    user: user ? user : null, // check if user is Known
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// CREATE AUTH SLICE
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.messaqge = action.payload
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
    }
})

// Login User
export const login = createAsyncThunk(
    'auth/login',
    async (user, thunkAPI) => {
        try {
            return await authService.login(user)
        }
        catch (error) {
            const message = (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Logout
export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        await authService.logout()
    }
)
//isChecked
export const isChecked = createAsyncThunk(
    'auth/isChecked',
    async () => {
        await authService.isChecked()
    }
)


export const { reset } = authSlice.actions
export default authSlice.reducer
