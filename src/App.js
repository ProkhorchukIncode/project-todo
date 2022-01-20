import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import NavigationBar from "./Components/NavigationBar";
import RoutesComponent from "./Components/RoutesComponent";

import ROUTES from "./Routes/routes";


import Container from "@mui/material/Container";

//autorisation
const auth = true

function App() {
  const [routes, setRoutes] = useState(ROUTES.PUBLIC_ROUTES)

  const isAuth = (auth) => {
    if(auth){
        setRoutes(ROUTES.PRIVATE_ROUTES)
        return
    }
    setRoutes(ROUTES.PUBLIC_ROUTES)
    return
  }
  

  useEffect(()=> {
    isAuth(auth)
  },[auth])

  return (<>
      <NavigationBar auth ={auth}/>
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
