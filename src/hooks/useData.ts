import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Todo, Data, Id } from "../type/types.ts";

export const useData = () => {
  const [data, setData] = useState<Todo[]>([]);
  const url = "https://dummyjson.com/todos";

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const result: Data = await response.json();
        return result;
      } catch (e) {
        console.error(e);
      }
    };
    getData().then((response) => {
      if (response) {
        setData(response.todos);
      }
    });
  }, []);

  const addNewTask = (text: string) => {
    setData((prev: Todo[]) => [
      ...prev,
      { id: nanoid(), todo: text, completed: false, userId: 0 },
    ]);
  };
  const deleteTask = (id: Id) => {
    setData((prev) => prev.filter((element) => element.id !== id));
  };

  const updateTask = (text: string | null, id: Id) => {
    setData((prev) =>
      prev.map((task) => {
        if (task.id === id && text !== null) {
          return { ...task, todo: text };
        }
        if (task.id === id && text === null) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  };

  const editTask = (text: string, id: Id) => {
    updateTask(text, id);
  };
  const completeTask = (id: Id) => {
    updateTask(null, id);
  };
  return { data, addNewTask, deleteTask, editTask, completeTask };
};
