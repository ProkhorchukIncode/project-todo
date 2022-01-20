import { Link } from "react-router-dom";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import TodoCard from "../TodoCard";

const TodoList = ({todos}) => {
    console.log(todos);
    return (<>
        <List>
            {todos.map(({id, text, state}) => 
            <ListItem key ={id}>
                <Link to={`/todo/${id}`}>
                    <TodoCard 
                        id={id}
                        text={text}
                        state={state} 
                    />
                </Link>
            </ListItem>
            )}
        </List>
    </>
    )
}
export default TodoList