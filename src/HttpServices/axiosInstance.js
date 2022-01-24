import axios from 'axios'

import { refreshToken } from '../Redux/user/userSlice';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
})

const createSetAuthInterceptor = options => config => {
  console.log('request');
  if (config.url.includes('auth')) {
    config.withCredentials = true;
  }
  if (options) {
    console.log('OLOLO');
    config.headers.Authorization = `Bearer ${JSON.parse(options)}`;
  } else {
    config.headers.Authorization = '';
  }
  return config;
}

axiosInstance.interceptors.request.use(createSetAuthInterceptor(localStorage.getItem("token")));
axiosInstance.interceptors.response.use(
  config => {
    console.log('response');
    return config;
  },
  (err) => {
    const error = err
    console.log('response error');
    if(error.response.status===401){
      refreshToken();
      err.response.config()
      console.log('401');
    }
    return err
 }
)

export default axiosInstance