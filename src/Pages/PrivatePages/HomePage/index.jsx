import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import NoTodos from "../../../Components/NoTodos";
import TodoList from "../../../Components/TodoList"

import {fetchTodos} from '../../../Redux/todos/todosSlice'

const HomePage = () => {
    const [filter, setFilter] = useState('All')
    const [newTodo, setNewTodo] = useState('')

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.entities)

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    const handleChangeNewTodo = (event) => {
        setNewTodo(event.target.value)
    }
    
    useEffect(() => {
        dispatch(fetchTodos())
    },[dispatch])

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
                        value={newTodo}
                        onChange={handleChangeNewTodo}
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
                    onChange={handleChangeFilter}
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