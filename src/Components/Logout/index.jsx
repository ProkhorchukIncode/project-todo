import Button from "@mui/material/Button";

const Logout = () =>{
    const onClick = () => {
        localStorage.setItem('token', '')
    }

    return(<>
    <Button type='submit' onClick={onClick} style={{color: 'red'}}>Logout</Button>
    </>)
}
export default Logout