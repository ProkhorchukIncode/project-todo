import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import NavigationBar from "./Components/NavigationBar";
import RoutesComponent from "./Components/RoutesComponent";

import ROUTES from "./Routes/routes";

import axiosInstance from './HttpServices/axiosInstance'
import { refreshToken } from "./Redux/user/userSlice";

import Container from "@mui/material/Container";

function App() {
  const [routes, setRoutes] = useState(ROUTES.PUBLIC_ROUTES)
  const [token, setToken] = useState('')
  const dispatch = useDispatch();
  const authorization = useSelector((state) => state.user.auth)
  
  const isAuth = (authorization) => {
    if(authorization){
      setRoutes(ROUTES.PRIVATE_ROUTES)
      return
    }
    setRoutes(ROUTES.PUBLIC_ROUTES)
    return
  }
// console.log(token);
  useEffect(()=> {
    if (localStorage.getItem("token").length > 0) {
      dispatch(refreshToken())
      setToken(localStorage.getItem("token"));
    }
    isAuth(authorization)
  },[dispatch, authorization])

  return (<>
  
  <button onClick={()=>{
    try{
      axiosInstance.get(`http://localhost:5000/todos`)
    } catch(e){
      console.log('all error');
    }
  }}>123</button>

      <NavigationBar auth ={authorization}/>
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
