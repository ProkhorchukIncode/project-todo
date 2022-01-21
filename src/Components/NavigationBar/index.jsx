import { useState, useEffect } from "react";
import {Link, useLocation} from "react-router-dom";

import ROUTES from "../../Routes/routes.js";

import Box from "@mui/system/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Logout from "../Logout/index.jsx";

import './NavigationBar.css'

const NavigationBar =({auth}) => {
    const {pathname} = useLocation();
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
    
    const isActiveLink = (path) => {
        if(path.includes('/:id')){
            path = path.slice(0,-4);
            if(path=== pathname.slice(0,-4)){
                return 'activeLink'
            }
        }
        
        if(path=== pathname){
            return 'activeLink'
        }
        return 'link'
    }
    
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    TODO
                </Typography>
                    {routes.map(({name,path})=> {
                        return(
                        <Link to={path} key={path} className={isActiveLink(path)}>
                            {name}
                        </Link>)
                    })}
                    <Logout/>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default NavigationBar