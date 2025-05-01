export type Id = number | string;

export interface Tasks {
  id: Id;
  todo: string;
  completed: boolean;
}

export interface Todo extends Tasks {
  userId: number;
}

export interface Data {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}
export type FilterType = "all" | "completed" | "uncompleted";
