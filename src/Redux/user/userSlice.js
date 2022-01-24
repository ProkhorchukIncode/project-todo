import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'
import axiosInstance from '../../HttpServices/axiosInstance';

export const refreshToken = createAsyncThunk('user/refresh', async( )=> {
  axios.get('http://localhost:5000/auth/refresh', {
      withCredentials: true,
    })
    .then(function (response) {
      console.log('refreshToken use');
      localStorage.setItem('token',JSON.stringify(response.data.token));
    })
    .catch(function (error) {
      const e = error
      localStorage.setItem('token','');
      console.log('refreshToken error');
      return e
    })
})

export const registrationUser = createAsyncThunk('user/registration', async( data)=> {
  const {username, email, password} = data
     axiosInstance.post('/auth/registration', {
      username,
      email,
      password,
    }).then((response)=>{
      localStorage.setItem('token', JSON.stringify(response.data.token))
    })
    .catch((error)=> {
      console.log('registrationUser error');
      return error;
    })
  }
)

export const loginUser = createAsyncThunk('user/logIn', async( data)=> {
  const {email, password} = data
     axiosInstance.post('/auth/login', {
      email,
      password,
    }).then((response)=>{
      localStorage.setItem('token', JSON.stringify(response.data.token))
    })
    .catch((error)=> {
      console.log('loginUser error');
      return error;
    })
  }
)

export const logOut = createAsyncThunk('user/logOut', async()=> {
  axiosInstance.get('/auth/logout')
    .then(function (response) {
      localStorage.setItem('token', '')
    })
    .catch(function (error) {
      const e = error
      console.log('loginOut error');
      return e
    })
})

const userSlice = createSlice({
  name: 'user',
  initialState: { auth: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registrationUser.fulfilled, (state, action) => {
      state.auth = true
    })
    builder.addCase(registrationUser.rejected, (state, action) => {
      state.auth = false
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.auth = true
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.auth = false
    })
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.auth = false
    })
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      state.auth = true
    })
    builder.addCase(refreshToken.rejected, (state, action) => {
      state.auth = false
    })
  },
})

export default userSlice.reducer