import { configureStore } from "@reduxjs/toolkit";
import { toDoSlice } from "./toDoSlice.ts";

export const store = configureStore({
  reducer: { todos: toDoSlice.reducer },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
