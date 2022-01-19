import Card from "@mui/material/Card";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const TodoCard = ({id, text, state}) => {

    return (
        <Card sx={{mt:2}} id={id} state={state}>
            <Box>
                <Typography>{text}</Typography>
            </Box>
            <Box>
                <Button>
                    Ok
                </Button>
                <Button>
                    Change
                </Button>
                <Button>
                    Delete
                </Button>
            </Box>
        </Card>
    )
}
export default TodoCard