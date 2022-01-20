import { useState } from "react";

import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import NoTodos from "../../../Components/NoTodos";

import TodoList from "../../../Components/TodoList"

let todos = [
    {
        id: 1,
        text: '1',
        state: 'Completed',
    },
    {
        id: 2,
        text: '2',
        state: 'Incompleted',
    },
]
// todos = undefined

const HomePage = () => {
    const [filter, setFilter] = useState('All')

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <Box sx={{mt:5}}>
            <Typography component="h2">
                Works to be done
            </Typography>
            <Box component="form">
                <Box style ={{position: 'relative',}}>
                    <TextField
                        id="name"
                        label="Enter the todo"
                        name='name'
                    />
                    <Button sx={{zIndex: 'tooltip', right: 60, top:10}}>
                        +
                    </Button>
                </Box>
                <Select
                    labelId="filter"
                    id="filter"
                    value={filter}
                    label="All"
                    onChange={handleChange}
                    >
                    <MenuItem value={'All'}>All</MenuItem>
                    <MenuItem value={'Completed'}>Completed</MenuItem>
                    <MenuItem value={'Incompleted'}>Incompleted</MenuItem>
                </Select>
            </Box>
            {todos 
            ? <TodoList todos={todos}/>
            :
             (<NoTodos/>)
            }
        </Box>
    )
}
export default HomePage