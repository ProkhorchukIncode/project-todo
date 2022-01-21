import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

import NavigationBar from "./Components/NavigationBar";
import RoutesComponent from "./Components/RoutesComponent";

import ROUTES from "./Routes/routes";

import axios from "axios";
import axiosInstance from './HttpServices/axiosInstance'
import { refreshToken } from "./Redux/user/userSlice";
import createSetAuthInterceptor from "./HttpServices/axiosInterceptor";
import axiosResponse from "./HttpServices/axiosResponse";

import Container from "@mui/material/Container";



function App() {
  const [routes, setRoutes] = useState(ROUTES.PUBLIC_ROUTES)
  // const dispatch = useDispatch;
  // const authorization = useSelector((state) => state.user.auth)
  
  const token = localStorage.getItem('token')
  //
  const a = () => axios.get(`http://localhost:5000/todos`)
  a()

  axiosInstance.interceptors.request.use(createSetAuthInterceptor(token));
  axios.interceptors.response.use(
    (res) => {
      return res;
   },
    (err) => {
      let error = err
      if(error.response.status===401){
        refreshToken()
      }
      return {}
   }
    )
//
  const isAuth = (authorization) => {
    if(authorization){
      setRoutes(ROUTES.PRIVATE_ROUTES)
      return
    }
    setRoutes(ROUTES.PUBLIC_ROUTES)
    return
  }
  
  useEffect(()=> {
    // dispatch(auth())
    isAuth(token)
  },[token])

  return (<>
      <NavigationBar auth ={token}/>
      <Container>
        <RoutesComponent>
          <Routes>
            {routes.map(({name, path, component})=> {
              return <Route path={path} element ={component} key={name}/>
            })}
            <Route path='*' element ={<Navigate replace to={routes[0].path}/>}/>
          </Routes>
        </RoutesComponent>
      </Container>
    </>
  );
}

export default App;
