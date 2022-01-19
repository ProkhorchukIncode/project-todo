import {Link} from "react-router-dom";
import { useLocation} from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../Routes/routes.js";

import Box from "@mui/system/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import './NavigationBar.css'

const NavigationBar =({auth}) => {
    const {pathname} = useLocation()

    let routes = publicRoutes
    const getRoutes = (auth) => {
        if(auth){
           routes = privateRoutes
        } 
        return routes
    }
    getRoutes(auth)

    const isActiveLink = (path) => {
        if(path.includes('/:id')){
            path = path.slice(0,-4);
            if(path=== pathname.slice(0,-2)){
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
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default NavigationBar