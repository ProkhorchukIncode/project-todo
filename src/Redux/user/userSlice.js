import { createSlice } from '@reduxjs/toolkit'

import axios from '../../HttpServices/axiosInstance'

export const refreshToken = async()=> {
  axios.get('/auth/refresh')
    .then(function (response) {
      localStorage.setItem('token',JSON.stringify(response.data.token));
    })
    .catch(function (error) {
      console.log(error);
    })
}

export const registrationUser = async(username, email, password)=> {
  axios.post('/auth/registration', {
      email,
      password,
      username
    })
    .then(function (response) {
      localStorage.setItem('token',JSON.stringify(response.data.token));
    })
    .catch(function (error) {
      console.log(error);
    })
}

export const loginUser = async( email, password)=> {
  axios.post('/auth/login', {
      email,
      password
    })
    .then(function (response) {
      localStorage.setItem('token',JSON.stringify(response.data.token));
    })
    .catch(function (error) {
      console.log(error);
    })
}

const userSlice = createSlice({
  name: 'user',
  initialState: { auth: false },
  reducers: {
    auth: (state) => {
      state.auth = true
    },
    noAuth: (state) => {
      state.auth = false
  },
  },
})

export const {auth, noAuth} = userSlice.actions

export default userSlice.reducer