import { useEffect, useState } from "react";
import type { Task } from "../type/types";

export const useFilter = (props: Task[]) => {
  const [filter, setFilter] = useState("all");
  const [filteredTask, setFilteredTask] = useState(props);

  useEffect(() => {
    switch (filter) {
      case "completed":
        setFilteredTask(props.filter((task) => task.completed));
        break;
      case "uncompleted":
        setFilteredTask(props.filter((task) => !task.completed));
        break;
      default:
        setFilteredTask(props);
        break;
    }
  }, [filter, props]);
  return [setFilter, filteredTask] as const;
};
