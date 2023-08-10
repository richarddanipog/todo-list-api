import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

export type RootState = ReturnType<typeof store.getState>;

export const store: ToolkitStore = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
