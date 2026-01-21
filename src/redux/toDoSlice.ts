import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { Tasks, Todo, Data } from "../type/types.ts";
import { RootState } from "./store.ts";

interface ToDoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const url = "https://dummyjson.com/todos";
const initialState: ToDoState = { todos: [], loading: false, error: null };

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch(url);
  const result: Data = await response.json();
  return result.todos;
});

export const toDoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    handleAddNewTask(state, { payload }: PayloadAction<string>) {
      state.todos.push({
        id: nanoid(),
        todo: payload,
        completed: false,
        userId: 0,
      });
    },
    handleDeleteTask(state, { payload }: PayloadAction<string | number>) {
      state.todos = state.todos.filter((task: Tasks) => task.id !== payload);
    },
    handleUpdateTask: (
      state,
      { payload }: PayloadAction<{ id: string | number; text: string | null }>,
    ) => {
      const task = state.todos.find((task: Tasks) => task.id === payload.id);
      if (task) {
        if (payload.text !== null) {
          task.todo = payload.text;
        } else {
          task.completed = !task.completed;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch todos";
      });
  },
});

export const selectTodos = (state: RootState) => state.todos.todos;

export const { handleAddNewTask, handleDeleteTask, handleUpdateTask } =
  toDoSlice.actions;
