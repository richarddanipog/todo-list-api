import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  createTodoAsync,
  deleteTodoAsync,
  fetchTodosAsync,
} from "../../utils/api/todosApi";
import { ITodo } from "../../interfaces/todo.interface";

interface TodosState {
  todos: ITodo[];
  totalTodos: number;
}

const initialState: TodosState = {
  todos: [],
  totalTodos: 0,
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
      state.totalTodos = action.payload.length;
    });

    builder.addCase(createTodoAsync.fulfilled, (state, action) => {
      state.todos.push(action.payload);
      state.totalTodos++;
    });

    builder.addCase(deleteTodoAsync.fulfilled, (state, action) => {
      const deletedTodoId = action.payload;

      state.todos = state.todos.filter((todo) => todo._id !== deletedTodoId);
      state.totalTodos--;
    });
  },
});

export const { setTodos } = todosSlice.actions;

export default todosSlice.reducer;
