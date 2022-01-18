import Box from "@mui/system/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";

const NavigationBar =() => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    TODO
                </Typography>
                  <Link to="/registration">Sign up</Link>
                  <Link to="/login">Sign in</Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default NavigationBar