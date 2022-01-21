import { createSlice } from '@reduxjs/toolkit'

import axios from '../../API/axiosInstance'
import cookie from '../../cookies'

export const registrationUser = async(username, email, password)=> {
  axios.post('/auth/registration', {
      email,
      password,
      username
    })
    .then(function (response) {
      cookie.save("accessToken", response.data.token, {
        expires: 7,
      });
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
        localStorage.setItem('token',JSON.stringify(response.data.token))
    })
    .catch(function (error) {
      console.log(error);
    })
}

const userSlice = createSlice({
  name: 'todo',
  initialState: { auth: false },
  reducers: {
    auth: (state) => {
      state.auth = true
    },
    noAuth: (state) => {
      state.auth = false
    }
  },
})

export default userSlice.reducer