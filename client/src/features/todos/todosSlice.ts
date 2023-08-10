import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  createTodoAsync,
  deleteTodoAsync,
  fetchTodosAsync,
} from "../../utils/api/todosApi";
import { ITodo } from "../../interfaces/todo.interface";

interface TodosState {
  todos: ITodo[];
}

const initialState: TodosState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<ITodo[]>) {
      state.todos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodosAsync.fulfilled, (state, action) => {
      state.todos = action.payload;
    });

    builder.addCase(createTodoAsync.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });

    builder.addCase(deleteTodoAsync.fulfilled, (state, action) => {
      const deletedTodoId = action.payload;

      state.todos = state.todos.filter((todo) => todo._id !== deletedTodoId);
    });
  },
});

export const { setTodos } = todosSlice.actions;

export default todosSlice.reducer;
