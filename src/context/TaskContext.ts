import { createContext, useContext } from "react";
import { Id } from "../type/types.ts";

export interface TaskContextArgs {
  deleteTask: (id: Id) => void;
  editTask: (text: string, id: Id) => void;
  completeTask: (id: Id) => void;
}

export const TaskContext = createContext<TaskContextArgs>(
  {} as TaskContextArgs,
);

export const useTaskContext = () => {
  return useContext(TaskContext);
};
