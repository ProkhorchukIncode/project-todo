import Card from "@mui/material/Card";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";

import ButtonsGroup from "../ButtonsGroup";

const TodoCard = ({id, text, state}) => {

    return (
        <Card sx={{mt:2}} id={id} state={state}>
            <Box>
                <Typography>{text}</Typography>
            </Box>
            <ButtonsGroup/>
        </Card>
    )
}
export default TodoCard