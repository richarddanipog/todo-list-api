import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiDelete, apiGet, apiPost } from "../apiUtils";

export const fetchTodosAsync: any = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const response = await apiGet("api/todos");

    return response;
  }
);

export const createTodoAsync: any = createAsyncThunk(
  "todos/createTodo",
  async (newTodo: { title: string; decription: string }) => {
    const response = await apiPost(`api/todos`, newTodo);

    return response;
  }
);

export const deleteTodoAsync: any = createAsyncThunk(
  "todos/deleteTodo",
  async (todoId: string) => {
    await apiDelete(`api/todos/${todoId}`);

    return todoId;
  }
);
