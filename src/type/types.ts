type Todo = {
  id: number | string;
  todo: string;
  completed: boolean;
  userId: number;
};

type Data = {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
};

type Task = {
  id: number | string;
  todo: string;
  completed: boolean;
};

type Id = number | string;

type AddTaskProps = {
  addNewTask: (text: string) => void;
};

type TaskListProps = {
  tasks: Task[];
  deleteTask: (id: Id) => void;
  editTask: (text: string, id: Id) => void;
  completeTask: (id: Id) => void;
};

type SortTaskProps = { setFilter: (filter: string) => void };

type TaskProps = {
  id: Id;
  name: string;
  completed: boolean;
  deleteTask: (id: Id) => void;
  editTask: (text: string, id: Id) => void;
  completeTask: (id: Id) => void;
};

type EditTaskProps = {
  editTask: (text: string, id: Id) => void;
  id: Id;
  name: string;
  isEdit: boolean;
  toggleEdit(): void;
  setIsEdit: (isEdit: boolean) => void;
};

type EditInputProps = {
  editTask: (text: string, id: Id) => void;
  id: Id;
  key: Id;
  setIsEdit: (isEdit: boolean) => void;
};

type DeleteTaskProps = {
  deleteTask: (id: Id) => void;
  id: Id;
};

export type {
  Todo,
  Data,
  Task,
  Id,
  AddTaskProps,
  SortTaskProps,
  TaskListProps,
  TaskProps,
  EditTaskProps,
  EditInputProps,
  DeleteTaskProps,
};
