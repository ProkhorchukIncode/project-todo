import { Link } from "react-router-dom";

import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";

import NoComments from "../../../Components/NoComments"
import ButtonsGroup from "../../../Components/ButtonsGroup"

let data = {
    id: 1,
    text: '1',
    state: 'Completed',
    comment: 'lya-lya'
}

const TodoPage = () => {

    const {id, text, state, comment} = data
    return(
        <Box sx={{p:10}}>
            <Typography style={{textAlign: 'center', fontSize: '25px'}} component='h2'>
                Information
            </Typography>
            <Box sx={{pt:2}}>
                <Typography sx={{mr:2}}>
                    {state}
                </Typography>
                <Typography>
                    {text}
                </Typography>
                {comment ? <>
                    <Typography>{comment}</Typography>
                </>
                : <NoComments/>
            }
            </Box>
            <ButtonsGroup/>
            <Link to='/home'>&#10094; To Home</Link>
        </Box>
    )
}
export default TodoPage