import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../API/axiosInstance'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`todos`)
    return response.data
  } catch (err) {
    let error = err; 
    return rejectWithValue(error);
  }
})

const todosSlice = createSlice({
  name: 'todo',
  initialState: { entities: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.entities = action.payload
    })
  },
})

export default todosSlice.reducer