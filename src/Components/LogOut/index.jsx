import { useDispatch } from "react-redux";

import Button from "@mui/material/Button";

import { logOut } from "../../Redux/user/userSlice";

const LogOut = () =>{
    const dispatch = useDispatch()
    return(<>
    <Button type='submit' onClick={() => dispatch(logOut())} style={{color: 'red'}}>Logout</Button>
    </>)
}
export default LogOut