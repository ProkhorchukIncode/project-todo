import { combineReducers, configureStore } from "@reduxjs/toolkit";

import todosSlice from "./todos/todosSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
    reducer: combineReducers({
        user: userSlice,
        todo: todosSlice,
    })
})

export default store