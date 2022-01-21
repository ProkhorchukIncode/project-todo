import { combineReducers, configureStore } from "@reduxjs/toolkit";

import todosReduser from "./todos/todosSlice";
import userReduser from "./user/userSlice";

const store = configureStore({
    reducer: combineReducers({
        user: userReduser,
        todo: todosReduser,
    })
})

export default store